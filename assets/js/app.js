/**
 * Technical Help Hub - Main Application Logic
 * Includes Auth simulation, Form Validation, and UI interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  init() {
    this.updateYear();
    this.handleGlobalSearch();
    this.checkAuthStatus();
    this.initTheme();
    this.initScrollAnimations();
    this.setupIntersectionObserver();
    this.initMobileMenu();
    this.initSocialShares();

    // Auto-init specific modules based on page content
    if (document.getElementById('videoMount')) VideoPlayer.init();
    if (document.querySelector('.captcha')) Captcha.initAll();
  },

  initSocialShares() {
    const shares = document.querySelectorAll('.share-btn');
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);

    shares.forEach(btn => {
      let href = btn.getAttribute('href');
      if (href) {
        href = href.replace('[URL]', url).replace('[TITLE]', title);
        btn.setAttribute('href', href);
      }
    });
  },

  initMobileMenu() {
    const headerInner = document.querySelector('.header-inner');
    const nav = document.querySelector('.nav');

    if (headerInner && nav) {
      // Create Toggle Button
      const toggle = document.createElement('button');
      toggle.className = 'mobile-toggle';
      toggle.ariaLabel = 'Toggle Menu';
      toggle.innerHTML = '<span></span><span></span><span></span>';

      // Insert before nav
      headerInner.insertBefore(toggle, nav);

      // Event Listener
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
        toggle.setAttribute('aria-expanded', !expanded);
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = !expanded ? 'hidden' : ''; // Prevent scrolling
      });

      // Close on link click
      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          toggle.classList.remove('active');
          nav.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }
  },

  updateYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  },

  handleGlobalSearch() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    const input = document.querySelector('input[type="search"]');
    if (input && q) input.value = q;
  },

  checkAuthStatus() {
    const user = Auth.getUser();
    const loginBtn = document.querySelector('a[href="login.html"].btn');

    if (loginBtn) {
      if (user) {
        loginBtn.textContent = `Logout (${user.name || user.email.split('@')[0]})`;
        loginBtn.href = "#";
        loginBtn.addEventListener('click', (e) => {
          e.preventDefault();
          Auth.logout();
          window.location.reload();
        });
      }
    }

    // Admin Guard
    if (window.location.pathname.includes('admin.html') && !user) {
      const guard = document.getElementById('adminGuard');
      const panel = document.getElementById('panel');
      if (guard) guard.style.display = 'block';
      if (panel) panel.style.display = 'none';
    } else if (window.location.pathname.includes('admin.html') && user) {
      const guard = document.getElementById('adminGuard');
      const panel = document.getElementById('panel');
      if (guard) guard.style.display = 'none';
      if (panel) panel.style.display = 'block';
    }
  },

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .hero h1, .hero p, .grid > *, .step').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });
  },

  initTheme() {
    let toggleBtn = document.getElementById('theme-toggle');

    if (!toggleBtn) {
      toggleBtn = document.createElement('button');
      toggleBtn.title = 'Toggle Dark Mode';
      toggleBtn.id = 'theme-toggle';
      toggleBtn.ariaLabel = 'Toggle Dark Mode';

      const nav = document.querySelector('.nav');
      if (nav) nav.appendChild(toggleBtn);
    }

    // Check saved preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    toggleBtn.innerHTML = savedTheme === 'dark' ? '☀️' : '🌓';

    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      toggleBtn.innerHTML = next === 'dark' ? '☀️' : '🌓';
    });
  },

  initScrollAnimations() {
    // Already handled by setupIntersectionObserver.
  },

  saveHistory(id, title) {
    if (!id || !title) return;
    let history = JSON.parse(localStorage.getItem('thh_history') || '[]');
    // Remove if exists to push to top
    history = history.filter(h => h.id !== id);
    history.unshift({ id, title, date: new Date().toISOString() });
    // Keep max 10
    if (history.length > 10) history.pop();
    localStorage.setItem('thh_history', JSON.stringify(history));
  },

  toggleBookmark(id, title) {
    let bookmarks = JSON.parse(localStorage.getItem('thh_bookmarks') || '[]');
    const index = bookmarks.findIndex(b => b.id === id);

    if (index > -1) {
      bookmarks.splice(index, 1);
      alert('Removed from bookmarks.');
    } else {
      bookmarks.push({ id, title, date: new Date().toISOString() });
      alert('Added to bookmarks!');
    }
    localStorage.setItem('thh_bookmarks', JSON.stringify(bookmarks));
    this.updateBookmarkButton(id);
  },

  updateBookmarkButton(id) {
    const btn = document.getElementById('btn-bookmark');
    if (!btn) return;

    const bookmarks = JSON.parse(localStorage.getItem('thh_bookmarks') || '[]');
    const isSaved = bookmarks.some(b => b.id === id);
    btn.textContent = isSaved ? '★ Saved' : '☆ Bookmark';
    btn.classList.toggle('btn-secondary', !isSaved);
    btn.style.background = isSaved ? 'var(--brand-primary)' : '';
    btn.style.color = isSaved ? 'white' : '';
  }
};

const Auth = {
  KEY: 'thh_session',
  USERS_KEY: 'thh_users',

  getUser() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY));
    } catch { return null; }
  },

  getAllUsers() {
    try {
      return JSON.parse(localStorage.getItem(this.USERS_KEY) || '{}');
    } catch { return {}; }
  },

  login(email, password) {
    const users = this.getAllUsers();
    const user = users[email.toLowerCase()];

    if (user && user.password === password) {
      localStorage.setItem(this.KEY, JSON.stringify({
        email: user.email,
        name: user.name || email.split('@')[0]
      }));
      return { success: true };
    }
    return { success: false, message: 'Invalid email or password.' };
  },

  register(name, email, password) {
    const users = this.getAllUsers();
    const emailKey = email.toLowerCase();

    if (users[emailKey]) {
      return { success: false, message: 'User already exists.' };
    }

    users[emailKey] = { name, email, password };
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));

    // Auto login
    this.login(email, password);
    return { success: true };
  },

  logout() {
    localStorage.removeItem(this.KEY);
  }
};

const VideoPlayer = {
  init() {
    const mount = document.getElementById('videoMount');
    if (!mount) return;

    const params = new URLSearchParams(window.location.search);
    const ytId = params.get('yt');
    // Basic search on YouTube if no specific ID
    const title = document.getElementById('title')?.textContent || document.title;
    const query = encodeURIComponent(`${title} fix`);

    let content = '';

    if (ytId) {
      content = `
        <div class="iframe-wrap">
          <iframe src="https://www.youtube.com/embed/${ytId}" 
            title="Video Guide" 
            allowfullscreen>
          </iframe>
        </div>`;
    } else {
      content = `
        <div class="card text-center">
          <h3>Prefer a Video Guide?</h3>
          <p>Watch tutorials on YouTube for visual steps.</p>
          <a href="https://www.youtube.com/results?search_query=${query}" target="_blank" class="btn">
             Search "${title}" on YouTube
          </a>
        </div>
      `;
    }

    mount.innerHTML = `<div class="video-section mt-4">${content}</div>`;
  }
};

const Captcha = {
  instances: {},

  create(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return null;

    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const id = 'captcha-' + Math.random().toString(36).substr(2, 9);

    this.instances[id] = num1 + num2;

    el.innerHTML = `
      <div class="captcha-wrapper" style="display:flex; align-items:center; gap:10px;">
        <span class="badge">Answer: ${num1} + ${num2} = ?</span>
        <input type="number" id="${id}" style="width:80px; padding: 5px;" required placeholder="Sum">
      </div>
    `;

    return id;
  },

  validate(id) {
    const input = document.getElementById(id);
    if (!input) return false;
    return parseInt(input.value) === this.instances[id];
  },

  initAll() {
    // Helper to auto-create if needed, though usually called by page script
  }
};

// Simple Store for Submissions (Demo)
const Store = {
  get(key, fallback = []) {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  },
  set(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }
};

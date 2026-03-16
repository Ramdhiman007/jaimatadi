/**
 * Technical Help Hub - Shared UI Components
 * Centralizes Header and Footer management.
 */

const Components = {
    init() {
        this.renderHeader();
        this.renderFooter();
    },

    renderHeader() {
        const header = document.querySelector('.site-header');
        if (!header) return;

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const isAdmin = currentPage === 'admin.html';
        const isAuth = currentPage === 'login.html';

        const logoText = isAdmin ? 'Technical Help Hub (Admin)' : (isAuth ? 'Technical Help Hub (Auth)' : 'Technical Help Hub');

        const navItems = [
            { name: 'Home', url: 'index.html', check: (cp) => cp === 'index.html' },
            { name: 'Troubleshooting', url: 'problems.html', check: (cp) => cp === 'problems.html' || cp === 'problem.html' },
            { name: 'Mobile', url: 'mobile-problems.html', check: (cp) => cp === 'mobile-problems.html' },
            { name: 'Testing Q&A', url: 'qa-testing.html', check: (cp) => cp === 'qa-testing.html' },
            { name: 'AI Testing', url: 'ai-testing.html', check: (cp) => cp === 'ai-testing.html' },
            { name: 'Practice Lab', url: 'practice-lab.html', check: (cp) => cp === 'practice-lab.html' },
            { name: 'Mock Interview', url: 'mock-interview.html', check: (cp) => cp === 'mock-interview.html' },
            { name: 'FAQs', url: 'faq.html', check: (cp) => cp === 'faq.html' },
            { name: 'Blog', url: 'blog.html', check: (cp) => cp.startsWith('blog') },
            { name: 'Contact', url: 'contact.html', check: (cp) => cp === 'contact.html' }
        ];

        header.innerHTML = `
            <div class="container header-inner">
                <a class="logo" href="index.html">
                    <img src="assets/img/logo.svg" alt="Technical Help Hub Logo" width="32" height="32">
                    <span>${logoText}</span>
                </a>
                <nav class="nav">
                    ${navItems.map(item => `
                        <a href="${item.url}" ${item.check(currentPage) ? 'aria-current="page"' : ''}>${item.name}</a>
                    `).join('')}
                    ${isAdmin ? `
                        <button id="theme-toggle-comp" title="Toggle Dark Mode" aria-label="Toggle Dark Mode">🌓</button>
                        <button onclick="Auth.logout()" class="btn btn-sm btn-secondary">Logout</button>
                    ` : `
                        <a href="login.html" class="btn btn-sm" ${currentPage === 'login.html' ? 'aria-current="page"' : ''}>Login</a>
                        <button id="theme-toggle-comp" title="Toggle Dark Mode" aria-label="Toggle Dark Mode">🌓</button>
                    `}
                </nav>
            </div>
        `;

        // Mobile menu initialization handled by App.init() in app.js
    },

    renderFooter() {
        const footer = document.querySelector('.site-footer');
        if (!footer) return;

        footer.innerHTML = `
            <div class="container footer-inner">
                <p>© <span id="year-comp"></span> Technical Help Hub</p>
                <div class="footer-links">
                    <a href="privacy.html">Privacy Policy</a>
                    <a href="terms.html">Terms of Service</a>
                    <a href="admin.html">Admin</a>
                </div>
            </div>
        `;

        const yearEl = document.getElementById('year-comp');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    }
};

// Initialize if script is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Components.init());
} else {
    Components.init();
}

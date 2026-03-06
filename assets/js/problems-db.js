const problemsDB = {
    'system-running-slow': {
        title: 'System Running Slow',
        summary: 'Identify high resource usage, clean temporary files, trim startups, check RAM, scan for malware.',
        category: 'performance', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Inspect resource usage:</strong> Open Task Manager (Ctrl+Shift+Esc) → Performance tab. Check CPU, Memory, and Disk usage graphs.', img: 'assets/img/slow-pc/taskmanager.png', alt: 'Task Manager Performance Tab' },
            { text: '<strong>Identify resource hogs:</strong> Switch to the "Processes" tab. Click the "CPU" or "Memory" column headers to sort by usage. End non-critical high-usage processes.', img: 'assets/img/slow-pc/Cpuusage.png', alt: 'Task Manager High CPU Usage' },
            { text: '<strong>Clear temporary files:</strong> Press Start, type "Disk Cleanup", and open it. Select drive C: and click OK. Check "Temporary files", "Thumbnails", and "Recycle Bin", then click "Clean up system files".', img: 'assets/img/slow-pc/disk-cleanup.png', alt: 'Disk Cleanup Utility' },
            { text: '<strong>Reduce startup apps:</strong> In Task Manager, go to the "Startup" tab. Right-click non-essential apps (like game launchers or updaters) and select "Disable".', img: 'assets/img/slow-pc/startup.png', alt: 'Task Manager Startup Tab' },
            { text: '<strong>Check memory headroom:</strong> If your Memory usage stays above 80% even with few apps open, you may need to upgrade your RAM. <span class="screenshot-hint">📷 Suggestion: Photo of a RAM stick or the "Memory" slot info in Task Manager.</span>' },
            { text: '<strong>Scan for malware:</strong> Open Windows Security → Virus & threat protection → Quick scan. For a deeper check, choose "Scan options" → "Full scan".' }
        ]
    },
    'wifi-drop': {
        title: 'Wi‑Fi Keeps Disconnecting',
        summary: 'Stabilize Wi‑Fi by adjusting power settings, drivers, network reset, and DNS.',
        category: 'network', difficulty: 'Medium', os: ['Windows', 'Linux', 'macOS'],
        steps: [
            { text: '<strong>Disable power saving:</strong> Right-click Start → Device Manager. Expand "Network adapters". Right-click your Wi-Fi adapter → Properties. <span class="screenshot-hint">📷 Suggestion: Screenshot of Device Manager with Network adapters expanded.</span>' },
            { text: '<strong>Adjust Power Management:</strong> Go to the "Power Management" tab. Uncheck "Allow the computer to turn off this device to save power". Click OK and restart your PC. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Power Management tab with the box unchecked.</span>' },
            { text: '<strong>Update the Wi‑Fi driver:</strong> In Device Manager, right-click your Wi-Fi adapter again → Update driver → "Search automatically for drivers".' },
            { text: '<strong>Reset network stack:</strong> Settings → Network & Internet → Advanced network settings → Network reset → Reset now. This helps clear corrupt settings. <span class="screenshot-hint">📷 Suggestion: Screenshot of the "Network reset" settings page.</span>' },
            { text: '<strong>Set reliable DNS:</strong> Open Control Panel → Network and Sharing Center → Change adapter settings. Right-click Wi-Fi → Properties → Internet Protocol Version 4 (TCP/IPv4). select "Use the following DNS server addresses" and enter 8.8.8.8 and 8.8.4.4. <span class="screenshot-hint">📷 Suggestion: Screenshot of the IPv4 properties window with DNS filled in.</span>' }
        ]
    },
    'pc-wont-turn-on': {
        title: 'PC Won’t Turn On',
        summary: 'Verify power, test adapters/outlets, drain power, reseat components, and isolate faults.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows', 'Linux', 'macOS'],
        steps: [
            { text: '<strong>Verify power source:</strong> Ensure the power cable is firmly plugged into both the wall outlet and the PC PSU. Try a different outlet to rule out wall power issues.' },
            { text: '<strong>Check PSU Switch:</strong> Look at the back of your PC power supply. Ensure the toggle switch is set to "I" (On) and not "O" (Off). <span class="screenshot-hint">📷 Suggestion: Photo of the PSU switch on the back of a case.</span>' },
            { text: '<strong>Test Power Button:</strong> If nothing happens when you press the power button, the button itself might be faulty. On a desktop, you can try shorting the power switch pins on the motherboard (advanced users only).' },
            { text: '<strong>Drain residual power:</strong> Unplug the power cord. Hold down the power button for 30 seconds to discharge capacitors. Plug back in and try again.' },
            { text: '<strong>Reseat RAM:</strong> Unplug the PC, open the case, and remove the RAM sticks. Push them back in firmly until they click. <span class="screenshot-hint">📷 Suggestion: Photo of someone inserting a RAM stick.</span>' }
        ]
    },
    'black-screen-no-display': {
        title: 'Black Screen or No Display',
        summary: 'Check power and cables, test external display, safe mode/driver fix, reseat RAM/GPU, and BIOS settings.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows', 'Linux', 'macOS'],
        steps: [
            { text: '<strong>Check cabling:</strong> Ensure HDMI/DisplayPort cables are securely connected to the graphics card (not the motherboard, if you have a GPU) and the monitor.' },
            { text: '<strong>Test the monitor:</strong> Verify the monitor is powered on (look for a standby light). Press the Menu button on the monitor to see if the OSD appears. <span class="screenshot-hint">📷 Suggestion: Photo of a monitor power light or OSD menu.</span>' },
            { text: '<strong>Listen for boot sounds:</strong> If you hear Windows startup sounds but see nothing, the PC is booming but the display is failing.' },
            { text: '<strong>Try Safe Mode:</strong> reboot and interrupt startup 3 times to trigger Recovery Environment, then choose Startup Settings → Safe Mode. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Windows Recovery "Startup Settings" screen.</span>' }
        ]
    },
    'overheating-issue': {
        title: 'Overheating Issue',
        summary: 'Improve airflow, remove dust, monitor temps, refresh thermal paste, and optimize power.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows', 'Linux', 'macOS'],
        steps: [
            { text: '<strong>Check for dust:</strong> Power off and open your case. Look for dust buildup on fans and heat sinks. Use compressed air to clean them. <span class="screenshot-hint">📷 Suggestion: Photo of a dusty fan vs. a clean fan.</span>' },
            { text: '<strong>Monitor Temperatures:</strong> Download HWMonitor or Core Temp. Run a game or heavy app and check if CPU/GPU temps exceed 85°C. <span class="screenshot-hint">📷 Suggestion: Screenshot of HWMonitor showing temperature readings.</span>' },
            { text: '<strong>Check Fan Operation:</strong> With the case open (carefully), power on and visually confirm all fans are spinning.' },
            { text: '<strong>Repaste CPU:</strong> If the PC is old, the thermal paste may have dried out. Remove the cooler, clean the old paste with alcohol, and apply a pea-sized drop of new paste. <span class="screenshot-hint">📷 Suggestion: Photo showing the correct amount of thermal paste on a CPU.</span>' }
        ]
    },
    'battery-not-charging': {
        title: 'Battery Not Charging',
        summary: 'Check power/charger, reset power, update drivers, and evaluate battery health.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Inspect the charging port:</strong> Check for dust or debris in the laptop charging port or the cable connector. <span class="screenshot-hint">📷 Suggestion: Close-up photo of a laptop charging port.</span>' },
            { text: '<strong>Generate Battery Report:</strong> Open Command Prompt as Admin. Type `powercfg /batteryreport` and press Enter. Open the generated HTML file. <span class="screenshot-hint">📷 Suggestion: Screenshot of the command prompt executing the command.</span>' },
            { text: '<strong>Analyze Report:</strong> Look at "Design Capacity" vs "Full Charge Capacity". If full charge is <50% of design, the battery is degraded. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Battery Report HTML file emphasizing capacity.</span>' },
            { text: '<strong>Reinstall Battery Driver:</strong> Device Manager → Batteries. Right-click "Microsoft ACPI-Compliant Control Method Battery" → Uninstall. Restart the laptop to reinstall it.' }
        ]
    },
    'application-crashes': {
        title: 'Application Crashes',
        summary: 'Update or reinstall, verify compatibility, check antivirus, and apply OS updates.',
        category: 'software', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Check Event Viewer:</strong> Search for "Event Viewer" → Windows Logs → Application. Look for "Error" entries with a red icon at the time of the crash for clues. <span class="screenshot-hint">📷 Suggestion: Screenshot of Event Viewer highlighting an error log.</span>' },
            { text: '<strong>Run as Administrator:</strong> Right-click the application shortcut and select "Run as administrator". This fixes permission issues. <span class="screenshot-hint">📷 Suggestion: Context menu showing "Run as administrator".</span>' },
            { text: '<strong>Verify Game Files (Steam/Epic):</strong> If it is a game, use the launcher to "Verify Integrity of Game Files".' },
            { text: '<strong>Reinstall the App:</strong> Settings → Apps → Installed Apps. Find the app, click "... " → Uninstall. Then download the latest setup file and reinstall.' }
        ]
    },
    'wifi-not-connecting': {
        title: 'Wi‑Fi Not Connecting',
        summary: 'Confirm Wi‑Fi is enabled, refresh connection, run troubleshooters, update drivers, and reset TCP/IP.',
        category: 'network', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Check Airplane Mode:</strong> Click the network icon in the system tray. Ensure "Airplane mode" is OFF and Wi-Fi is ON. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Windows system tray network flyout.</span>' },
            { text: '<strong>Forget Network:</strong> Settings → Network & Internet → Wi-Fi → Manage known networks. Click "Forget" on your home network, then reconnect with the password.' },
            { text: '<strong>Run Troubleshooter:</strong> Settings → System → Troubleshoot → Other troubleshooters → Network Adapter → Run. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Troubleshooter list.</span>' },
            { text: '<strong>Flush DNS:</strong> Open Command Prompt (Admin). Type `ipconfig /flushdns` and press Enter.' }
        ]
    },
    'no-sound': {
        title: 'No Sound from Speakers',
        summary: 'Verify volume/output device, update drivers, restart audio services, and test peripherals.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Check Output Device:</strong> Click the speaker icon in the taskbar. Click the arrow/name to expand the list. Select the correct device (e.g., "Speakers (Realtek Audio)"). <span class="screenshot-hint">📷 Suggestion: Screenshot of the sound output selector in the taskbar.</span>' },
            { text: '<strong>Check Volume Mixer:</strong> Right-click the speaker icon → Open Volume mixer. Ensure your specific app is not muted or set to 0. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Volume Mixer window.</span>' },
            { text: '<strong>Restart Audio Service:</strong> Press Win+R, type `services.msc`. Find "Windows Audio", right-click it, and select "Restart".' }
        ]
    },
    'usb-ports-not-working': {
        title: 'USB Ports Not Working',
        summary: 'Test multiple devices/ports, reset controllers, adjust power settings, and verify BIOS.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Uninstall Controllers:</strong> Device Manager → Universal Serial Bus controllers. Right-click "USB Root Hub" entries → Uninstall device. Restart PC to auto-reinstall. <span class="screenshot-hint">📷 Suggestion: Screenshot of Device Manager USB controllers section.</span>' },
            { text: '<strong>Disable Selective Suspend:</strong> Control Panel → Power Options → Change plan settings → Change advanced power settings. Expand "USB settings" and disable "USB selective suspend setting". <span class="screenshot-hint">📷 Suggestion: Screenshot of the Advanced Power Options dialog.</span>' }
        ]
    },
    'hard-drive-not-detected': {
        title: 'Hard Drive Not Detected',
        summary: 'Check BIOS detection, cabling, Disk Management, and run diagnostics.',
        category: 'hardware', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Check Disk Management:</strong> Press Win+X → Disk Management. Look for a drive labeled "Unallocated" or "Not Initialized". <span class="screenshot-hint">📷 Suggestion: Screenshot of Disk Management showing an unallocated disk.</span>' },
            { text: '<strong>Assign Drive Letter:</strong> If the disk is there but has no letter, right-click the partition → "Change Drive Letter and Paths" → Add → Assign (e.g., D:). <span class="screenshot-hint">📷 Suggestion: Context menu in Disk Management.</span>' },
            { text: '<strong>Check BIOS:</strong> Restart and enter BIOS (Del/F2). Navigate to "SATA Configuration" or "Storage". Ensure the port is enabled.' }
        ]
    },
    'forgot-windows-password': {
        title: 'Forgot Windows Password',
        summary: 'Use recovery options, installation media, or account tools.',
        category: 'software', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Online Reset (Microsoft Account):</strong> Visit `account.live.com/password/reset` on your phone, reset your password, then connect your PC to the internet to sync.' },
            { text: '<strong>Sticky Keys Hack (Advanced):</strong> Boot from Windows USB Installer → Repair → Troubleshoot → Command Prompt. Replace sethc.exe with cmd.exe to get admin access at login screen. <span class="screenshot-hint">📷 Suggestion: Photo of the login screen with a Command Prompt window open.</span>' }
        ]
    },
    'graphics-driver-not-working': {
        title: 'Graphics Driver Not Working',
        summary: 'Clean install the latest vendor driver.',
        category: 'software', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Use DDU (Display Driver Uninstaller):</strong> Download DDU. Boot into Safe Mode. Run DDU and select "Clean and restart". This is more thorough than standard uninstall. <span class="screenshot-hint">📷 Suggestion: Screenshot of the DDU interface.</span>' },
            { text: '<strong>Install Fresh Driver:</strong> Download `GeForce Experience` (Nvidia) or `Adrenalin` (AMD). Run the installer and select "Custom Install" → "Perform a clean installation".' }
        ]
    },
    'windows-update-failing': {
        title: 'Windows Update Failing',
        summary: 'Run troubleshooters, reset update components, repair system files.',
        category: 'software', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Run Troubleshooter:</strong> Settings → Update & Security → Troubleshoot → Additional troubleshooters → Windows Update → Run. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Windows Update troubleshooter running.</span>' },
            { text: '<strong>Manual Service Reset:</strong> Open CMD as Admin. Run `net stop wuauserv`, `net stop bits`. Then delete content in `C:\\Windows\\SoftwareDistribution`. Run `net start wuauserv`. <span class="screenshot-hint">📷 Suggestion: Screenshot of CMD executing the net stop commands.</span>' }
        ]
    },
    'data-loss': {
        title: 'Data Loss',
        summary: 'Check Recycle Bin, restore from backups, use recovery tools.',
        category: 'data', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Stop Using the Drive:</strong> Immediately stop saving new files to the drive where data was lost to prevent overwriting.' },
            { text: '<strong>Recuva Scan:</strong> Download Recuva (free version). Select the drive and run a "Deep Scan". Select files to recover and save them to a DIFFERENT drive (e.g., USB stick). <span class="screenshot-hint">📷 Suggestion: Screenshot of Recuva showing recoverable files.</span>' }
        ]
    },
    'time-date-reset': {
        title: 'Time & Date Reset',
        summary: 'Replace the CMOS battery and check time sync.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Sync Time:</strong> Right-click the clock → Adjust date/time. Click "Sync now". <span class="screenshot-hint">📷 Suggestion: Screenshot of the "Sync now" button in Settings.</span>' },
            { text: '<strong>Check CMOS Battery:</strong> If it resets after every reboot, your motherboard battery (CR2032) is dead. Open the case and replace the silver coin battery. <span class="screenshot-hint">📷 Suggestion: Photo of a CR2032 battery on a motherboard.</span>' }
        ]
    },
    'bluetooth-not-working': {
        title: 'Bluetooth Not Working',
        summary: 'Enable Bluetooth, run troubleshooters, update drivers.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Check Quick Settings:</strong> Press Win+A. Ensure the Bluetooth toggle is highlighted (On). <span class="screenshot-hint">📷 Suggestion: Screenshot of the Windows Quick Settings panel.</span>' },
            { text: '<strong>Restart Bluetooth Service:</strong> `services.msc` → "Bluetooth Support Service" → Right-click → Restart. Set Startup type to "Automatic". <span class="screenshot-hint">📷 Suggestion: Screenshot of the Services window with Bluetooth service selected.</span>' }
        ]
    },
    'IP Address Configuration Issues': {
        title: 'IP Config Issues',
        summary: 'Release/renew IP, flush DNS, check DHCP.',
        category: 'network', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Release/Renew IP:</strong> Open CMD (Admin). Type `ipconfig /release` (wait for disconnect), then `ipconfig /renew` (wait for new IP). <span class="screenshot-hint">📷 Suggestion: Screenshot of the ipconfig renew output.</span>' },
            { text: '<strong>Check DHCP:</strong> Network Connections → Right-click Ethernet/Wi-Fi → Properties → IPv4 → Properties. Ensure "Obtain an IP address automatically" is selected.' }
        ]
    },
    'cannot-access-websites': {
        title: 'Cannot Access Websites',
        summary: 'Clear cache, flush DNS, check hosts file.',
        category: 'network', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Clear Browser Data:</strong> Press Ctrl+Shift+Delete in your browser. Select "Cached images and files" and "Cookies". Click "Clear data". <span class="screenshot-hint">📷 Suggestion: Screenshot of the browser "Clear browsing data" dialog.</span>' },
            { text: '<strong>Check Hosts File:</strong> Open Notepad as Admin. Open `C:\\Windows\\System32\\drivers\\etc\\hosts`. Ensure there are no lines below the comments that list websites you can\'t access. <span class="screenshot-hint">📷 Suggestion: Screenshot of a clean hosts file in Notepad.</span>' }
        ]
    },
    'wifi-keeps-disconnecting': {
        title: 'WiFi Disconnects',
        summary: 'Update drivers, disable power saving, reset network.',
        category: 'network', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Power Saving:</strong> Device Manager → Network adapters → [Your Adapter] → Power Management. Uncheck "Allow the computer to turn off...".' },
            { text: '<strong>Change Channel (Router):</strong> Log into your router (usually 192.168.0.1). Change the Wi-Fi channel from "Auto" to 1, 6, or 11 to avoid interference. <span class="screenshot-hint">📷 Suggestion: Screenshot of a router admin page WiFi settings.</span>' }
        ]
    },
    'slow-internet-speed': {
        title: 'Slow Internet Speed',
        summary: 'Check speed, reboot router, update drivers.',
        category: 'network', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Isolate the Problem:</strong> Connect via Ethernet cable. If speed is fast on cable but slow on Wi-Fi, it\'s a Wi-Fi interference or range issue.' },
            { text: '<strong>Check Background Downloads:</strong> Open Task Manager → Network tab. Sort by usage to see if Steam, Windows Update, or other apps are hogging bandwidth. <span class="screenshot-hint">📷 Suggestion: Screenshot of Task Manager Network column sorted high to low.</span>' }
        ]
    },
    'ethernet-port-not-working': {
        title: 'Ethernet Not Working',
        summary: 'Check cable, update driver, check IP config.',
        category: 'network', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Check Link Lights:</strong> Look at the Ethernet port on the PC and switch/router. Are the amber/green lights flashing? If dark, the cable or port is dead. <span class="screenshot-hint">📷 Suggestion: Photo of active Ethernet port lights.</span>' },
            { text: '<strong>Enable Adapter:</strong> Control Panel → Network Connections. If the Local Area Connection is "Disabled" (greyed out), right-click and select "Enable". <span class="screenshot-hint">📷 Suggestion: Screenshot of the Network Connections window.</span>' }
        ]
    },
    'bluetooth-device-not-detecting': {
        title: 'Bluetooth Not Detecting',
        summary: 'Re-pair device, check pairing mode, update driver.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Enter Pairing Mode:</strong> Most devices require holding a button for 5 seconds until a light flashes fast. Ensure it is flashing before searching on PC. <span class="screenshot-hint">📷 Suggestion: Photo of a device (e.g., headphones) in pairing mode.</span>' },
            { text: '<strong>Run Troubleshooter:</strong> Settings → Troubleshoot → Bluetooth.' }
        ]
    },
    'bluetooth-disconnects-frequently': {
        title: 'Bluetooth Disconnects',
        summary: 'Disable power saving, reduce interference.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Interference Check:</strong> USB 3.0 ports can interfere with Bluetooth. Move the Bluetooth dongle away from USB 3.0 ports using an extension cable. <span class="screenshot-hint">📷 Suggestion: Photo showing a USB extension cable setup.</span>' },
            { text: '<strong>Update Firmware:</strong> Update the firmware of your Bluetooth device (headset/mouse) using the manufacturer app.' }
        ]
    },
    'bluetooth-audio-not-working': {
        title: 'Bluetooth Audio Issues',
        summary: 'Set default output, check services.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Set as Default Service:</strong> Control Panel → Sound → Playback. Right-click your Bluetooth headphones and choose "Set as Default Device". <span class="screenshot-hint">📷 Suggestion: Screenshot of the Sound Control Panel.</span>' },
            { text: '<strong>Disable Hands-Free:</strong> In Sound settings, you might see two entries for headphones: "Stereo" and "Hands-Free AG Audio". Always select "Stereo" for music/games. "Hands-Free" is low quality for calls. <span class="screenshot-hint">📷 Suggestion: Screenshot comparing Stereo vs Hands-Free options.</span>' }
        ]
    },
    'windows-update-stuck': {
        title: 'Windows Update Stuck',
        summary: 'Troubleshoot stuck updates.',
        category: 'software', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Wait it out:</strong> Sometimes "Getting things ready" takes 2+ hours. Only intervene if it has been stuck for >3 hours.' },
            { text: '<strong>Safe Mode Restart:</strong> Disconnect internet (unplug Ethernet/turn off Wi-Fi). Force restart. This often breaks the loop.' }
        ]
    },
    'update-error-0x80070002': {
        title: 'Update Error 0x80070002',
        summary: 'Check time, clear temp files.',
        category: 'software', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Sync Time:</strong> Incorrect date/time causes SSL failures. Settings → Date & Time → Sync now.' },
            { text: '<strong>DISM Tool:</strong> CMD (Admin) → `DISM /Online /Cleanup-Image /RestoreHealth`. This fixes the update system itself. <span class="screenshot-hint">📷 Suggestion: Screenshot of DISM command running in CMD.</span>' }
        ]
    },
    'no-bootable-device': {
        title: 'No Bootable Device',
        summary: 'Check boot order, drive connections.',
        category: 'hardware', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Check Boot Order:</strong> Reset BIOS settings to default (F9 usually). Ensure "Windows Boot Manager" is first. <span class="screenshot-hint">📷 Suggestion: Photo of BIOS Boot Order screen.</span>' },
            { text: '<strong>Reseat Drive:</strong> Power off. Unplug and replug the SATA data and power cables on the SSD/HDD. <span class="screenshot-hint">📷 Suggestion: Photo of SATA cables connected to a drive.</span>' }
        ]
    },
    'webcam-not-detected': {
        title: 'Webcam Not Detected',
        summary: 'Check permissions, drivers, and privacy switch.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Privacy Switch:</strong> Many modern laptops have a tiny physical slider over the lens or a keyboard switch (look for camera icon on F-keys). <span class="screenshot-hint">📷 Suggestion: Close-up photo of a laptop webcam privacy shutter.</span>' },
            { text: '<strong>Check App Permissions:</strong> Settings → Privacy → Camera. Ensure "Allow access to the camera on this device" is On. <span class="screenshot-hint">📷 Suggestion: Screenshot of Windows Camera Privacy settings.</span>' }
        ]
    },
    /* Mobile Problems */
    'iphone-battery-drain': {
        title: 'iPhone Battery Drain',
        summary: 'Check battery health, disable background refresh, update iOS.',
        category: 'battery', difficulty: 'Easy', os: ['iOS'],
        steps: [
            { text: '<strong>Check Battery Health:</strong> Settings → Battery → Battery Health & Charging. If "Maximum Capacity" is under 80%, consider replacement. <span class="screenshot-hint">📷 Suggestion: Screenshot of iPhone Battery Health screen.</span>' },
            { text: '<strong>Check Battery Usage:</strong> Settings → Battery. Scroll down to see which apps use the most power. <span class="screenshot-hint">📷 Suggestion: Screenshot of app battery usage list.</span>' },
            { text: '<strong>Disable Background Refresh:</strong> Settings → General → Background App Refresh → Turn off for non-essential apps.' }
        ]
    },
    'android-app-crash': {
        title: 'Android App Keep Crashing',
        summary: 'Clear cache, update app/WebView, reinstall.',
        category: 'app', difficulty: 'Easy', os: ['Android'],
        steps: [
            { text: '<strong>Clear App Cache:</strong> Settings → Apps → Select App → Storage & cache → Clear cache. <span class="screenshot-hint">📷 Suggestion: Screenshot of App Info storage screen.</span>' },
            { text: '<strong>Update WebView:</strong> Open Play Store → Manage apps & device. Update "Android System WebView" and "Chrome".' },
            { text: '<strong>Reinstall App:</strong> Uninstall the app and download it again from the Play Store.' }
        ]
    },
    'mobile-data-not-working': {
        title: 'Mobile Data Not Working',
        summary: 'Toggle Airplane mode, check APN, reset network settings.',
        category: 'connectivity', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Toggle Airplane Mode:</strong> Turn on Airplane mode for 10 seconds, then turn it off to reset the tower connection.' },
            { text: '<strong>Check Data Limit:</strong> Ensure you haven\'t reached your monthly data cap.' },
            { text: '<strong>Reset Network Settings:</strong> Settings → General/System → Reset → Reset Network Settings (Warning: clears Wi-Fi passwords). <span class="screenshot-hint">📷 Suggestion: Screenshot of the Reset Network Settings confirmation.</span>' }
        ]
    },
    'phone-wont-charge': {
        title: 'Phone Won’t Charge',
        summary: 'Clean port, change cable/adapter, force restart.',
        category: 'battery', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Clean Charging Port:</strong> Use a wooden toothpick (gently!) or compressed air to remove pocket lint from the port. <span class="screenshot-hint">📷 Suggestion: Photo of cleaning a charging port.</span>' },
            { text: '<strong>Try Different Cable:</strong> Cables fail often. Test with a known working cable and brick.' },
            { text: '<strong>Force Restart:</strong> iPhone: Vol Up, Vol Down, Hold Power. Android: Hold Power + Vol Down for 10s.' }
        ]
    },
    'touchscreen-unresponsive': {
        title: 'Touchscreen Unresponsive',
        summary: 'Force restart, clean screen, remove protector, factory reset.',
        category: 'hardware', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Force Restart:</strong> This is the first step. See your device specific method to force reboot.' },
            { text: '<strong>Clean Screen:</strong> Wipe screen with microfiber cloth. Moisture or oil can cause phantom touches.' },
            { text: '<strong>Remove Screen Protector:</strong> If cracked or peeling, it might be interfering with touch sensitivity.' }
        ]
    },
    'wifi-connected-no-internet-mobile': {
        title: 'WiFi Connected But No Internet',
        summary: 'Forget network, reset router, check date/time.',
        category: 'connectivity', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Forget Network:</strong> Settings → Wi-Fi → Tap "i" or Gear icon → Forget This Network. Reconnect.' },
            { text: '<strong>Check Date & Time:</strong> Ensure "Set Automatically" is ON. Incorrect time breaks SSL.' },
            { text: '<strong>Disable Private Address:</strong> (iOS) Settings → Wi-Fi → "i" → Toggle off "Private Wi-Fi Address" temporarily to test router compatibility.' }
        ]
    },
    'face-id-not-working': {
        title: 'Face ID Not Working',
        summary: 'Clean sensor, reset Face ID, check for updates.',
        category: 'system', difficulty: 'Medium', os: ['iOS'],
        steps: [
            { text: '<strong>Clean Notch/island:</strong> Wipe the top of the screen. Smudges cover the IR sensor. <span class="screenshot-hint">📷 Suggestion: Photo indicating where sensors are.</span>' },
            { text: '<strong>Reset Face ID:</strong> Settings → Face ID & Passcode → Reset Face ID.' },
            { text: '<strong>Check Attention Settings:</strong> Ensure "Require Attention for Face ID" is enabled (or disabled if you prefer speed/have glasses issues).' }
        ]
    },
    'android-system-ui-stopped': {
        title: 'System UI Has Stopped',
        summary: 'Clear Google App cache, uninstall updates, factory reset.',
        category: 'system', difficulty: 'Hard', os: ['Android'],
        steps: [
            { text: '<strong>Clear Google App Cache:</strong> Settings → Apps → Google → Storage → Clear Cache.' },
            { text: '<strong>Uninstall Updates:</strong> Settings → Apps → Google → 3-dots menu → Uninstall updates.' },
            { text: '<strong>Safe Mode:</strong> Boot into Safe Mode. If it stops, a 3rd party app is the cause.' }
        ]
    },
    'bluetooth-pairing-fails-mobile': {
        title: 'Bluetooth Pairing Fails',
        summary: 'Toggle Bluetooth, forget device, reset network settings.',
        category: 'connectivity', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Toggle Bluetooth:</strong> Turn BT off, wait 5s, turn on.' },
            { text: '<strong>Forget Device:</strong> Settings → Bluetooth → "i" or Gear → Forget. Then re-pair.' },
            { text: '<strong>Reset Network Settings:</strong> Verify if other devices connect. If not, reset network settings.' }
        ]
    },
    'camera-black-screen-mobile': {
        title: 'Camera Black Screen',
        summary: 'Force close app, clear cache, restart phone, check permissions.',
        category: 'hardware', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Force Close App:</strong> Swipe up and close the Camera app.' },
            { text: '<strong>Clear Cache (Android):</strong> Long press Camera icon → App Info → Storage → Clear Cache.' },
            { text: '<strong>Check flashlight:</strong> If flashlight toggle is greyed out, it’s a hardware failure or the camera is in use by another app.' }
        ]
    },
    'bsod-crash': {
        title: 'Blue Screen of Death (BSOD)',
        summary: 'Analyze stop code, update drivers, check RAM, scan for corruption.',
        category: 'software', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Note the Stop Code:</strong> Write down the error code (e.g., CRITICAL_PROCESS_DIED) at the bottom of the blue screen to identify the cause. <span class="screenshot-hint">📷 Suggestion: Photo of a monitor showing a Blue Screen of Death with the stop code highlighted.</span>' },
            { text: '<strong>Enter Safe Mode:</strong> If stuck in a loop, interrupt startup 3 times to enter Recovery Environment. Choose Startup Settings → Safe Mode. <span class="screenshot-hint">📷 Suggestion: Screenshot of the "Startup Settings" menu in Windows Recovery.</span>' },
            { text: '<strong>Update Drivers:</strong> Outdated drivers are a common cause. Device Manager → Update drivers for GPU and Chipset. <span class="screenshot-hint">📷 Suggestion: Screenshot of Device Manager with a device selected.</span>' },
            { text: '<strong>Run Memory Diagnostic:</strong> Search "Windows Memory Diagnostic" and restart to check for RAM errors. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Memory Diagnostic tool prompt.</span>' },
            { text: '<strong>SFC Scan:</strong> Open CMD (Admin) → `sfc /scannow`. Repairs corrupted system files. <span class="screenshot-hint">📷 Suggestion: Screenshot of Command Prompt finishing an SFC scan.</span>' }
        ]
    },
    'keyboard-not-working': {
        title: 'Keyboard Not Working',
        summary: 'Check connection, update driver, ease of access settings.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Check Connection:</strong> Unplug and replug the USB. Try a different port. If wireless, check batteries/charge. <span class="screenshot-hint">📷 Suggestion: Photo of USB-A plug or wireless dongle.</span>' },
            { text: '<strong>Reinstall Driver:</strong> Device Manager → Keyboards → Right-click device → Uninstall device. Restart PC. <span class="screenshot-hint">📷 Suggestion: Screenshot of Device Manager "Keyboards" section.</span>' },
            { text: '<strong>Filter Keys:</strong> Settings → Ease of Access → Keyboard. Ensure "Filter Keys" is OFF. It ignores brief or repeated strokes. <span class="screenshot-hint">📷 Suggestion: Screenshot of "Ease of Access" keyboard settings.</span>' },
            { text: '<strong>Test On-Screen Keyboard:</strong> Open Start, type "On-Screen Keyboard". If this works, it\'s a hardware issue with your physical keyboard. <span class="screenshot-hint">📷 Suggestion: Screenshot of the On-Screen Keyboard app.</span>' }
        ]
    },
    'mouse-lagging': {
        title: 'Mouse Lagging or Freezing',
        summary: 'Check surface, battery, interference, pointer precision.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Check Surface:</strong> Ensure you are using a mousepad. Reflective glass tables cause skipping. <span class="screenshot-hint">📷 Suggestion: Photo of a mouse on a proper mousepad vs glass.</span>' },
            { text: '<strong>Wireless Interference:</strong> Move the USB receiver to a front port or use an extension cable away from USB 3.0 drives. <span class="screenshot-hint">📷 Suggestion: Photo of a USB extension cable moving the receiver away from the PC.</span>' },
            { text: '<strong>Pointer Precision:</strong> Control Panel → Mouse → Pointer Options. Uncheck "Enhance pointer precision" (acceleration) to test. <span class="screenshot-hint">📷 Suggestion: Screenshot of Mouse Properties "Pointer Options" tab.</span>' },
            { text: '<strong>Update Batteries:</strong> Low voltage causes sensor skipping. Replace AA/AAA batteries.' }
        ]
    },
    'printer-not-printing': {
        title: 'Printer Not Printing',
        summary: 'Clear spooler, check connection, set as default.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Clear Spooler:</strong> Services (`services.msc`) → Print Spooler → Restart. This clears stuck jobs. <span class="screenshot-hint">📷 Suggestion: Screenshot of "Services" window showing Print Spooler.</span>' },
            { text: '<strong>Set as Default:</strong> Settings → Devices → Printers & Scanners. Select your printer → Manage → Set as default. <span class="screenshot-hint">📷 Suggestion: Screenshot of Printers & Scanners settings.</span>' },
            { text: '<strong>Check Connection:</strong> If Wi-Fi, ensure printer and PC are on the same network (2.4GHz vs 5GHz matters sometimes). <span class="screenshot-hint">📷 Suggestion: Photo of the printer\'s screen showing Wi-Fi status.</span>' },
            { text: '<strong>Run Troubleshooter:</strong> Settings → Troubleshoot → Printer. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Printer troubleshooter.</span>' }
        ]
    },
    'microphone-not-working': {
        title: 'Microphone Not Working',
        summary: 'Check privacy settings, default device, mute button.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Privacy Settings:</strong> Settings → Privacy → Microphone. "Allow apps to access your microphone" must be ON. <span class="screenshot-hint">📷 Suggestion: Screenshot of Microphone Privacy settings.</span>' },
            { text: '<strong>Check Mute Button:</strong> Physical headsets often have a mute switch on the cord or earcup. Check if it\'s red/off. <span class="screenshot-hint">📷 Suggestion: Photo of an inline mute switch on a headset cable.</span>' },
            { text: '<strong>Set Default:</strong> Sound Settings → Input. Select the correct microphone from the dropdown. <span class="screenshot-hint">📷 Suggestion: Screenshot of Sound Settings "Input" section.</span>' },
            { text: '<strong>Test in Voice Recorder:</strong> Open Windows Voice Recorder and speak. <span class="screenshot-hint">📷 Suggestion: Screenshot of Voice Recorder showing audio waves.</span>' }
        ]
    },
    'screen-flickering': {
        title: 'Screen Flickering',
        summary: 'Check cables, refresh rate, update display driver.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Check Cable:</strong> A loose HDMI/DisplayPort cable is the #1 cause. Unplug and replug firmly. <span class="screenshot-hint">📷 Suggestion: Photo of checking HDMI cable ends.</span>' },
            { text: '<strong>Refresh Rate:</strong> Settings → System → Display → Advanced display settings. Ensure the refresh rate matches your monitor specs (e.g., 60Hz or 144Hz). <span class="screenshot-hint">📷 Suggestion: Screenshot of Advanced Display Settings showing Hz.</span>' },
            { text: '<strong>Driver Update:</strong> Flickering can indicate a crashing GPU driver. Update or reinstall via DDU. <span class="screenshot-hint">📷 Suggestion: Screenshot of Nvidia/AMD driver update screen.</span>' },
            { text: '<strong>Test Another Monitor:</strong> Connect PC to TV. If no flicker, your monitor is failing.' }
        ]
    },
    'computer-freezes': {
        title: 'Computer Freezes Randomly',
        summary: 'Check overheating, bad RAM, failing drive.',
        category: 'hardware', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Monitor Temps:</strong> Overheating causes throttling/freezing. Clean dust from fans. <span class="screenshot-hint">📷 Suggestion: Screenshot of HWMonitor showing high CPU temps.</span>' },
            { text: '<strong>Check Disk Health:</strong> Download CrystalDiskInfo. If your drive Health Status is "Caution" or "Bad", backup immediately. <span class="screenshot-hint">📷 Suggestion: Screenshot of CrystalDiskInfo.</span>' },
            { text: '<strong>Reliability History:</strong> Search "View reliability history" in Start. Look for critical red X events matching the freeze time. <span class="screenshot-hint">📷 Suggestion: Screenshot of Reliability Monitor graph.</span>' },
            { text: '<strong>Check RAM:</strong> Reseat RAM sticks.' }
        ]
    },
    'slow-boot-time': {
        title: 'Slow Boot Time',
        summary: 'Disable startup apps, enable Fast Startup, upgrade to SSD.',
        category: 'performance', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Disable Startups:</strong> Task Manager → Startup. Disable high-impact apps like Steam, Discord, Spotify. <span class="screenshot-hint">📷 Suggestion: Screenshot of Task Manager Startup tab.</span>' },
            { text: '<strong>Fast Startup:</strong> Control Panel → Power Options → Choose what power buttons do. Check "Turn on fast startup". <span class="screenshot-hint">📷 Suggestion: Screenshot of Power Options "Choose what power buttons do".</span>' },
            { text: '<strong>Upgrade to SSD:</strong> If you are booting from an HDD, cloning to a SATA or NVMe SSD is the single biggest upgrade. <span class="screenshot-hint">📷 Suggestion: Photo of an SSD vs HDD.</span>' },
            { text: '<strong>BIOS Time:</strong> Check "Last BIOS time" in Task Manager Startup tab. If high (>15s), disable unneeded BIOS boot options.' }
        ]
    },
    'file-permission-denied': {
        title: 'File Permission Denied',
        summary: 'Take ownership, run as admin, check attributes.',
        category: 'software', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Take Ownership:</strong> Right-click file/folder → Properties → Security → Advanced. Change Owner to your username. <span class="screenshot-hint">📷 Suggestion: Screenshot of Advanced Security Settings "Owner" tab.</span>' },
            { text: '<strong>Run as Admin:</strong> If deleting a system file, ensure you have Administrator privileges. <span class="screenshot-hint">📷 Suggestion: Context menu "Run as administrator".</span>' },
            { text: '<strong>Check Read-only:</strong> Properties → General. Uncheck "Read-only". <span class="screenshot-hint">📷 Suggestion: File Properties "General" tab.</span>' }
        ]
    },
    'dll-missing-error': {
        title: 'DLL Missing Error',
        summary: 'Install Visual C++ Redistributable, DirectX, or reinstall app.',
        category: 'software', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Install Visual C++:</strong> Download "Visual C++ Redistributable All-in-One" to fix `msvcp140.dll` type errors. <span class="screenshot-hint">📷 Suggestion: Screenshot of Microsoft Visual C++ downloads page.</span>' },
            { text: '<strong>Install DirectX:</strong> For `d3dx9_xx.dll` errors, install the DirectX End-User Runtime Web Installer. <span class="screenshot-hint">📷 Suggestion: Screenshot of DirectX Installer.</span>' },
            { text: '<strong>Reinstall App:</strong> The DLL might be specific to the program and corrupted. Reinstalling fixes it. <span class="screenshot-hint">📷 Suggestion: Screenshot of "Apps & Features" uninstalling the app.</span>' },
            { text: '<strong>System File Checker:</strong> `sfc /scannow` can restore system DLLs. <span class="screenshot-hint">📷 Suggestion: Command Prompt running SFC.</span>' }
        ]
    },
    'disk-usage-100': {
        title: '100% Disk Usage',
        summary: 'Disable SysMain, Windows Search, check for SSD health.',
        category: 'performance', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Disable SysMain:</strong> Services (`services.msc`) → SysMain → Stop → Disabled. This service preloads apps but often chokes HDDs. <span class="screenshot-hint">📷 Suggestion: Screenshot of Services.msc with SysMain selected.</span>' },
            { text: '<strong>Check Disk Health:</strong> High active time can mean a failing drive. Use CrystalDiskMark to test speeds. <span class="screenshot-hint">📷 Suggestion: Screenshot of CrystalDiskMark operating on a drive.</span>' },
            { text: '<strong>Upgrade to SSD:</strong> Modern Windows 10/11 is not designed for mechanical hard drives as boot drives. <span class="screenshot-hint">📷 Suggestion: Photo comparison of an HDD vs an SSD.</span>' },
            { text: '<strong>Check Malware:</strong> Use Malwarebytes to scan. Crypto miners often hide and max out usage.' }
        ]
    },
    'ram-failure': {
        title: 'RAM Failure Symptoms',
        summary: 'Random crashes, corrupted files, BSOD loops.',
        category: 'hardware', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>MemTest86:</strong> Create a bootable USB with MemTest86. Boot from it to run a comprehensive RAM test (takes hours). <span class="screenshot-hint">📷 Suggestion: Photo of a monitor running MemTest86.</span>' },
            { text: '<strong>Single Stick Test:</strong> If you have 2 sticks, remove one. If crashes stop, the removed stick is bad. Swap to confirm. <span class="screenshot-hint">📷 Suggestion: Photo of a motherboard with one RAM stick removed.</span>' },
            { text: '<strong>XMP Profile:</strong> If you just built the PC, disable XMP/DOCP in BIOS to see if it stabilizes. <span class="screenshot-hint">📷 Suggestion: Photo of BIOS XMP settings.</span>' }
        ]
    },
    'psu-failure': {
        title: 'PSU Failure Symptoms',
        summary: 'Random shutdowns, coil whine, burning smell.',
        category: 'hardware', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Shutdown Under Load:</strong> If PC shuts off instantly (black screen) when gaming, the PSU can\'t handle the power spike. Check Event Viewer for "Kernel-Power 41". <span class="screenshot-hint">📷 Suggestion: Screenshot of Event Viewer showing Kernel-Power 41 error.</span>' },
            { text: '<strong>Paperclip Test:</strong> Unplug PC. Unplug 24-pin cable. Bridge green wire with a black wire. Fan should spin. (Basic test only). <span class="screenshot-hint">📷 Suggestion: Diagram of the 24-pin connector paperclip bridge.</span>' },
            { text: '<strong>Smell Test:</strong> If you smell ozone or burning plastic near the back vent, unplug immediately and replace.' }
        ]
    },
    'gpu-artifacting': {
        title: 'GPU Artifacting',
        summary: 'Green lines, dots, texture glitches in games.',
        category: 'hardware', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Check Overclock:</strong> If you used MSI Afterburner, reset to defaults. Unstable memory OC causes artifacts. <span class="screenshot-hint">📷 Suggestion: Screenshot of MSI Afterburner reset button.</span>' },
            { text: '<strong>Check Temps:</strong> Overheating VRAM can cause glitches. Ensure GPU fans are spinning. <span class="screenshot-hint">📷 Suggestion: Screenshot of GPU-Z Sensors tab.</span>' },
            { text: '<strong>Dying GPU:</strong> If artifacts appear in BIOS or boot logo, the card is likely physically failing. <span class="screenshot-hint">📷 Suggestion: Photo of a screen with graphical artifacts.</span>' }
        ]
    },
    'stuck-pixel': {
        title: 'Stuck Pixel',
        summary: 'Fix bright/colored dots on monitor.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>JScreenFix:</strong> Visit JScreenFix.com. Drag the flashing box over the stuck pixel for 10-30 minutes. <span class="screenshot-hint">📷 Suggestion: Screenshot of JScreenFix website.</span>' },
            { text: '<strong>Massage Method:</strong> Turn off monitor. Apply gentle pressure on the pixel with a damp cloth. Turn on monitor while holding pressure. Release.' },
            { text: '<strong>Dead vs Stuck:</strong> Black dot = Dead (usually permanent). Colored dot = Stuck (fixable).' }
        ]
    },
    'laptop-overheating': {
        title: 'Laptop Overheating',
        summary: 'Clean dust, use cooling pad, undervolting.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Elevate Rear:</strong> Prop up the back of the laptop by 1 inch to allow airflow into intake vents. <span class="screenshot-hint">📷 Suggestion: Photo of a laptop stand or cooling pad.</span>' },
            { text: '<strong>Clean Vents:</strong> Use compressed air in short bursts into the exhaust vents to dislodge dust bunnies. <span class="screenshot-hint">📷 Suggestion: Photo of compressed air cleaning laptop vents.</span>' },
            { text: '<strong>Repaste:</strong> (Advanced) Disassemble laptop heatpipes and apply new thermal paste (e.g., Arctic MX-4). <span class="screenshot-hint">📷 Suggestion: Photo of a laptop heatsink removed.</span>' }
        ]
    },
    'touchpad-not-working': {
        title: 'Touchpad Not Working',
        summary: 'Check Fn key, drivers, settings.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Fn Key Toggle:</strong> Look for a touchpad icon on F-keys (e.g., F6). Press Fn + F6 to toggle it on. <span class="screenshot-hint">📷 Suggestion: Photo of laptop F-keys highlighting the touchpad toggle.</span>' },
            { text: '<strong>Check Settings:</strong> Settings → Devices → Touchpad. Ensure the toggle is On. <span class="screenshot-hint">📷 Suggestion: Screenshot of Windows Touchpad settings.</span>' },
            { text: '<strong>Driver:</strong> Device Manager → Mice and other pointing devices. Uninstall driver and restart. <span class="screenshot-hint">📷 Suggestion: Screenshot of Device Manager "Mice and other pointing devices".</span>' }
        ]
    },
    'laptop-battery-drain': {
        title: 'Laptop Battery Draining Fast',
        summary: 'Lower brightness, check background apps, battery saver.',
        category: 'battery', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Screen Brightness:</strong> The screen uses the most power. Lower it to 50%. <span class="screenshot-hint">📷 Suggestion: Screenshot of Action Center brightness slider.</span>' },
            { text: '<strong>Battery Saver:</strong> Click the battery icon → Drag slider to "Best Battery Life". <span class="screenshot-hint">📷 Suggestion: Screenshot of Battery settings "Battery Saver" on.</span>' },
            { text: '<strong>Battery Health:</strong> run `powercfg /batteryreport` to see if the physical battery is worn out. <span class="screenshot-hint">📷 Suggestion: Screenshot of "powercfg /batteryreport" command output.</span>' }
        ]
    },
    'fan-noise-loud': {
        title: 'Fan Noise Loud',
        summary: 'Clean dust, adjust BIOS curve, replace bearing.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Dust Buildup:</strong> Dust on blades causes imbalance and noise. Clean carefully with a brush/air. <span class="screenshot-hint">📷 Suggestion: Photo of a dusty fan.</span>' },
            { text: '<strong>BIOS Curve:</strong> Enter BIOS → Hardware Monitor. Set fan profile to "Silent" or "Standard" instead of "Turbo". <span class="screenshot-hint">📷 Suggestion: Photo of BIOS Hardware Monitor fan curve.</span>' },
            { text: '<strong>Bearing Fail:</strong> If it makes a grinding/rattling sound, the bearing is shot. Replace the fan.' }
        ]
    },
    'coil-whine': {
        title: 'Coil Whine',
        summary: 'High pitched noise from PC under load.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Cap FPS:</strong> High FPS (e.g., 300+ in menus) causes coil whine. Limit FPS in Nvidia Control Panel or game settings. <span class="screenshot-hint">📷 Suggestion: Screenshot of Nvidia Control Panel Max Frame Rate setting.</span>' },
            { text: '<strong>PSU-GPU Combo:</strong> Some PSU and GPU combinations just resonate. Swapping the PSU might fix it.' },
            { text: '<strong>Burn-in:</strong> Sometimes running a benchmark (Heaven/Furmark) for a few hours can reduce whine on new cards. <span class="screenshot-hint">📷 Suggestion: Screenshot of a stress test like Heaven Benchmark.</span>' }
        ]
    },
    'usb-not-recognized': {
        title: 'USB Device Not Recognized',
        summary: 'Update driver, power management, test ports.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Unplug PC:</strong> Unplug power cord for 1 minute. This resets the motherboard USB controller.' },
            { text: '<strong>Update Driver:</strong> Device Manager → Universal Serial Bus controllers. Uninstall "Unknown USB Device" and restart. <span class="screenshot-hint">📷 Suggestion: Screenshot of Device Manager showing "Unknown USB Device".</span>' },
            { text: '<strong>Power Management:</strong> Root Hub Properties → Power Management. Uncheck "Allow computer to turn off this device". <span class="screenshot-hint">📷 Suggestion: Screenshot of USB Root Hub properties "Power Management" tab.</span>' }
        ]
    },
    'sd-card-not-reading': {
        title: 'SD Card Not Reading',
        summary: 'Check lock switch, update driver, format.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Lock Switch:</strong> Ensure the tiny physical slider on the side of the card is in the "Unlock" (up) position. <span class="screenshot-hint">📷 Suggestion: Photo of an SD card lock switch in "Lock" vs "Unlock" position.</span>' },
            { text: '<strong>Drive Letter:</strong> Disk Management. If card shows up but no letter, assign one (e.g., E:). <span class="screenshot-hint">📷 Suggestion: Screenshot of Disk Management showing SD card partition.</span>' },
            { text: '<strong>Format:</strong> If it asks to format, the file system is corrupt. Formatting erases data but restores the card. <span class="screenshot-hint">📷 Suggestion: Screenshot of "Format" context menu in File Explorer.</span>' }
        ]
    },
    'second-monitor-not-detected': {
        title: 'Second Monitor Not Detected',
        summary: 'Win+P, check cable, update driver.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Project Mode:</strong> Press Win+P. Select "Extend". <span class="screenshot-hint">📷 Suggestion: Screenshot of the "Project" sidebar with "Extend" highlighted.</span>' },
            { text: '<strong>Detect Button:</strong> Settings → System → Display. Click "Detect" under Multiple displays. <span class="screenshot-hint">📷 Suggestion: Screenshot of Display Settings showing the "Detect" button.</span>' },
            { text: '<strong>Cable Spec:</strong> Ensure your HDMI/DP cable supports the resolution/refresh rate of the monitor.' }
        ]
    },
    'windows-search-broken': {
        title: 'Windows Search Not Working',
        summary: 'Restart services, rebuild indexer.',
        category: 'software', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Restart Service:</strong> Services → Windows Search → Restart. <span class="screenshot-hint">📷 Suggestion: Screenshot of Services.msc with "Windows Search" selected.</span>' },
            { text: '<strong>Rebuild Index:</strong> Control Panel → Indexing Options → Advanced → Rebuild. <span class="screenshot-hint">📷 Suggestion: Screenshot of Indexing Options "Advanced" dialog.</span>' },
            { text: '<strong>Troubleshooter:</strong> Settings → Search → Searching Windows → Run the troubleshooter.' }
        ]
    },
    'taskbar-frozen': {
        title: 'Taskbar Frozen',
        summary: 'Restart Explorer, run SFC.',
        category: 'software', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Restart Explorer:</strong> Task Manager (Ctrl+Shift+Esc). Find "Windows Explorer". Right-click → Restart. <span class="screenshot-hint">📷 Suggestion: Screenshot of Task Manager right-clicking "Windows Explorer".</span>' },
            { text: '<strong>Powershell Fix:</strong> (Advanced) Run a specific Powershell command to re-register the taskbar app package. <span class="screenshot-hint">📷 Suggestion: Screenshot of PowerShell Administrator window.</span>' },
            { text: '<strong>Updates:</strong> Check for Windows Updates. Microsoft often patches taskbar bugs.' }
        ]
    },
    'ghost-touch': {
        title: 'Ghost Touch',
        summary: 'Screen clicks by itself. Static, digitizer issue, or bad charger.',
        category: 'hardware', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Remove Case/Protector:</strong> A warped screen protector or case pressing on the edges can cause ghost touches. <span class="screenshot-hint">📷 Suggestion: Photo of a phone with a thick case or screen protector peeling.</span>' },
            { text: '<strong>Static Discharge:</strong> Touch a metal object to ground yourself, then wipe the screen with a slightly damp cloth.' },
            { text: '<strong>Unplug Charger:</strong> Cheap 3rd party chargers cause electrical noise that confuses the digitizer. <span class="screenshot-hint">📷 Suggestion: Photo of a certified charger vs a generic one.</span>' }
        ]
    },
    'app-not-installing': {
        title: 'App Not Installing',
        summary: 'Check storage, compatibility, clear Play Store cache.',
        category: 'software', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Check Storage:</strong> You need at least 500MB+ free space for most apps to unpack and install. <span class="screenshot-hint">📷 Suggestion: Screenshot of Storage settings showing low space.</span>' },
            { text: '<strong>Clear Store Cache:</strong> (Android) Settings → Apps → Google Play Store → Storage → Clear Cache. <span class="screenshot-hint">📷 Suggestion: Screenshot of App Info for Play Store showing "Clear Cache".</span>' },
            { text: '<strong>Check OS Version:</strong> The app might require a newer version of iOS or Android than you have.' }
        ]
    },
    'gps-signal-lost': {
        title: 'GPS Signal Lost',
        summary: 'Improve accuracy, remove obstruction, check location settings.',
        category: 'connectivity', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Go Outside:</strong> GPS needs line-of-sight to satellites. Tall buildings and tunnels block signals.' },
            { text: '<strong>High Accuracy Mode:</strong> (Android) Settings → Location → Mode → High Accuracy (uses Wi-Fi + GPS). <span class="screenshot-hint">📷 Suggestion: Screenshot of Location settings "Mode" or "Google Location Accuracy".</span>' },
            { text: '<strong>Compass Calibration:</strong> Open Google Maps and move your phone in a figure-8 motion to calibrate. <span class="screenshot-hint">📷 Suggestion: Diagram of the figure-8 motion for compass calibration.</span>' }
        ]
    },
    'sim-not-detected': {
        title: 'SIM Card Not Detected',
        summary: 'Re-insert SIM, clean contacts, test another phone.',
        category: 'hardware', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Re-seat SIM:</strong> Use a SIM tool to eject the tray. Wipe the SIM gold contacts with a soft cloth. Re-insert. <span class="screenshot-hint">📷 Suggestion: Photo of ejecting a SIM tray.</span>' },
            { text: '<strong>Airplane Toggle:</strong> Toggle Airplane mode on/off to force the modem to re-read the SIM. <span class="screenshot-hint">📷 Suggestion: Screenshot of Quick Settings Airplane Mode icon.</span>' },
            { text: '<strong>Test Swap:</strong> Put your SIM in another phone. If it fails there too, you need a new SIM from your carrier.' }
        ]
    },
    'headphone-jack-broken': {
        title: 'Headphone Jack Not Working',
        summary: 'Remove lint, check audio routing.',
        category: 'hardware', difficulty: 'Easy', os: ['Android'],
        steps: [
            { text: '<strong>Lint Picking:</strong> Use a wooden toothpick to gently scrape out pocket lint from the bottom of the jack. <span class="screenshot-hint">📷 Suggestion: Macro photo of lint inside a headphone jack.</span>' },
            { text: '<strong>Restart:</strong> Sometimes the software audio routing gets stuck on "Speaker" mode.' },
            { text: '<strong>Try Other Headphones:</strong> Confirm it is the jack, not the headphones.' }
        ]
    },
    'screen-burn-in': {
        title: 'Screen Burn-in',
        summary: 'Prevention and mitigation for OLED screens.',
        category: 'hardware', difficulty: 'Hard', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>White Screen Test:</strong> Open a pure white image. Look for faint icons (like the keyboard or status bar) that shouldn\'t be there. <span class="screenshot-hint">📷 Suggestion: Photo of a screen showing faint icons on a white background.</span>' },
            { text: '<strong>Lower Brightness:</strong> High brightness accelerates burn-in. Keep it under 70%. <span class="screenshot-hint">📷 Suggestion: Screenshot of Auto Refresh Rate or Brightness settings.</span>' },
            { text: '<strong>Pixel Refresher:</strong> Some phones have a "Panel Protect" feature. Otherwise, play a "Dead Pixel Fixer" video on YouTube for 1 hour.' }
        ]
    },
    'speaker-crackling': {
        title: 'Speaker Crackling',
        summary: 'Check for water, blown speaker, or software glitch.',
        category: 'hardware', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Water Damage?</strong> If it got wet recently, play a specific "Water Eject" sound (low frequency tone) to push water out. <span class="screenshot-hint">📷 Suggestion: Screenshot of a "Water Eject" shortcut or YouTube video.</span>' },
            { text: '<strong>Volume Test:</strong> Does it crackle at low volume? If only at max volume, the speaker diaphragm might be blown.' },
            { text: '<strong>Safe Mode:</strong> Boot to safe mode. If no crackle, an app (like an equalizer) is causing distortion. <span class="screenshot-hint">📷 Suggestion: Photo of a phone screen showing "Safe Mode" watermark.</span>' }
        ]
    },
    'vibration-failed': {
        title: 'Vibration Not Working',
        summary: 'Check settings, haptic feedback, motor failure.',
        category: 'hardware', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Settings Check:</strong> Settings → Sound & Vibration. Ensure "Vibrate on Ring" and "Haptic Feedback" are ON. <span class="screenshot-hint">📷 Suggestion: Screenshot of Sound & Vibration settings.</span>' },
            { text: '<strong>Test Motor:</strong> User a diagnostic code (`*#0*#` on Samsung) or an app to trigger the vibration motor. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Samsung diagnostic menu *#0*#.</span>' },
            { text: '<strong>Do Not Disturb:</strong> Ensure DND mode isn\'t suppressing vibration. <span class="screenshot-hint">📷 Suggestion: Screenshot of Do Not Disturb settings.</span>' }
        ]
    },
    'wireless-charging-fail': {
        title: 'Wireless Charging Failed',
        summary: 'Remove thick case, align coils, check power brick.',
        category: 'hardware', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Remove Case:</strong> Thick or metal cases block induction. Pop the case off and retry. <span class="screenshot-hint">📷 Suggestion: Photo of a phone case next to the phone.</span>' },
            { text: '<strong>Alignment:</strong> The charging coil is usually in the exact center. Align it perfectly with the pad. <span class="screenshot-hint">📷 Suggestion: Diagram showing proper coil alignment.</span>' },
            { text: '<strong>Power Brick:</strong> The pad needs enough power. Don\'t plug a fast wireless pad into an old 5W iPhone brick. <span class="screenshot-hint">📷 Suggestion: Photo of a 20W+ power adapter.</span>' }
        ]
    },
    'fingerprint-sensor-fail': {
        title: 'Fingerprint Sensor Failed',
        summary: 'Clean sensor, re-enroll print, check scratches.',
        category: 'hardware', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Clean Sensor:</strong> Grease/oil prevents reading. Wipe the scanner (or screen spot) clean. <span class="screenshot-hint">📷 Suggestion: Photo of cleaning the fingerprint sensor.</span>' },
            { text: '<strong>Re-enroll:</strong> Delete the old fingerprint and register it again exactly how you normally hold the phone. <span class="screenshot-hint">📷 Suggestion: Screenshot of "Add Fingerprint" screen.</span>' },
            { text: '<strong>Moisture:</strong> Wet fingers won\'t scan. Dry your hands.' }
        ]
    },
    'auto-rotate-fail': {
        title: 'Screen Won’t Rotate',
        summary: 'Check lock, calibrate sensors, "tap" fix.',
        category: 'sensor', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Rotation Lock:</strong> Check Quick Settings/Control Center. Ensure the "Lock" icon is OFF. <span class="screenshot-hint">📷 Suggestion: Screenshot of Quick Settings "Auto-rotate" icon.</span>' },
            { text: '<strong>The "Tap" Fix:</strong> Sometimes the accelerometer gets stuck. Give the back of the phone a firm tap with your finger. <span class="screenshot-hint">📷 Suggestion: Diagram showing where to tap the back of the phone.</span>' },
            { text: '<strong>Calibrate:</strong> Open Google Maps and move phone in figure-8 to unstuck sensors. <span class="screenshot-hint">📷 Suggestion: Screenshot of a Compass/Level app.</span>' }
        ]
    },
    'proximity-sensor-fail': {
        title: 'Screen Stays On In Call',
        summary: 'Clean top bezel, remove screen protector obstruction.',
        category: 'sensor', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Clean Bezel:</strong> The sensor is near the earpiece. Ear wax or face oil blocks it. Wipe it clean.' },
            { text: '<strong>Screen Protector:</strong> Cheap protectors often cover the sensor. If it has no cutout for the sensor, remove it. <span class="screenshot-hint">📷 Suggestion: Photo of a screen protector covering the top sensors.</span>' },
            { text: '<strong>Diagnostic:</strong> (Android) Dial `*#77692#` (on some models) to test the Proximity Sensor. <span class="screenshot-hint">📷 Suggestion: Screenshot of a Sensor Test app.</span>' }
        ]
    },
    'mic-muffled': {
        title: 'Microphone Muffled',
        summary: 'Clean mic hole, check case obstruction.',
        category: 'hardware', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Inspect Holes:</strong> Look at the tiny mic holes on the bottom/top. Are they clogged? Use a soft brush. <span class="screenshot-hint">📷 Suggestion: Macro photo of the microphone hole.</span>' },
            { text: '<strong>Case Check:</strong> Ensure your case isn\'t slightly misaligned and covering the mic hole. <span class="screenshot-hint">📷 Suggestion: Photo of a misaligned case covering the mic.</span>' },
            { text: '<strong>Voice Memos:</strong> Record a voice memo. If it sounds underwater, hardware is likely clogged or damaged. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Voice Recorder app.</span>' }
        ]
    },
    'charging-overheating': {
        title: 'Overheating While Charging',
        summary: 'Remove case, use official charger, avoid usage.',
        category: 'battery', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Don’t Use It:</strong> Gaming while charging generates massive heat. Let it charge in peace.' },
            { text: '<strong>Remove Case:</strong> Cases trap heat. Remove it during charging if the room is warm. <span class="screenshot-hint">📷 Suggestion: Photo of removing a case while charging.</span>' },
            { text: '<strong>Cable Check:</strong> A damaged cable can have high resistance (heat). Swap the cable. <span class="screenshot-hint">📷 Suggestion: Photo of a frayed charging cable.</span>' }
        ]
    },
    'flashlight-not-working': {
        title: 'Flashlight Not Working',
        summary: 'Charge battery, close camera app, cool down.',
        category: 'hardware', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Charge Up:</strong> Many phones disable the flash if battery is <5% or 15%. <span class="screenshot-hint">📷 Suggestion: Screenshot of Low Power Mode enabled.</span>' },
            { text: '<strong>Close Camera:</strong> If the Camera app is open in background, it hogs the LED resource. Swipe it away. <span class="screenshot-hint">📷 Suggestion: Screenshot of Closing apps in Recent Apps view.</span>' },
            { text: '<strong>Cool Down:</strong> If the phone is hot, flash is disabled to prevent LED damage.' }
        ]
    },
    'boot-loop': {
        title: 'Phone Stuck in Boot Loop',
        summary: 'Force restart, recovery mode, battery pull.',
        category: 'software', difficulty: 'Hard', os: ['Android'],
        steps: [
            { text: '<strong>Stuck Button:</strong> Ensure the power button isn\'t physically stuck down by a case or gunk. <span class="screenshot-hint">📷 Suggestion: Photo of a stuck power button.</span>' },
            { text: '<strong>Recovery Mode:</strong> Boot into Recovery (Vol Down + Power). Select "Wipe Cache Partition". <span class="screenshot-hint">📷 Suggestion: Photo of Android Recovery menu.</span>' },
            { text: '<strong>Factory Reset:</strong> Last resort in Recovery Mode: "Wipe Data/Factory Reset". <span class="screenshot-hint">📷 Suggestion: Photo of "Wipe Data/Factory Reset" option.</span>' }
        ]
    },
    'no-service': {
        title: 'No Service / Searching',
        summary: 'Toggle airplane, re-seat SIM, carrier settings.',
        category: 'connectivity', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Outage Map:</strong> Check DownDetector to see if your carrier is having an outage. <span class="screenshot-hint">📷 Suggestion: Screenshot of DownDetector map.</span>' },
            { text: '<strong>Reset Network:</strong> Settings → General → Reset → Reset Network Settings. <span class="screenshot-hint">📷 Suggestion: Screenshot of Reset Network Settings confirmation.</span>' },
            { text: '<strong>Update Carrier Settings:</strong> (iOS) Settings → General → About. Wait 10s for a popup update. <span class="screenshot-hint">📷 Suggestion: Screenshot of "Carrier Settings Update" popup.</span>' }
        ]
    },
    'cannot-send-sms': {
        title: 'Cannot Send SMS',
        summary: 'Check SMS center number, signal.',
        category: 'connectivity', difficulty: 'Medium', os: ['Android'],
        steps: [
            { text: '<strong>SMSC Number:</strong> Messaging App → Settings → More → SMS Center. Verify this number matches your carrier’s spec.' },
            { text: '<strong>Clear Cache:</strong> Clear cache of the Messages app in Settings. <span class="screenshot-hint">📷 Suggestion: Screenshot of Messages app App Info.</span>' },
            { text: '<strong>Delete Old Threads:</strong> Sometimes having 50,000 texts crashes the database. Delete old threads.' }
        ]
    },
    'cannot-make-calls': {
        title: 'Cannot Make Calls',
        summary: 'Check VoLTE, Blocked numbers, Signal.',
        category: 'connectivity', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>VoLTE Toggle:</strong> Settings → Mobile Data → Options. Toggle "VoLTE" off and on. <span class="screenshot-hint">📷 Suggestion: Screenshot of Mobile Data settings showing VoLTE toggle.</span>' },
            { text: '<strong>Show Caller ID:</strong> Settings → Phone → Show My Caller ID. Ensure it is ON.' },
            { text: '<strong>Bill Pay:</strong> (Obvious but happens) Did your autopay fail? Check account status.' }
        ]
    },
    'spam-calls': {
        title: 'Too Many Spam Calls',
        summary: 'Use filtering apps, register DNC.',
        category: 'software', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Silence Unknown:</strong> (iOS) Settings → Phone → Silence Unknown Callers. <span class="screenshot-hint">📷 Suggestion: Screenshot of "Silence Unknown Callers" setting.</span>' },
            { text: '<strong>Spam Filter:</strong> (Android) Phone App → Settings → Caller ID & Spam. Turn on filtering. <span class="screenshot-hint">📷 Suggestion: Screenshot of Google Phone app Spam settings.</span>' },
            { text: '<strong>Carrier App:</strong> Most carriers (AT&T ActiveArmor, T-Mobile Scam Shield) have free blocking apps.' }
        ]
    },
    'screen-brightness-stuck': {
        title: 'Screen Brightness Stuck',
        summary: 'Sensor issue, auto-brightness bug.',
        category: 'hardware', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Toggle Auto:</strong> Settings → Display. Turn "Adaptive Brightness" off and on again. <span class="screenshot-hint">📷 Suggestion: Screenshot of Display settings "Adaptive Brightness".</span>' },
            { text: '<strong>Sensor Check:</strong> The sensor is near the earpiece. Ensure a case or dirt isn\'t covering it.' },
            { text: '<strong>Restart:</strong> A simple reboot fixes most sensor driver glitches.' }
        ]
    },
    'keyboard-disappears': {
        title: 'Keyboard Disappears',
        summary: 'Gboard/SwiftKey crash, cache issue.',
        category: 'software', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Force Stop:</strong> (Android) Settings → Apps → Gboard (or your keyboard) → Force Stop.' },
            { text: '<strong>Clear Cache:</strong> (Android) Settings → Apps → Gboard → Storage → Clear Cache. <span class="screenshot-hint">📷 Suggestion: Screenshot of Gboard app storage settings.</span>' },
            { text: '<strong>Update App:</strong> Go to App Store/Play Store and ensure the keyboard app is up to date.' }
        ]
    },
    'mobile-slow-performance': {
        title: 'Slow Performance',
        summary: 'Close background apps, check battery health.',
        category: 'performance', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Close Apps:</strong> Swipe up from bottom (or hit Recents) and "Clear All". <span class="screenshot-hint">📷 Suggestion: Screenshot of closing all background apps.</span>' },
            { text: '<strong>Battery Health:</strong> Old batteries allow less peak power, causing the CPU to throttle speed. Check battery health. <span class="screenshot-hint">📷 Suggestion: Screenshot of Battery Health settings.</span>' },
            { text: '<strong>Reduce Motion:</strong> (iOS) Settings → Accessibility → Motion → Reduce Motion. Makes phone feel snappier.' }
        ]
    },
    'storage-full-mobile': {
        title: 'Storage Full',
        summary: 'Delete photos, offload apps, clear WhatsApp.',
        category: 'data', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>WhatsApp Media:</strong> WhatsApp → Settings → Storage and Data → Manage Storage. Delete large videos. <span class="screenshot-hint">📷 Suggestion: Screenshot of WhatsApp "Manage Storage" screen.</span>' },
            { text: '<strong>Offload Apps:</strong> (iOS) Settings → General → iPhone Storage. Enable "Offload Unused Apps" to save space without losing data. <span class="screenshot-hint">📷 Suggestion: Screenshot of iPhone Storage settings.</span>' },
            { text: '<strong>Google Photos:</strong> Back up photos to the cloud and use "Free up space" to delete local copies.' }
        ]
    },
    'play-store-crash': {
        title: 'Google Play Store Crash',
        summary: 'Clear services cache, remove account.',
        category: 'software', difficulty: 'Medium', os: ['Android'],
        steps: [
            { text: '<strong>Clear Services:</strong> Settings → Apps → Google Play Services → Storage → Clear All Data. <span class="screenshot-hint">📷 Suggestion: Screenshot of Play Services App Info.</span>' },
            { text: '<strong>Remove Account:</strong> Settings → Accounts → Google → Remove Account. Then add it back. Syncs everything fresh.' },
            { text: '<strong>Uninstall Updates:</strong> Settings → Apps → Google Play Store → Uninstall Updates. It will auto-update to latest later.' }
        ]
    },
    'imessage-error': {
        title: 'iMessage Activation Error',
        summary: 'Check time zone, carrier SMS, network.',
        category: 'software', difficulty: 'Medium', os: ['iOS'],
        steps: [
            { text: '<strong>Check Time Zone:</strong> Settings → General → Date & Time. Must be "Set Automatically". <span class="screenshot-hint">📷 Suggestion: Screenshot of Date & Time "Set Automatically".</span>' },
            { text: '<strong>Toggle iMessage:</strong> Settings → Messages. Turn iMessage OFF, wait 10s, turn ON. <span class="screenshot-hint">📷 Suggestion: Screenshot of iMessage toggle.</span>' },
            { text: '<strong>SMS Ability:</strong> You need ability to send SMS (text) locally for activation to verify your number.' }
        ]
    },
    'airdrop-fails': {
        title: 'AirDrop Not Working',
        summary: 'Bluetooth/Wi-Fi off, contacts only mode.',
        category: 'connectivity', difficulty: 'Easy', os: ['iOS'],
        steps: [
            { text: '<strong>Everyone Mode:</strong> Settings → General → AirDrop. Set to "Everyone for 10 Minutes" to rule out contact syncing bugs. <span class="screenshot-hint">📷 Suggestion: Screenshot of AirDrop settings.</span>' },
            { text: '<strong>Wake Screen:</strong> The receiving device must be awake and unlocked.' },
            { text: '<strong>Toggle Radios:</strong> Turn Wi-Fi and Bluetooth OFF and back ON for both devices.' }
        ]
    },
    'siri-issues': {
        title: 'Siri Not Responding',
        summary: 'Check Hey Siri, microphone, internet.',
        category: 'software', difficulty: 'Easy', os: ['iOS'],
        steps: [
            { text: '<strong>Listen for "Hey Siri":</strong> Settings → Siri & Search. Toggle "Listen for Hey Siri" off and on to retrain voice. <span class="screenshot-hint">📷 Suggestion: Screenshot of Siri & Search settings.</span>' },
            { text: '<strong>Check Mic:</strong> Record a voice memo. If silent, your mic is broken, not Siri. <span class="screenshot-hint">📷 Suggestion: Screenshot of Voice Memos app.</span>' },
            { text: '<strong>Low Power Mode:</strong> Siri is often disabled or limited in Low Power Mode. Charge your phone.' }
        ]
    },
    'google-assistant-broken': {
        title: 'Google Assistant Broken',
        summary: 'Retrain Voice Match, check default app.',
        category: 'software', difficulty: 'Easy', os: ['Android'],
        steps: [
            { text: '<strong>Retrain Voice:</strong> Google App → Settings → Google Assistant → Hey Google & Voice Match → Retrain Voice Model. <span class="screenshot-hint">📷 Suggestion: Screenshot of Assistant Voice Match settings.</span>' },
            { text: '<strong>Default App:</strong> Settings → Apps → Default apps → Digital assistant app. Ensure Google is selected. <span class="screenshot-hint">📷 Suggestion: Screenshot of Default Digital Assistant app settings.</span>' },
            { text: '<strong>Microphone Access:</strong> Ensure Google app has permission to use the microphone.' }
        ]
    },
    'notification-delay': {
        title: 'Notification Delay',
        summary: 'Battery optimization, background data.',
        category: 'software', difficulty: 'Medium', os: ['Android'],
        steps: [
            { text: '<strong>Battery Optimization:</strong> Settings → Apps → (App Name) → Battery. Set to "Unrestricted". <span class="screenshot-hint">📷 Suggestion: Screenshot of App Battery usage settings.</span>' },
            { text: '<strong>Background Data:</strong> Settings → Apps → (App Name) → Mobile data. Allow background data usage.' },
            { text: '<strong>Adaptive Battery:</strong> Settings → Battery → Adaptive Battery. Turn OFF if it keeps killing apps.' }
        ]
    },
    'alarm-no-ring': {
        title: 'Alarm Didn’t Ring',
        summary: 'Check volume, Do Not Disturb sound settings.',
        category: 'software', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Alarm Volume:</strong> Android separates "Ring" and "Alarm" volume. Settings → Sound → Alarm Volume. <span class="screenshot-hint">📷 Suggestion: Screenshot of Sound settings showing Alarm volume slider.</span>' },
            { text: '<strong>Check AM/PM:</strong> Ensure you didn\'t set it for 7:00 PM instead of 7:00 AM. <span class="screenshot-hint">📷 Suggestion: Screenshot of setting an alarm time.</span>' },
            { text: '<strong>Do Not Disturb:</strong> Settings → Sound → Do Not Disturb → Alarms & other interruptions. Allow Alarms.' }
        ]
    },
    'hotspot-fails': {
        title: 'Hotspot Not Working',
        summary: 'APN settings, carrier plan, band selection.',
        category: 'connectivity', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Plan Check:</strong> Does your carrier plan include hotspot data? Many unlimited plans cap it.' },
            { text: '<strong>APN Settings:</strong> (Android) Settings → Network → Mobile Network → Access Point Names. Ensure "APN Type" includes "dun". <span class="screenshot-hint">📷 Suggestion: Screenshot of APN settings.</span>' },
            { text: '<strong>Band:</strong> Change "APN Band" from 5GHz to 2.4GHz for better compatibility with older devices. <span class="screenshot-hint">📷 Suggestion: Screenshot of Hotspot Band settings (2.4GHz vs 5GHz).</span>' }
        ]
    },
    'nfc-fails': {
        title: 'NFC Not Working',
        summary: 'Case interference, NFC off, wallet app.',
        category: 'hardware', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Check Toggle:</strong> (Android) Quick Settings. Ensure NFC is ON. <span class="screenshot-hint">📷 Suggestion: Screenshot of Quick Settings NFC tile.</span>' },
            { text: '<strong>Remove Case:</strong> Thick wallet cases with magnetic cards block the signal.' },
            { text: '<strong>Tap Location:</strong> Locate the NFC chip (usually top back). Tap that exact spot to the reader. <span class="screenshot-hint">📷 Suggestion: Diagram of NFC chip location.</span>' }
        ]
    },
    'video-playback-error': {
        title: 'Video Playback Error',
        summary: 'Codec issue, internet speed, browser.',
        category: 'software', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Update Browser:</strong> Chrome/Safari updates often include new video codecs.' },
            { text: '<strong>Clear Cache:</strong> Clear the browser cache and cookies. <span class="screenshot-hint">📷 Suggestion: Screenshot of Browser privacy settings.</span>' },
            { text: '<strong>Reduce Quality:</strong> If buffering, the internet is too slow. Drop to 480p.' }
        ]
    },
    'music-stops': {
        title: 'Music Stops Randomly',
        summary: 'Battery optimization killing app, buffer.',
        category: 'software', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Unrestricted Battery:</strong> Set your music app (Spotify/Apple Music) battery usage to "Unrestricted". <span class="screenshot-hint">📷 Suggestion: Screenshot of App Battery settings.</span>' },
            { text: '<strong>Download Songs:</strong> If streaming cuts out, download the playlist for offline play to rule out network issues.' },
            { text: '<strong>Bluetooth Range:</strong> If on headphones, keep the phone in a front pocket, not a backpack (body blocks signal).' }
        ]
    },
    'camera-blurry': {
        title: 'Camera Blurry',
        summary: 'Smudged lens, focus issue.',
        category: 'hardware', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Wipe Lens:</strong> 99% of blurry photos are due to finger grease on the lens. Wipe with shirt. <span class="screenshot-hint">📷 Suggestion: Photo of wiping a camera lens.</span>' },
            { text: '<strong>Tap to Focus:</strong> Tap the screen on the subject to force the autofocus motor to move. <span class="screenshot-hint">📷 Suggestion: Screenshot of Camera viewfinder with focus box.</span>' },
            { text: '<strong>Remove Magnet:</strong> Magnetic cases interfere with the optical image stabilization (OIS).' }
        ]
    },
    'update-stuck-mobile': {
        title: 'Update Stuck',
        summary: 'Storage space, Wi-Fi connection.',
        category: 'system', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Free Space:</strong> You need at least 2x the update size free. Delete videos. <span class="screenshot-hint">📷 Suggestion: Screenshot of Storage settings.</span>' },
            { text: '<strong>Power:</strong> Plug into a charger. Updates often won\'t install below 50% battery.' },
            { text: '<strong>Delete Update:</strong> (iOS) iPhone Storage. Find the "iOS Update" file, delete it, and re-download. <span class="screenshot-hint">📷 Suggestion: Screenshot of iPhone Storage showing update file.</span>' }
        ]
    },
    'factory-reset-stuck': {
        title: 'Factory Reset Stuck',
        summary: 'Wait it out, force restart.',
        category: 'system', difficulty: 'Hard', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Wait:</strong> It can take up to 1 hour. Do not interrupt it.' },
            { text: '<strong>Force Restart:</strong> If stuck for >2 hours, force restart. If it boots to a computer icon, you need to restore via PC. <span class="screenshot-hint">📷 Suggestion: Diagram of Force Restart button combo.</span>' }
        ]
    },
    'water-damage': {
        title: 'Water Damage',
        summary: 'Turn off, silica gel, do not charge.',
        category: 'hardware', difficulty: 'Hard', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Turn OFF:</strong> Immediately power down. Do not verify if it works.' },
            { text: '<strong>Silica Gel:</strong> Put in a sealed bag with silica gel packets (NOT rice; rice dust kills ports). Wait 48 hours. <span class="screenshot-hint">📷 Suggestion: Photo of phone in bag with silica gel.</span>' },
            { text: '<strong>Do Not Charge:</strong> Plugging in a wet phone causes short circuits holding the most power. <span class="screenshot-hint">📷 Suggestion: Warning icon about wet charging port.</span>' }
        ]
    },
    'bluetooth-audio-delay': {
        title: 'Bluetooth Audio Delay',
        summary: 'Sync issues with video, codec settings.',
        category: 'connectivity', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Unpair/repair:</strong> Forget the device in Bluetooth settings and repair it.' },
            { text: '<strong>Codec Change:</strong> (Android) Developer Options → Bluetooth Audio Codec. Try AAC or SBC instead of LDAC/aptX. <span class="screenshot-hint">📷 Suggestion: Screenshot of Developer Options Bluetooth Codec.</span>' },
            { text: '<strong>Game Mode:</strong> Many earbuds have a "Game Mode" or low-latency mode. Check the manual to enable it.' }
        ]
    }
};

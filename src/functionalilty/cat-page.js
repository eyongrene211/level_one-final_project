const menuButton = document.getElementById('menu-button');
        const mobileNavMenu = document.getElementById('mobile-nav-menu');
        const closeButton = document.getElementById('close-button');

        // Function to open the mobile menu
        function openMobileMenu() {
            mobileNavMenu.classList.remove('translate-x-full', 'opacity-0');
            mobileNavMenu.classList.add('translate-x-0', 'opacity-100');
            document.body.style.overflow = 'hidden'; // Prevent scrolling on body when menu is open
        }

        // Function to close the mobile menu
        function closeMobileMenu() {
            mobileNavMenu.classList.remove('translate-x-0', 'opacity-100');
            mobileNavMenu.classList.add('translate-x-full', 'opacity-0');
            document.body.style.overflow = ''; // Restore body scrolling
        }

        // Event Listeners for menu toggle
        menuButton.addEventListener('click', openMobileMenu);
        closeButton.addEventListener('click', closeMobileMenu);

        // Close menu if a navigation link is clicked (optional, but good UX)
        mobileNavMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Handle resize to ensure menu state is correct on desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint
                // On desktop, ensure mobile menu is hidden and body scrolling is enabled
                mobileNavMenu.classList.add('translate-x-full', 'opacity-0');
                mobileNavMenu.classList.remove('translate-x-0', 'opacity-100');
                document.body.style.overflow = '';
            }
        });

        // Initial check on load to ensure menu is hidden on mobile if loaded on desktop
        window.addEventListener('load', () => {
            if (window.innerWidth < 768) {
                mobileNavMenu.classList.add('translate-x-full', 'opacity-0'); // Ensure it starts hidden
            }
        });
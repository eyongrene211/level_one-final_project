const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileNavMenu = document.getElementById('mobile-nav-menu');
        const closeMobileMenu = document.getElementById('close-mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileNavMenu.classList.remove('translate-x-full', 'opacity-0');
            mobileNavMenu.classList.add('translate-x-0', 'opacity-100');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });

        closeMobileMenu.addEventListener('click', () => {
            mobileNavMenu.classList.remove('translate-x-0', 'opacity-100');
            mobileNavMenu.classList.add('translate-x-full', 'opacity-0');
            document.body.style.overflow = ''; // Restore scrolling
        });

        // Close menu if a navigation link is clicked (optional, but good UX)
        mobileNavMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNavMenu.classList.remove('translate-x-0', 'opacity-100');
                mobileNavMenu.classList.add('translate-x-full', 'opacity-0');
                document.body.style.overflow = '';
            });
        });

        // Handle resize to ensure menu state is correct on desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint
                mobileNavMenu.classList.add('translate-x-full', 'opacity-0'); // Ensure it's hidden on desktop
                mobileNavMenu.classList.remove('translate-x-0', 'opacity-100');
                document.body.style.overflow = ''; // Restore body scrolling
            }
        });

        // Initial check on load to ensure menu is hidden on mobile if loaded on desktop
        window.addEventListener('load', () => {
            if (window.innerWidth < 768) {
                mobileNavMenu.classList.add('translate-x-full', 'opacity-0'); // Ensure it starts hidden
            }
        });
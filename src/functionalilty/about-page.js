 const menuButton = document.getElementById('menu');
        const navMenu = document.getElementById('navMenu');
        const closeButton = document.getElementById('close');

        // Function to open the mobile menu
        function openMenu() {
            navMenu.classList.remove('-translate-y-full', 'opacity-0', 'hidden');
            navMenu.classList.add('translate-y-0', 'opacity-100');
            // Ensure content is centered and flex-col when open
            navMenu.classList.add('flex', 'flex-col', 'items-center', 'justify-center'); 
        }

        // Function to close the mobile menu
        function closeMenu() {
            navMenu.classList.remove('translate-y-0', 'opacity-100');
            navMenu.classList.add('-translate-y-full', 'opacity-0');
            // Remove flex properties after transition to ensure it's truly hidden
            setTimeout(() => {
                navMenu.classList.add('hidden');
                navMenu.classList.remove('flex', 'flex-col', 'items-center', 'justify-center');
            }, 300); 
        }

        menuButton.addEventListener('click', openMenu);
        closeButton.addEventListener('click', closeMenu);

        // Handle resize to ensure menu state is correct on desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint
                // On desktop, ensure menu is always visible and correctly positioned
                navMenu.classList.remove('-translate-y-full', 'opacity-0', 'hidden', 'flex', 'flex-col', 'items-center', 'justify-center');
                navMenu.classList.add('translate-y-0', 'opacity-100');
            } else {
                // If resizing down to mobile and menu was open, close it
                if (navMenu.classList.contains('translate-y-0')) {
                    closeMenu();
                }
            }
        });

        // Initial check on load to ensure menu is hidden on mobile and visible on desktop
        window.addEventListener('load', () => {
            if (window.innerWidth < 768) {
                navMenu.classList.add('hidden');
            }
        });
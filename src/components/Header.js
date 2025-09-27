export function Header() {
  return `
    <!-- Preloader -->
    <div id="preloader" class="fixed inset-0 z-[99999] bg-black flex items-center justify-center">
      <div class="relative">
        <div class="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src="/src/images/creative-agency/loader.png" alt="Loading" class="w-12 h-12 object-contain">
        </div>
      </div>
    </div>

    <header class="fixed top-0 left-0 w-full z-[9999] px-4 py-4" id="header">
      <div class="container mx-auto">
        <div class="bg-primary-black dark:bg-primary-black light:bg-white border border-border-color dark:border-border-color light:border-gray-200 rounded-40 p-1 transition-colors duration-300">
          <div class="flex items-center justify-between">
            
            <div class="flex-shrink-0">
              <a href="index.html" class="block max-w-[160px] border border-border-color dark:border-border-color light:border-gray-200 text-center px-1 py-1 rounded-40 transition-colors duration-300">
                <img src="/src/images/creative-agency/logo/logo-main.png" alt="Brand Logo" class="w-full">
              </a>
            </div>

            <nav class="hidden lg:flex items-center ml-30 flex-1">
              <ul class="flex items-center">
                <li>
                  <a href="index.html" class="nav-link block px-5 py-3 text-white dark:text-white light:text-gray-900 font-semibold text-base rounded-40 leading-none transition-all hover:text-primary hover:bg-gray-dark dark:hover:bg-gray-dark light:hover:bg-gray-100">
                    Home
                  </a>
                </li>
                <li>
                  <a href="services.html" class="nav-link block px-5 py-3 text-white dark:text-white light:text-gray-900 font-semibold text-base rounded-40 leading-none transition-all hover:text-primary hover:bg-gray-dark dark:hover:bg-gray-dark light:hover:bg-gray-100">
                    Services
                  </a>
                </li>
                <li>
                  <a href="about.html" class="nav-link block px-5 py-3 text-white dark:text-white light:text-gray-900 font-semibold text-base rounded-40 leading-none transition-all hover:text-primary hover:bg-gray-dark dark:hover:bg-gray-dark light:hover:bg-gray-100">
                    About
                  </a>
                </li>
                <li>
                  <a href="projects.html" class="nav-link block px-5 py-3 text-white dark:text-white light:text-gray-900 font-semibold text-base rounded-40 leading-none transition-all hover:text-primary hover:bg-gray-dark dark:hover:bg-gray-dark light:hover:bg-gray-100">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="contact.html" class="nav-link block px-5 py-3 text-white dark:text-white light:text-gray-900 font-semibold text-base rounded-40 leading-none transition-all hover:text-primary hover:bg-gray-dark dark:hover:bg-gray-dark light:hover:bg-gray-100">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div class="hidden md:flex items-center ml-auto lg:ml-0">
              <a href="contact.html" class="group relative inline-flex items-center justify-center bg-primary px-8 py-3 rounded-full text-black font-semibold overflow-hidden transition-all hover:opacity-90 hover:scale-105 hover:shadow-xl">
                <span class="relative z-10 transition-transform group-hover:-translate-y-0.5">LETS TALK</span>
              </a>
            </div>

            <div class="flex items-center ml-5 lg:hidden">
              <button class="p-3 border border-white/70 dark:border-white/70 light:border-gray-300 rounded-md cursor-pointer transition-colors" id="navbarToggler">
                <span class="block h-0.5 w-8 bg-white dark:bg-white light:bg-gray-900 rounded transition-all"></span>
                <span class="block h-0.5 w-8 bg-white dark:bg-white light:bg-gray-900 rounded mt-1.5 transition-all"></span>
                <span class="block h-0.5 w-8 bg-white dark:bg-white light:bg-gray-900 rounded mt-1.5 transition-all"></span>
              </button>
            </div>

          </div>
        </div>
      </div>

      <div id="mobileMenu" class="fixed top-0 left-0 w-[280px] h-screen bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-white z-[10001] overflow-y-auto transition-transform duration-500 transform -translate-x-full">
        
        <div class="flex justify-end p-6">
          <button id="navbarClose" class="w-12 h-12 rounded-lg border border-white/20 dark:border-white/20 light:border-gray-200 flex items-center justify-center text-white dark:text-white light:text-gray-900 transition-colors hover:bg-primary hover:text-heading hover:border-primary">
            <i class="fas fa-times text-lg"></i>
          </button>
        </div>

        <div class="px-6 mb-8">
          <a href="index.html" class="inline-block bg-white rounded-full px-8 py-4">
            <img src="/src/images/creative-agency/logo/logo-main.png" alt="Logo" class="h-8">
          </a>
        </div>

        <nav class="px-6">
          <ul>
            <li class="border-b border-white/10">
              <a href="index.html" class="mobile-nav-link block py-4 text-white text-base font-medium transition-colors hover:text-primary">
                Home
              </a>
            </li>
            <li class="border-b border-white/10">
              <a href="services.html" class="mobile-nav-link block py-4 text-white text-base font-medium transition-colors hover:text-primary">
                Services
              </a>
            </li>
            <li class="border-b border-white/10">
              <a href="about.html" class="mobile-nav-link block py-4 text-white text-base font-medium transition-colors hover:text-primary">
                About
              </a>
            </li>
            <li class="border-b border-white/10">
              <a href="projects.html" class="mobile-nav-link block py-4 text-white text-base font-medium transition-colors hover:text-primary">
                Projects
              </a>
            </li>
            <li class="border-b border-white/10">
              <a href="contact.html" class="mobile-nav-link block py-4 text-white text-base font-medium transition-colors hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div class="px-6 mt-8">
          <a href="contact.html" class="group w-full flex items-center justify-center bg-primary text-heading font-semibold py-4 px-8 rounded-30 transition-all hover:opacity-90">
            <span class="mr-2">LETS TALK</span>
            <i class="far fa-arrow-right transition-transform group-hover:translate-x-1"></i>
          </a>
        </div>

        <div class="px-6 mt-10">
          <h5 class="text-white mb-5 font-semibold text-base">Follow Us</h5>
          <ul class="flex gap-3 social-link">
            <li>
              <a href="#" class="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <i class="fab fa-facebook-f text-sm"></i>
              </a>
            </li>
            <li>
              <a href="#" class="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <i class="fab fa-twitter text-sm"></i>
              </a>
            </li>
            <li>
              <a href="#" class="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <i class="fab fa-linkedin-in text-sm"></i>
              </a>
            </li>
            <li>
              <a href="#" class="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <i class="fab fa-youtube text-sm"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="offcanvasOverlay" class="fixed inset-0 bg-black/80 opacity-0 invisible transition-all duration-300 z-[10000]"></div>
    </header>
  `;
}

export function initHeader() {
  // Hide preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }, 500);
    });
  }

  const toggler = document.getElementById('navbarToggler');
  const closeBtn = document.getElementById('navbarClose');
  const overlay = document.getElementById('offcanvasOverlay');
  const menu = document.getElementById('mobileMenu');

  if (!toggler || !closeBtn || !overlay || !menu) {
    console.error('Header elements not found');
    return;
  }

  // Mark active page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active-page');
    }
  });

  mobileNavLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active-mobile-page');
    }
  });

  const menuItems = menu.querySelectorAll('nav ul li');
  const socialIcons = menu.querySelectorAll('.social-link li');
  const menuLogo = menu.querySelector('.px-6.mb-8');
  const menuButton = menu.querySelector('.px-6.mt-8');
  const followSection = menu.querySelector('.px-6.mt-10');

  toggler.addEventListener('click', () => {
    menu.classList.remove('-translate-x-full');
    menu.classList.add('translate-x-0');
    overlay.classList.remove('invisible', 'opacity-0');
    overlay.classList.add('visible', 'opacity-100');

    if (typeof gsap !== 'undefined') {
      gsap.from(menuLogo, {
        opacity: 0,
        x: -50,
        duration: 0.5,
        delay: 0.2,
        ease: 'power3.out'
      });

      gsap.from(menuItems, {
        opacity: 0,
        x: -30,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.3,
        ease: 'power2.out'
      });

      gsap.from(menuButton, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.7,
        ease: 'back.out(1.7)'
      });

      gsap.from(followSection, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.9,
        ease: 'power2.out'
      });
    }
  });

  const closeMobileMenu = () => {
    menu.classList.add('-translate-x-full');
    menu.classList.remove('translate-x-0');
    overlay.classList.add('invisible', 'opacity-0');
    overlay.classList.remove('visible', 'opacity-100');
  };

  closeBtn.addEventListener('click', closeMobileMenu);
  overlay.addEventListener('click', closeMobileMenu);
}
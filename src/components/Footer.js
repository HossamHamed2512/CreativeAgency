export function Footer() {
  return `
    <footer class="relative dark:bg-black light:bg-gray-dark pt-20 md:pt-32 overflow-hidden">
      
      <div class="absolute bottom-20 left-4 md:-left-8 z-0">
        <img src="./src/assets/images/creative-agency/footer/element1.png" alt="Shape" class="opacity-50 md:opacity-70 w-16 md:w-auto">
      </div>
      <div class="absolute bottom-24 right-4 md:right-32 z-0">
        <img src="./src/assets/images/creative-agency/footer/element2.png" alt="Shape" class="opacity-50 md:opacity-70 w-20 md:w-auto">
      </div>
      
      <div class="absolute -top-40 -left-40 z-0">
        <span class="block w-64 h-64 bg-primary opacity-50 blur-3xl"></span>
      </div>
      <div class="absolute -bottom-40 -right-40 z-0">
        <span class="block w-64 h-64 bg-purple-400 opacity-50 blur-3xl"></span>
      </div>

      <div class="relative z-10 pb-20">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8">
            
            <div class="lg:col-span-4 text-center lg:text-left">
              <div class="mb-10">
                <div class="inline-block border border-gray-700 rounded-full bg-black p-1 mb-6">
                  <a href="index.html" class="block w-40 md:w-36 mx-auto lg:mx-0">
                    <img src="./src/assets/images/creative-agency/logo/logo-main.png" alt="Brand Logo" class="w-full">
                  </a>
                </div>
                <p class=" text-base md:text-sm mb-6 max-w-sm mx-auto lg:mx-0 leading-relaxed">
                  Agenko creative digital agency delivering innovate web Development marketing.
                </p>
                <form class="relative max-w-sm mx-auto lg:mx-0">
                  <div class="relative">
                    <input 
                      type="email" 
                      class="w-full bg-white rounded-full py-3.5 md:py-3 pl-12 pr-28 text-black text-base md:text-sm" 
                      placeholder="Email Address" 
                      required
                    >
                    <i class="far fa-envelope absolute top-1/2 -translate-y-1/2 left-4 text-gray-600 text-base md:text-sm"></i>
                    <button type="submit" class="absolute top-1/2 -translate-y-1/2 right-1 bg-primary text-black font-semibold py-2.5 md:py-2 px-5 rounded-full text-base md:text-sm hover:opacity-90 transition-opacity">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div class="lg:col-span-3 text-center lg:text-left">
              <div class="mb-10">
                <div class="mb-8 md:mb-6">
                  <h4 class=" text-xl md:text-lg font-bold mb-4 md:mb-3">Main Address</h4>
                  <p class="text-gray-400 text-base md:text-sm mx-auto lg:mx-0 max-w-xs leading-relaxed">
                    6801 Hollywood Blvd, Los Angeles, CA 90028
                  </p>
                </div>
                <div class="mb-6">
                  <h4 class=" text-xl md:text-lg font-bold mb-4 md:mb-3">Sub-Address</h4>
                  <p class="text-gray-400 text-base md:text-sm mx-auto lg:mx-0 max-w-xs leading-relaxed">
                    200 Santa Monica Pier, Santa Monica, CA 90401
                  </p>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
                
                <div class="text-center lg:text-left">
                  <div class="mb-10">
                    <h4 class=" text-xl md:text-lg font-bold mb-5 md:mb-4">Our Link</h4>
                    <ul class="space-y-4 md:space-y-3">
                      <li><a href="about.html" class="text-gray-400 text-base md:text-sm hover:text-primary transition-colors">About us</a></li>
                      <li><a href="services.html" class="text-gray-400 text-base md:text-sm hover:text-primary transition-colors">Services</a></li>
                      <li><a href="projects.html" class="text-gray-400 text-base md:text-sm hover:text-primary transition-colors">Our Project</a></li>
                      <li><a href="faqs.html" class="text-gray-400 text-base md:text-sm hover:text-primary transition-colors">FAQ</a></li>
                      <li><a href="contact.html" class="text-gray-400 text-base md:text-sm hover:text-primary transition-colors">Contact us</a></li>
                    </ul>
                  </div>
                </div>

                <div class="text-center lg:text-left">
                  <div class="mb-10">
                    <h4 class=" text-xl md:text-lg font-bold mb-5 md:mb-4">Contact</h4>
                    
                    <div class="flex gap-4 md:gap-3 mb-8 md:mb-6 justify-center lg:justify-start">
                      <div class="w-12 h-12 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                        <i class="far fa-envelope  text-base md:text-sm"></i>
                      </div>
                      <div class="text-left">
                        <h6 class=" font-semibold mb-1.5 md:mb-1 text-base md:text-sm">Email</h6>
                        <p class="text-gray-400 text-sm md:text-xs break-all"><a href="mailto:hossamhamed2512@gmail.com" class="hover:text-primary transition-colors">hossamhamed2512@gmail.com</a></p>
                      </div>
                    </div>

                    <div class="flex gap-4 md:gap-3 justify-center lg:justify-start">
                      <div class="w-12 h-12 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-phone  text-base md:text-sm"></i>
                      </div>
                      <div class="text-left">
                        <h6 class=" font-semibold mb-1.5 md:mb-1 text-base md:text-sm">Phone</h6>
                        <p class="text-gray-400 text-base md:text-sm"><a href="tel:+201552492512" class="hover:text-primary transition-colors">01552492512</a></p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 py-7 md:py-6 relative z-10">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-4">
            
            <div class="text-center md:text-left">
              <p class=" text-base md:text-sm">
                © 2025 <span class="text-primary font-semibold">Agenko</span> - All Rights Reserved.
              </p>
            </div>

            <div class="text-center md:text-right">
              <ul class="flex flex-wrap justify-center gap-5 md:gap-4">
                <li><a href="#" class="text-gray-400 text-base md:text-sm hover:text-primary transition-colors">Terms & Condition</a></li>
                <li><a href="#" class="text-gray-400 text-base md:text-sm hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" class="text-gray-400 text-base md:text-sm hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  `;
}
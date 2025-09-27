export function ThemeToggle() {
  return `
    <!-- Theme Controls -->
    <div class="fixed bottom-8 right-8 z-[998]">
      
      <!-- Main Control Button -->
      <div class="relative">
        <button id="themeControlBtn" class="w-14 h-14 rounded-full bg-primary shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group">
          <svg class="w-6 h-6 text-heading transition-transform group-hover:rotate-90 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
          </svg>
        </button>

        <!-- Controls Panel -->
        <div id="themePanel" class="absolute bottom-full right-0 mb-4 opacity-0 invisible scale-95 transition-all duration-300">
          <div class="bg-gray-900 dark:bg-gray-900 light:bg-white backdrop-blur-lg rounded-2xl p-5 shadow-2xl min-w-[200px]">
            
            <!-- Dark/Light Mode -->
            <div class="mb-6">
              <p class="text-xs font-semibold text-gray-400 dark:text-gray-400 light:text-gray-600 mb-3 uppercase tracking-wider">Mode</p>
              <button id="themeToggle" class="w-full flex items-center justify-between px-4 py-3 bg-gray-800 dark:bg-gray-800 light:bg-gray-100 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-700 light:hover:bg-gray-200 transition-colors group">
                <span class="text-white dark:text-white light:text-gray-900 font-medium text-sm">
                  <span class="dark:inline hidden">Dark Mode</span>
                  <span class="dark:hidden">Light Mode</span>
                </span>
                <div class="w-8 h-8 rounded-lg bg-gray-700 dark:bg-gray-700 light:bg-white flex items-center justify-center">
                  <svg class="w-5 h-5 text-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                  </svg>
                  <svg class="w-5 h-5 text-yellow-400 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </button>
            </div>

            <!-- Color Picker -->
            <div>
              <p class="text-xs font-semibold text-gray-400 dark:text-gray-400 light:text-gray-600 mb-3 uppercase tracking-wider">Theme Color</p>
              <div class="grid grid-cols-5 gap-2">
                <button data-color="primary" class="w-10 h-10 rounded-lg bg-[#9CFE4F] hover:scale-110 transition-transform shadow-md hover:shadow-lg ring-2 ring-transparent hover:ring-gray-600">
                </button>
                <button data-color="purple" class="w-10 h-10 rounded-lg bg-[#a855f7] hover:scale-110 transition-transform shadow-md hover:shadow-lg ring-2 ring-transparent hover:ring-gray-600">
                </button>
                <button data-color="pink" class="w-10 h-10 rounded-lg bg-[#ec4899] hover:scale-110 transition-transform shadow-md hover:shadow-lg ring-2 ring-transparent hover:ring-gray-600">
                </button>
                <button data-color="orange" class="w-10 h-10 rounded-lg bg-[#f97316] hover:scale-110 transition-transform shadow-md hover:shadow-lg ring-2 ring-transparent hover:ring-gray-600">
                </button>
                <button data-color="green" class="w-10 h-10 rounded-lg bg-[#10b981] hover:scale-110 transition-transform shadow-md hover:shadow-lg ring-2 ring-transparent hover:ring-gray-600">
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  `;
}

export function initThemeToggle(themeManager) {
  const controlBtn = document.getElementById('themeControlBtn');
  const themePanel = document.getElementById('themePanel');
  const themeToggle = document.getElementById('themeToggle');
  const colorButtons = document.querySelectorAll('[data-color]');

  let isPanelOpen = false;

  controlBtn?.addEventListener('click', () => {
    isPanelOpen = !isPanelOpen;
    if (isPanelOpen) {
      themePanel.classList.remove('opacity-0', 'invisible', 'scale-95');
      themePanel.classList.add('opacity-100', 'visible', 'scale-100');
    } else {
      themePanel.classList.add('opacity-0', 'invisible', 'scale-95');
      themePanel.classList.remove('opacity-100', 'visible', 'scale-100');
    }
  });

  document.addEventListener('click', (e) => {
    if (!controlBtn.contains(e.target) && !themePanel.contains(e.target)) {
      themePanel.classList.add('opacity-0', 'invisible', 'scale-95');
      themePanel.classList.remove('opacity-100', 'visible', 'scale-100');
      isPanelOpen = false;
    }
  });

  themeToggle?.addEventListener('click', () => {
    themeManager.toggleTheme();
  });

  colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const color = btn.getAttribute('data-color');
      themeManager.setTextColor(color);
    });
  });
}
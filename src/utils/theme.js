export class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'dark';
    this.currentColor = localStorage.getItem('textColor') || 'primary';
    this.init();
  }

  init() {
    this.applyTheme();
    this.applyTextColor();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', this.currentTheme);
    this.applyTheme();
    this.applyTextColor();
    this.animateThemeChange();
  }

  applyTheme() {
    const html = document.documentElement;
    
    if (this.currentTheme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  }

  setTextColor(color) {
    this.currentColor = color;
    localStorage.setItem('textColor', color);
    this.applyTextColor();
    this.animateColorChange();
  }

  applyTextColor() {
    const colors = {
      primary: '#9CFE4F',
      purple: '#a855f7',
      pink: '#ec4899',
      orange: '#f97316',
      green: '#10b981'
    };

    const selectedColor = colors[this.currentColor];
    document.documentElement.style.setProperty('--theme-color', selectedColor);
    
    // Primary Background Elements
    const primaryBg = document.querySelectorAll('.bg-primary');
    primaryBg.forEach(el => {
      el.style.backgroundColor = selectedColor;
    });

    // Primary Text Elements
    const primaryText = document.querySelectorAll('.text-primary');
    primaryText.forEach(el => {
      el.style.color = selectedColor;
    });

    // Buttons
    const buttons = document.querySelectorAll('a[href*="about.html"], a[href*="contact.html"]');
    buttons.forEach(btn => {
      if (btn.classList.contains('bg-primary') || 
          btn.textContent.includes('LETS TALK') || 
          btn.textContent.includes('Learn More')) {
        btn.style.backgroundColor = selectedColor;
      }
    });

    // Services Section hover color
    const serviceBoxes = document.querySelectorAll('.services-section .group');
    serviceBoxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = selectedColor;
      });
      box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = '';
      });
    });

    // Border colors
    const borderElements = document.querySelectorAll('.border-primary');
    borderElements.forEach(el => {
      el.style.borderColor = selectedColor;
    });

    // Active page styling
    const activePage = document.querySelector('.nav-link.active-page');
    if (activePage) {
      activePage.style.backgroundColor = selectedColor;
      activePage.style.color = '#000000';
    }

    const activeMobilePage = document.querySelector('.mobile-nav-link.active-mobile-page');
    if (activeMobilePage) {
      activeMobilePage.style.color = selectedColor;
    }

    document.documentElement.setAttribute('data-text-color', this.currentColor);
  }

  animateThemeChange() {
    const body = document.body;
    body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    
    setTimeout(() => {
      body.style.transition = '';
    }, 500);
  }

  animateColorChange() {
    const elements = document.querySelectorAll('.bg-primary, .text-primary, .border-primary, a, .group');
    elements.forEach(el => {
      el.style.transition = 'all 0.5s ease';
    });
    
    setTimeout(() => {
      elements.forEach(el => {
        el.style.transition = '';
      });
    }, 500);
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  getCurrentColor() {
    return this.currentColor;
  }
}
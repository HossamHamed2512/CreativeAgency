import './styles/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Header, initHeader } from './components/Header.js'
import { Footer } from './components/Footer.js'
import { ThemeToggle, initThemeToggle } from './components/ThemeToggle.js'
import { 
  initHeaderAnimations, 
  initHeroAnimations, 
  initVideoAnimations, 
  initServicesAnimations,
  initProjectsAnimations,
  initProcessAnimations,
  initCompanyAnimations,
  initTeamAnimations,
  initAwardsAnimations,
  initTestimonialAnimations,
  initBlogAnimations,
  initFooterAnimations 
} from './utils/animations.js'
import { ThemeManager } from './utils/theme.js'

const themeManager = new ThemeManager();

document.addEventListener('DOMContentLoaded', () => {
  // Header
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.innerHTML = Header();
    initHeader();
    initHeaderAnimations();
  }

  // Initialize all animations
  const animations = [
    initHeroAnimations,
    initVideoAnimations,
    initServicesAnimations,
    initProjectsAnimations,
    initProcessAnimations,
    initCompanyAnimations,
    initTeamAnimations,
    initAwardsAnimations,
    initTestimonialAnimations,
    initBlogAnimations
  ];

  animations.forEach(animFn => animFn());

  // Footer
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = Footer();
    setTimeout(() => initFooterAnimations(), 100);
  }

  // Theme Toggle
  document.body.insertAdjacentHTML('beforeend', ThemeToggle());
  initThemeToggle(themeManager);
});
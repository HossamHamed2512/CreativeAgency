import "./assets/styles/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Header, initHeader } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeToggle, initThemeToggle } from "./components/ThemeToggle";
import { ThemeManager } from "./utils/theme";
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
  initFooterAnimations,
  initAboutPageAnimations,
  initServicesPageAnimations,
} from "./utils/animations";

// Initialize Theme Manager
const themeManager = new ThemeManager();

// Inject Header
const headerContainer = document.getElementById("header-container");
if (headerContainer) {
  headerContainer.innerHTML = Header();
  initHeader();
}

// Inject Footer
const footerContainer = document.getElementById("footer-container");
if (footerContainer) {
  footerContainer.innerHTML = Footer();
}

// Inject Theme Toggle
document.body.insertAdjacentHTML("beforeend", ThemeToggle());
initThemeToggle(themeManager);

// Initialize animations based on page
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop() || "index.html";

  // Common animations for all pages
  initHeaderAnimations();
  initFooterAnimations();

  // Page-specific animations
  if (currentPage === "index.html" || currentPage === "") {
    // Home page animations
    initHeroAnimations();
    initVideoAnimations();
    initServicesAnimations();
    initProjectsAnimations();
    initProcessAnimations();
    initCompanyAnimations();
    initTeamAnimations();
    initAwardsAnimations();
    initTestimonialAnimations();
    initBlogAnimations();
  } else if (currentPage === "about.html") {
    // About page animations
    initAboutPageAnimations();
  } else if (currentPage === "services.html") {
    // Services page animations
    initServicesPageAnimations();
  }
});

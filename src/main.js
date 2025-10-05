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
  initProjectsPageAnimations,
  initContactPageAnimations,
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
  // الحصول على اسم الصفحة الحالية
  const currentPath = window.location.pathname;

  // استخراج اسم الصفحة وإزالة .html إن وجدت
  let currentPage = currentPath.split("/").pop() || "index.html";

  // إزالة .html من اسم الصفحة
  currentPage = currentPage.replace(".html", "");

  // إذا كانت الصفحة فاضية (الرئيسية)، اجعلها "home"
  if (currentPage === "" || currentPage === "index") {
    currentPage = "home";
  }

  console.log("Current Page:", currentPage); // للتأكد من اسم الصفحة

  // Common animations for all pages
  initHeaderAnimations();
  initFooterAnimations();

  // Page-specific animations
  if (currentPage === "home") {
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
  } else if (currentPage === "about") {
    // About page animations
    initAboutPageAnimations();
  } else if (currentPage === "services") {
    // Services page animations
    initServicesPageAnimations();
  } else if (currentPage === "projects") {
    // Projects page animations
    initProjectsPageAnimations();
  } else if (currentPage === "contact") {
    // Contact page animations
    initContactPageAnimations();
  }
});

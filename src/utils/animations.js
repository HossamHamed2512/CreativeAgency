import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// Utility Functions
// ============================================

// Animation للعناصر من تحت لفوق
function animateFromBottom(element, delay = 0, options = {}) {
  return gsap.from(element, {
    opacity: 0,
    y: options.distance || 100,
    duration: options.duration || 1,
    ease: options.ease || 'power3.out',
    delay,
    scrollTrigger: {
      trigger: options.trigger || element,
      start: options.start || 'top 80%',
      ...options.scrollTrigger
    }
  });
}

// Animation للعناصر من اليمين/اليسار
function animateFromSide(element, direction = 'left', delay = 0, options = {}) {
  const xValue = direction === 'left' ? -50 : 50;
  return gsap.from(element, {
    opacity: 0,
    x: xValue,
    duration: options.duration || 1,
    ease: options.ease || 'power3.out',
    delay,
    scrollTrigger: {
      trigger: options.trigger || element,
      start: options.start || 'top 80%',
      ...options.scrollTrigger
    }
  });
}

// Animation للأيقونات مع Scale و Rotation
function animateIcon(element, delay = 0) {
  return gsap.from(element, {
    scale: 0,
    rotation: 180,
    duration: 0.6,
    ease: 'back.out(1.7)',
    delay,
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
    }
  });
}

// Hover Scale Effect
function addHoverScale(element, scale = 1.05) {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, { scale, duration: 0.3, ease: 'power2.out' });
  });
  element.addEventListener('mouseleave', () => {
    gsap.to(element, { scale: 1, duration: 0.3, ease: 'power2.out' });
  });
}

// Animate Multiple Items
function animateItems(selector, animationType = 'bottom', delayIncrement = 0.15) {
  const items = document.querySelectorAll(selector);
  items.forEach((item, index) => {
    if (animationType === 'bottom') {
      animateFromBottom(item, index * delayIncrement);
    } else if (animationType === 'side') {
      animateFromSide(item, 'left', index * delayIncrement);
    }
  });
  return items;
}

// ============================================
// Header Animation
// ============================================
export function initHeaderAnimations() {
  const header = document.querySelector('#header');
  if (!header) return;

  animateFromBottom(header, 0.2, { distance: -100, scrollTrigger: null });

  let lastScroll = 0;
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    onUpdate: (self) => {
      const currentScroll = self.scroll();
      gsap.to(header, {
        y: currentScroll > lastScroll && currentScroll > 100 ? -100 : 0,
        duration: 0.3,
        ease: 'power2.inOut'
      });
      lastScroll = currentScroll;
    }
  });
}

// ============================================
// Hero Animation
// ============================================
export function initHeroAnimations() {
  // Blur backgrounds
  gsap.to('.hero-blur-1', {
    x: 100, y: 100, scale: 1.2, duration: 20, repeat: -1, yoyo: true, ease: 'none'
  });
  gsap.to('.hero-blur-2', {
    x: -100, y: 100, scale: 1.2, duration: 25, repeat: -1, yoyo: true, ease: 'none'
  });

  // Hero elements
  const heroTitle = document.querySelector('#heroTitle');
  const heroAgency = document.querySelector('#heroAgency');
  const heroSpiral = document.querySelector('.hero-spiral img');
  const heroDescription = document.querySelector('.hero-description');
  const heroButton = document.querySelector('.hero-button');
  const changingText = document.querySelector('.hero-changing-text');

  if (heroTitle) animateFromBottom(heroTitle, 0.3, { scrollTrigger: null });
  if (heroAgency) animateFromSide(heroAgency, 'right', 0.5, { scrollTrigger: null });
  if (heroDescription) animateFromBottom(heroDescription, 0.7, { distance: 50, scrollTrigger: null });
  if (heroButton) animateFromBottom(heroButton, 0.9, { distance: 30, scrollTrigger: null });
  
  if (heroSpiral) {
    gsap.to(heroSpiral, { rotation: 360, duration: 20, repeat: -1, ease: 'none' });
  }

  if (changingText) {
    gsap.to(changingText, {
      color: '#9CFE4F',
      scrollTrigger: {
        trigger: '.hero-content',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
  }
}

// ============================================
// Video Section Animation
// ============================================
export function initVideoAnimations() {
  const videoSection = document.querySelector('.video-section');
  const videoImage = document.querySelector('.video-section img');
  const playButton = document.querySelector('.video-popup');
  const playIcon = playButton?.querySelector('i');
  
  if (!videoSection || !videoImage || !playButton) return;

  animateFromBottom(videoSection, 0, { 
    duration: 1.2, 
    scrollTrigger: { end: 'top 50%', toggleActions: 'play none none reverse' }
  });

  gsap.to(videoImage, {
    scale: 1.2,
    scrollTrigger: {
      trigger: videoSection,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    }
  });

  gsap.to(playButton, {
    scale: 1.1,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  });

  if (playIcon) {
    playButton.addEventListener('mouseenter', () => {
      gsap.to(playIcon, { rotation: 90, duration: 0.3, ease: 'power2.out' });
    });
    playButton.addEventListener('mouseleave', () => {
      gsap.to(playIcon, { rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
  }
}

// ============================================
// Services Section Animation
// ============================================
export function initServicesAnimations() {
  const servicesSection = document.querySelector('.services-section');
  if (!servicesSection) return;

  const sectionTitle = servicesSection.querySelector('.section-title');
  const textBox = servicesSection.querySelector('.text-box');
  
  if (sectionTitle) {
    animateFromSide(sectionTitle.querySelector('span'), 'left');
    animateFromBottom(sectionTitle.querySelector('h2'), 0.2);
  }
  if (textBox) animateFromSide(textBox, 'right', 0.4);

  const serviceBoxes = animateItems('.services-section .group', 'bottom', 0.2);
  
  serviceBoxes.forEach((box, index) => {
    const icon = box.querySelector('.icon');
    if (icon) {
      animateIcon(icon, 0.8 + (index * 0.2));
      gsap.to(icon, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }

    const link = box.querySelector('a');
    if (link) {
      box.addEventListener('mouseenter', () => {
        gsap.to(link, { x: 5, duration: 0.3 });
      });
      box.addEventListener('mouseleave', () => {
        gsap.to(link, { x: 0, duration: 0.3 });
      });
    }

    addHoverScale(box);
  });
}

// ============================================
// Projects Section Animation
// ============================================
export function initProjectsAnimations() {
  const projectsSection = document.querySelector('.projects-section');
  if (!projectsSection) return;

  animateFromBottom(projectsSection.querySelector('.text-center'), 0);
  
  const projectItems = animateItems('.projects-section .project-item', 'bottom', 0.2);
  projectItems.forEach(item => {
    const img = item.querySelector('img');
    if (img) addHoverScale(img, 1.1);
  });
}

// ============================================
// Process Section Animation
// ============================================
export function initProcessAnimations() {
  const processSection = document.querySelector('.process-section');
  if (!processSection) return;

  gsap.from(processSection.querySelector('.text-center'), {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: 'back.out(1.7)',
    scrollTrigger: { trigger: processSection, start: 'top 80%' }
  });

  const processBoxes = animateItems('.process-section .process-box', 'bottom', 0.15);
  processBoxes.forEach((box, index) => {
    const icon = box.querySelector('.icon');
    if (icon) animateIcon(icon, 0.3 + (index * 0.15));
  });
}

// ============================================
// Company Section Animation
// ============================================
export function initCompanyAnimations() {
  const companySection = document.querySelector('.company-section');
  if (!companySection) return;

  animateFromSide(companySection.querySelector('.text-center, .lg\\:text-left'), 'left');
  
  const clientItems = document.querySelectorAll('.company-section .client-item');
  clientItems.forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: 'back.out(1.7)',
      delay: index * 0.1,
      scrollTrigger: { trigger: item, start: 'top 90%' }
    });
  });
}

// ============================================
// Team Section Animation
// ============================================
export function initTeamAnimations() {
  const teamSection = document.querySelector('.team-section');
  if (!teamSection) return;

  animateFromBottom(teamSection.querySelector('.flex-wrap'), 0);
  
  const teamItems = animateItems('.team-section .team-item', 'bottom', 0.15);
  teamItems.forEach(item => {
    const img = item.querySelector('img');
    if (img) addHoverScale(img);
  });
}

// ============================================
// Awards Section Animation
// ============================================
export function initAwardsAnimations() {
  const awardsSection = document.querySelector('.awards-section');
  if (!awardsSection) return;

  animateFromBottom(awardsSection.querySelector('.flex-wrap'), 0);
  animateFromSide(awardsSection.querySelector('.rounded-2xl'), 'left');
  animateItems('.awards-section .award-item', 'side', 0.1);
}

// ============================================
// Testimonial Section Animation
// ============================================
export function initTestimonialAnimations() {
  const testimonialSection = document.querySelector('.testimonial-section');
  if (!testimonialSection) return;

  animateFromBottom(testimonialSection.querySelector('.text-center'), 0);
  
  gsap.from(testimonialSection.querySelector('.rounded-2xl'), {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: { trigger: testimonialSection, start: 'top 70%' }
  });

  animateFromSide(testimonialSection.querySelector('.testimonial-item'), 'right');
}

// ============================================
// Blog Section Animation
// ============================================
export function initBlogAnimations() {
  const blogSection = document.querySelector('.blog-section');
  if (!blogSection) return;

  animateFromBottom(blogSection.querySelector('.flex-wrap'), 0);
  animateItems('.blog-section .blog-item', 'bottom', 0.2);
}

// ============================================
// Footer Animation
// ============================================
export function initFooterAnimations() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  animateFromBottom(footer, 0);

  const shapes = document.querySelectorAll('footer img[alt="Shape"]');
  shapes.forEach(shape => {
    gsap.to(shape, { rotation: 360, duration: 10, repeat: -1, ease: 'none' });
  });

  const primaryBlur = footer.querySelector('.bg-primary');
  const purpleBlur = footer.querySelector('.bg-purple-400');

  if (primaryBlur) {
    gsap.from(primaryBlur, {
      scale: 0,
      opacity: 0,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: footer, start: 'top 80%' }
    });
  }

  if (purpleBlur) {
    gsap.from(purpleBlur, {
      scale: 0,
      opacity: 0,
      duration: 2,
      delay: 0.2,
      ease: 'power2.out',
      scrollTrigger: { trigger: footer, start: 'top 80%' }
    });
  }
}
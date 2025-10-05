import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// Utility Functions
// ============================================

function animateFromBottom(element, delay = 0, options = {}) {
  return gsap.from(element, {
    opacity: 0,
    y: options.distance || 100,
    duration: options.duration || 1,
    ease: options.ease || "power3.out",
    delay,
    scrollTrigger: {
      trigger: options.trigger || element,
      start: options.start || "top 80%",
      ...options.scrollTrigger,
    },
  });
}

function animateFromSide(element, direction = "left", delay = 0, options = {}) {
  const xValue = direction === "left" ? -50 : 50;
  return gsap.from(element, {
    opacity: 0,
    x: xValue,
    duration: options.duration || 1,
    ease: options.ease || "power3.out",
    delay,
    scrollTrigger: {
      trigger: options.trigger || element,
      start: options.start || "top 80%",
      ...options.scrollTrigger,
    },
  });
}

function animateIcon(element, delay = 0) {
  return gsap.from(element, {
    scale: 0,
    rotation: 180,
    duration: 0.6,
    ease: "back.out(1.7)",
    delay,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
    },
  });
}

function addHoverScale(element, scale = 1.05) {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, { scale, duration: 0.3, ease: "power2.out" });
  });
  element.addEventListener("mouseleave", () => {
    gsap.to(element, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
}

function animateItems(
  selector,
  animationType = "bottom",
  delayIncrement = 0.15
) {
  const items = document.querySelectorAll(selector);
  items.forEach((item, index) => {
    if (animationType === "bottom") {
      animateFromBottom(item, index * delayIncrement);
    } else if (animationType === "side") {
      animateFromSide(item, "left", index * delayIncrement);
    }
  });
  return items;
}

// ============================================
// Header Animation
// ============================================
export function initHeaderAnimations() {
  const header = document.querySelector("#header");
  if (!header) return;

  animateFromBottom(header, 0.2, { distance: -100, scrollTrigger: null });

  let lastScroll = 0;
  ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    onUpdate: (self) => {
      const currentScroll = self.scroll();
      gsap.to(header, {
        y: currentScroll > lastScroll && currentScroll > 100 ? -100 : 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
      lastScroll = currentScroll;
    },
  });
}

// ============================================
// Hero Animation
// ============================================
export function initHeroAnimations() {
  gsap.to(".hero-blur-1", {
    x: 100,
    y: 100,
    scale: 1.2,
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: "none",
  });
  gsap.to(".hero-blur-2", {
    x: -100,
    y: 100,
    scale: 1.2,
    duration: 25,
    repeat: -1,
    yoyo: true,
    ease: "none",
  });

  const heroTitle = document.querySelector("#heroTitle");
  const heroAgency = document.querySelector("#heroAgency");
  const heroSpiral = document.querySelector(".hero-spiral img");
  const heroDescription = document.querySelector(".hero-description");
  const heroButton = document.querySelector(".hero-button");
  const changingText = document.querySelector(".hero-changing-text");

  if (heroTitle) animateFromBottom(heroTitle, 0.3, { scrollTrigger: null });
  if (heroAgency)
    animateFromSide(heroAgency, "right", 0.5, { scrollTrigger: null });
  if (heroDescription)
    animateFromBottom(heroDescription, 0.7, {
      distance: 50,
      scrollTrigger: null,
    });
  if (heroButton)
    animateFromBottom(heroButton, 0.9, { distance: 30, scrollTrigger: null });

  if (heroSpiral) {
    gsap.to(heroSpiral, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }

  if (changingText) {
    gsap.to(changingText, {
      color: "#9CFE4F",
      scrollTrigger: {
        trigger: ".hero-content",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }
}

// ============================================
// Contact Page Animations
// ============================================
export function initContactPageAnimations() {
  const pageTitle = document.querySelector("section:first-of-type h1");
  const breadcrumb = document.querySelector("section:first-of-type nav");
  const pageDescription = document.querySelector(
    "section:first-of-type .max-w-2xl p"
  );

  if (breadcrumb) {
    gsap.from(breadcrumb, {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.1,
    });
  }

  if (pageTitle) {
    gsap.from(pageTitle, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3,
    });
  }

  if (pageDescription) {
    gsap.from(pageDescription, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      delay: 0.6,
    });
  }

  const blurShapes = document.querySelectorAll(
    "section:first-of-type .absolute"
  );
  blurShapes.forEach((shape, index) => {
    gsap.to(shape, {
      x: index === 0 ? 50 : -50,
      y: 50,
      scale: 1.1,
      duration: 15 + index * 5,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  });

  const contactSection = document.querySelector("section:nth-of-type(2)");
  if (!contactSection) return;

  const formColumn = contactSection.querySelector(".w-full.lg\\:w-7\\/12");
  if (formColumn) {
    const badge = formColumn.querySelector("span");
    const title = formColumn.querySelector("h2");
    const description = formColumn.querySelector("p");
    const formInputs = formColumn.querySelectorAll("input, textarea");
    const submitButton = formColumn.querySelector("button");

    if (badge) {
      gsap.from(badge, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: badge, start: "top 80%" },
      });
    }

    if (title) {
      gsap.from(title, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: { trigger: title, start: "top 80%" },
      });
    }

    if (description) {
      gsap.from(description, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: { trigger: description, start: "top 80%" },
      });
    }

    formInputs.forEach((input, index) => {
      gsap.from(input, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.6 + index * 0.1,
        scrollTrigger: { trigger: input, start: "top 85%" },
      });

      input.addEventListener("focus", () => {
        gsap.to(input, { scale: 1.02, duration: 0.3, ease: "power2.out" });
      });

      input.addEventListener("blur", () => {
        gsap.to(input, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    if (submitButton) {
      gsap.from(submitButton, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.6 + formInputs.length * 0.1,
        scrollTrigger: { trigger: submitButton, start: "top 85%" },
      });

      addHoverScale(submitButton, 1.02);
    }
  }

  const infoColumn = contactSection.querySelector(".w-full.lg\\:w-5\\/12");
  if (infoColumn) {
    const infoWrapper = infoColumn.querySelector(".contact-info-wrapper");
    const infoItems = infoColumn.querySelectorAll("li");

    if (infoWrapper) {
      gsap.from(infoWrapper, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: infoWrapper, start: "top 80%" },
      });
    }

    infoItems.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3 + index * 0.15,
        scrollTrigger: { trigger: item, start: "top 85%" },
      });

      const socialIcons = item.querySelectorAll(".flex.gap-3 a");
      socialIcons.forEach((icon, iconIndex) => {
        gsap.from(icon, {
          opacity: 0,
          scale: 0,
          rotation: 180,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: 0.5 + index * 0.15 + iconIndex * 0.1,
          scrollTrigger: { trigger: icon, start: "top 85%" },
        });

        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    });

    const mapShape = infoWrapper?.querySelector("img[alt='shape']");
    if (mapShape) {
      gsap.to(mapShape, {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
    }
  }

  const mapSection = document.querySelector(".agenko-map");
  const mapIframe = mapSection?.querySelector("iframe");
  if (mapIframe) {
    gsap.from(mapIframe, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: mapSection, start: "top 80%" },
    });
  }
}

// ============================================
// Projects Page Animations
// ============================================
export function initProjectsPageAnimations() {
  const pageTitle = document.querySelector("section:first-of-type h1");
  const textBox = document.querySelector("section:first-of-type .text-box");
  const breadcrumb = document.querySelector("section:first-of-type nav");
  const circleShape = document.querySelector(
    "section:first-of-type .circle-box img"
  );
  const rotatingIcon = document.querySelector(
    "section:first-of-type .text-box img"
  );

  if (pageTitle) {
    gsap.from(pageTitle, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    });
  }

  if (textBox) {
    gsap.from(textBox, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power2.out",
      delay: 0.4,
    });
  }

  if (breadcrumb) {
    gsap.from(breadcrumb, {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.6,
    });
  }

  if (circleShape) {
    gsap.to(circleShape, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }

  if (rotatingIcon) {
    gsap.to(rotatingIcon, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }

  const blurShapes = document.querySelectorAll(
    "section:first-of-type .absolute.top-0"
  );
  blurShapes.forEach((shape, index) => {
    gsap.to(shape, {
      x: index === 0 ? 50 : -50,
      y: 50,
      scale: 1.1,
      duration: 15 + index * 5,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  });

  const projectsSection = document.querySelector("section:nth-of-type(2)");
  if (!projectsSection) return;

  const projectItems = projectsSection.querySelectorAll(".project-itempage");
  projectItems.forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      delay: 0.1 + index * 0.1,
      scrollTrigger: { trigger: item, start: "top 85%" },
    });

    const image = item.querySelector("img");
    if (image) addHoverScale(image, 1.1);

    const hoverContent = item.querySelector(
      ".absolute.bottom-8, .absolute.bottom-6"
    );
    if (hoverContent) {
      const categoryBadge = hoverContent.querySelector("a");
      const title = hoverContent.querySelector("h4");

      item.addEventListener("mouseenter", () => {
        if (categoryBadge) {
          gsap.from(categoryBadge, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: "power2.out",
          });
        }
        if (title) {
          gsap.from(title, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            delay: 0.1,
            ease: "power2.out",
          });
        }
      });
    }

    gsap.to(item, {
      y: -5,
      duration: 2 + index * 0.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  });

  const categoryBadges = projectsSection.querySelectorAll("a[href='#']");
  categoryBadges.forEach((badge) => {
    addHoverScale(badge, 1.05);
  });
}

// ============================================
// Services Page Animations
// ============================================
export function initServicesPageAnimations() {
  const pageTitle = document.querySelector("section:first-of-type h1");
  const textBox = document.querySelector(
    "section:first-of-type .flex.items-center"
  );
  const breadcrumb = document.querySelector(
    "section:first-of-type .breadcrumb"
  );
  const circleShape = document.querySelector(
    "section:first-of-type .float-right img"
  );

  if (pageTitle) {
    gsap.from(pageTitle, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });
  }

  if (textBox) {
    gsap.from(textBox, {
      opacity: 0,
      x: -30,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.4,
    });
  }

  if (breadcrumb) {
    gsap.from(breadcrumb, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 0.6,
    });
  }

  if (circleShape) {
    gsap.to(circleShape, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }

  const whySection = document.querySelector("section:nth-of-type(2)");
  if (whySection) {
    const badge = whySection.querySelector("span");
    const title = whySection.querySelector("h2");
    const description = whySection.querySelector("p");
    const skills = whySection.querySelectorAll(".skill-item");
    const image = whySection.querySelector("img");

    if (badge) animateFromSide(badge, "left", 0);
    if (title) animateFromBottom(title, 0.2);
    if (description) animateFromBottom(description, 0.4);

    skills.forEach((skill, index) => {
      gsap.from(skill, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.6 + index * 0.15,
        scrollTrigger: { trigger: skill, start: "top 85%" },
      });

      const progressBar = skill.querySelector(".bg-primary");
      if (progressBar) {
        gsap.from(progressBar, {
          width: 0,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.8 + index * 0.15,
          scrollTrigger: { trigger: skill, start: "top 85%" },
        });
      }
    });

    if (image) {
      gsap.from(image, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: image, start: "top 80%" },
      });
    }
  }

  const servicesSection = document.querySelector("section:nth-of-type(3)");
  if (servicesSection) {
    const sectionTitle = servicesSection.querySelector("h2");
    const badge = servicesSection.querySelector("span");
    const serviceCards = servicesSection.querySelectorAll(".space-y-6 > div");

    if (badge) animateFromSide(badge, "left", 0);
    if (sectionTitle) animateFromBottom(sectionTitle, 0.2);

    serviceCards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4 + index * 0.1,
        scrollTrigger: { trigger: card, start: "top 85%" },
      });

      const image = card.querySelector("img");
      if (image) {
        gsap.from(image, {
          scale: 0.8,
          duration: 1,
          ease: "power2.out",
          delay: 0.6 + index * 0.1,
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      }
    });
  }

  const clientsSection = document.querySelector("section:nth-of-type(4)");
  if (clientsSection) {
    const sectionTitle = clientsSection.querySelector("h2");
    const badge = clientsSection.querySelector("span");
    const clientItems = clientsSection.querySelectorAll(".rounded-full");

    if (badge) animateFromSide(badge, "left", 0);
    if (sectionTitle) animateFromBottom(sectionTitle, 0.2);

    clientItems.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        scale: 0.6,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 0.4 + index * 0.1,
        scrollTrigger: { trigger: item, start: "top 90%" },
      });
    });
  }

  const blogSection = document.querySelector("section:nth-of-type(5)");
  if (blogSection) {
    const badge = blogSection.querySelector("span");
    const title = blogSection.querySelector("h2");
    const description = blogSection.querySelector("p");
    const blogItems = blogSection.querySelectorAll(".grid > div");

    if (badge) animateFromSide(badge, "left", 0);
    if (title) animateFromBottom(title, 0.2);
    if (description) animateFromSide(description, "right", 0.4);

    blogItems.forEach((item, index) => {
      const image = item.querySelector("img");
      const content = item.querySelector(".flex");

      if (image) {
        gsap.from(image, {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.6 + index * 0.2,
          scrollTrigger: { trigger: item, start: "top 85%" },
        });
      }

      if (content) {
        gsap.from(content, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.8 + index * 0.2,
          scrollTrigger: { trigger: item, start: "top 85%" },
        });
      }

      addHoverScale(item, 1.02);
    });
  }
}

// ============================================
// About Page Animations
// ============================================
export function initAboutPageAnimations() {
  const pageTitle = document.querySelector("section:first-of-type h1");
  const breadcrumb = document.querySelector("nav ul");
  const pageDescription = document.querySelector(
    "section:first-of-type .max-w-2xl p"
  );

  if (pageTitle) {
    gsap.from(pageTitle, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3,
    });
  }

  if (breadcrumb) {
    gsap.from(breadcrumb, {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.1,
    });
  }

  if (pageDescription) {
    gsap.from(pageDescription, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      delay: 0.6,
    });
  }

  const introSection = document.querySelector("section:nth-of-type(2)");
  if (introSection) {
    const badge = introSection.querySelector("span:first-child");
    const title = introSection.querySelector("h2");
    const paragraphs = introSection.querySelectorAll("p");
    const stats = introSection.querySelectorAll(".grid > div");
    const image = introSection.querySelector("img");
    const floatingElement = introSection.querySelector(".absolute.-bottom-8");

    if (badge) animateFromSide(badge, "left", 0);
    if (title) animateFromBottom(title, 0.2);

    paragraphs.forEach((p, index) => {
      animateFromBottom(p, 0.4 + index * 0.1);
    });

    stats.forEach((stat, index) => {
      gsap.from(stat, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.8 + index * 0.1,
        scrollTrigger: { trigger: stat, start: "top 85%" },
      });
    });

    if (image) {
      gsap.from(image, {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: image, start: "top 80%" },
      });
    }

    if (floatingElement) {
      gsap.from(floatingElement, {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 1.2,
        scrollTrigger: { trigger: floatingElement, start: "top 80%" },
      });

      gsap.to(floatingElement, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }

  const missionVisionSection = document.querySelector("section:nth-of-type(3)");
  if (missionVisionSection) {
    const sectionTitle = missionVisionSection.querySelector("h2");
    const badge = missionVisionSection.querySelector("span");
    const missionVisionBoxes =
      missionVisionSection.querySelectorAll(".grid > div");

    if (badge) animateFromSide(badge, "left", 0);
    if (sectionTitle) animateFromBottom(sectionTitle, 0.2);

    missionVisionBoxes.forEach((box, index) => {
      gsap.from(box, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
        delay: 0.4 + index * 0.2,
        scrollTrigger: { trigger: box, start: "top 80%" },
      });

      const icon = box.querySelector(".fas");
      if (icon) animateIcon(icon, 0.6 + index * 0.2);
    });
  }

  const valuesSection = document.querySelector("section:nth-of-type(4)");
  if (valuesSection) {
    const sectionTitle = valuesSection.querySelector("h2");
    const badge = valuesSection.querySelector("span");
    const valueItems = valuesSection.querySelectorAll(".grid > div");

    if (badge) animateFromSide(badge, "left", 0);
    if (sectionTitle) animateFromBottom(sectionTitle, 0.2);

    valueItems.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 80,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4 + index * 0.1,
        scrollTrigger: { trigger: item, start: "top 85%" },
      });

      const icon = item.querySelector(".fas");
      const iconContainer = item.querySelector(".w-20");

      if (icon) animateIcon(icon, 0.6 + index * 0.1);

      if (iconContainer) {
        gsap.to(iconContainer, {
          y: -5,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2,
        });
      }
    });
  }

  const teamSection = document.querySelector("section:nth-of-type(5)");
  if (teamSection) {
    const sectionTitle = teamSection.querySelector("h2");
    const badge = teamSection.querySelector("span");
    const teamMembers = teamSection.querySelectorAll(".grid > div");
    const ctaButton = teamSection.querySelector('a[href="team.html"]');

    if (badge) animateFromSide(badge, "left", 0);
    if (sectionTitle) animateFromBottom(sectionTitle, 0.2);

    teamMembers.forEach((member, index) => {
      const memberImage = member.querySelector("img");
      const memberInfo = member.querySelector(".text-center");

      if (memberImage) {
        gsap.from(memberImage, {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: "power2.out",
          delay: 0.4 + index * 0.15,
          scrollTrigger: { trigger: member, start: "top 80%" },
        });
      }

      if (memberInfo) {
        gsap.from(memberInfo, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.6 + index * 0.15,
          scrollTrigger: { trigger: member, start: "top 80%" },
        });
      }

      if (memberImage) addHoverScale(memberImage.parentElement, 1.05);
    });

    if (ctaButton) animateFromBottom(ctaButton, 0.8);
  }

  const whyChooseSection = document.querySelector("section:nth-of-type(6)");
  if (whyChooseSection) {
    const badge = whyChooseSection.querySelector("span");
    const title = whyChooseSection.querySelector("h2");
    const features = whyChooseSection.querySelectorAll(".space-y-6 > div");
    const statsBoxes = whyChooseSection.querySelectorAll(".grid > div");

    if (badge) animateFromSide(badge, "left", 0);
    if (title) animateFromBottom(title, 0.2);

    features.forEach((feature, index) => {
      const icon = feature.querySelector(".fas");
      const content = feature.querySelector("div:last-child");

      if (icon) animateIcon(icon, 0.4 + index * 0.1);

      if (content) {
        gsap.from(content, {
          opacity: 0,
          x: 30,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.5 + index * 0.1,
          scrollTrigger: { trigger: feature, start: "top 85%" },
        });
      }
    });

    statsBoxes.forEach((box, index) => {
      gsap.from(box, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.6 + index * 0.1,
        scrollTrigger: { trigger: box, start: "top 85%" },
      });
    });
  }

  const ctaSection = document.querySelector("section:last-of-type");
  if (ctaSection) {
    const title = ctaSection.querySelector("h2");
    const description = ctaSection.querySelector("p");
    const buttons = ctaSection.querySelectorAll(".flex > a");

    if (title) {
      gsap.from(title, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: title, start: "top 80%" },
      });
    }

    if (description) {
      gsap.from(description, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: { trigger: description, start: "top 80%" },
      });
    }

    buttons.forEach((button, index) => {
      gsap.from(button, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5 + index * 0.1,
        scrollTrigger: { trigger: button, start: "top 85%" },
      });

      addHoverScale(button, 1.05);
    });
  }
}

// ============================================
// Home Page Animations
// ============================================

export function initVideoAnimations() {
  const videoSection = document.querySelector(".video-section");
  const videoImage = document.querySelector(".video-section img");
  const playButton = document.querySelector(".video-popup");
  const playIcon = playButton?.querySelector("i");

  if (!videoSection || !videoImage || !playButton) return;

  animateFromBottom(videoSection, 0, {
    duration: 1.2,
    scrollTrigger: { end: "top 50%", toggleActions: "play none none reverse" },
  });

  gsap.to(videoImage, {
    scale: 1.2,
    scrollTrigger: {
      trigger: videoSection,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.to(playButton, {
    scale: 1.1,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  if (playIcon) {
    playButton.addEventListener("mouseenter", () => {
      gsap.to(playIcon, { rotation: 90, duration: 0.3, ease: "power2.out" });
    });
    playButton.addEventListener("mouseleave", () => {
      gsap.to(playIcon, { rotation: 0, duration: 0.3, ease: "power2.out" });
    });
  }
}

export function initServicesAnimations() {
  const servicesSection = document.querySelector(".services-section");
  if (!servicesSection) return;

  const sectionTitle = servicesSection.querySelector(".section-title");
  const textBox = servicesSection.querySelector(".text-box");

  if (sectionTitle) {
    animateFromSide(sectionTitle.querySelector("span"), "left");
    animateFromBottom(sectionTitle.querySelector("h2"), 0.2);
  }
  if (textBox) animateFromSide(textBox, "right", 0.4);

  const serviceBoxes = animateItems(".services-section .group", "bottom", 0.2);

  serviceBoxes.forEach((box, index) => {
    const icon = box.querySelector(".icon");
    if (icon) {
      animateIcon(icon, 0.8 + index * 0.2);
      gsap.to(icon, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    const link = box.querySelector("a");
    if (link) {
      box.addEventListener("mouseenter", () => {
        gsap.to(link, { x: 5, duration: 0.3 });
      });
      box.addEventListener("mouseleave", () => {
        gsap.to(link, { x: 0, duration: 0.3 });
      });
    }

    addHoverScale(box);
  });
}

export function initProjectsAnimations() {
  const projectsSection = document.querySelector(".projects-section");
  if (!projectsSection) return;

  animateFromBottom(projectsSection.querySelector(".text-center"), 0);

  const projectItems = animateItems(
    ".projects-section .project-itempage",
    "bottom",
    0.2
  );
  projectItems.forEach((item) => {
    const img = item.querySelector("img");
    if (img) addHoverScale(img, 1.1);
  });
}

export function initProcessAnimations() {
  const processSection = document.querySelector(".process-section");
  if (!processSection) return;

  gsap.from(processSection.querySelector(".text-center"), {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: { trigger: processSection, start: "top 80%" },
  });

  const processBoxes = animateItems(
    ".process-section .process-box",
    "bottom",
    0.15
  );
  processBoxes.forEach((box, index) => {
    const icon = box.querySelector(".icon");
    if (icon) animateIcon(icon, 0.3 + index * 0.15);
  });
}

export function initCompanyAnimations() {
  const companySection = document.querySelector(".company-section");
  if (!companySection) return;

  animateFromSide(
    companySection.querySelector(".text-center, .lg\\:text-left"),
    "left"
  );

  const clientItems = document.querySelectorAll(
    ".company-section .client-item"
  );
  clientItems.forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: index * 0.1,
      scrollTrigger: { trigger: item, start: "top 90%" },
    });
  });
}

export function initTeamAnimations() {
  const teamSection = document.querySelector(".team-section");
  if (!teamSection) return;

  animateFromBottom(teamSection.querySelector(".flex-wrap"), 0);

  const teamItems = animateItems(".team-section .team-item", "bottom", 0.15);
  teamItems.forEach((item) => {
    const img = item.querySelector("img");
    if (img) addHoverScale(img);
  });
}

export function initAwardsAnimations() {
  const awardsSection = document.querySelector(".awards-section");
  if (!awardsSection) return;

  animateFromBottom(awardsSection.querySelector(".flex-wrap"), 0);
  animateFromSide(awardsSection.querySelector(".rounded-2xl"), "left");
  animateItems(".awards-section .award-item", "side", 0.1);
}

export function initTestimonialAnimations() {
  const testimonialSection = document.querySelector(".testimonial-section");
  if (!testimonialSection) return;

  animateFromBottom(testimonialSection.querySelector(".text-center"), 0);

  gsap.from(testimonialSection.querySelector(".rounded-2xl"), {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: { trigger: testimonialSection, start: "top 70%" },
  });

  animateFromSide(
    testimonialSection.querySelector(".testimonial-item"),
    "right"
  );
}

export function initBlogAnimations() {
  const blogSection = document.querySelector(".blog-section");
  if (!blogSection) return;

  animateFromBottom(blogSection.querySelector(".flex-wrap"), 0);
  animateItems(".blog-section .blog-item", "bottom", 0.2);
}

export function initFooterAnimations() {
  const footer = document.querySelector("footer");
  if (!footer) return;

  animateFromBottom(footer, 0);

  const shapes = document.querySelectorAll('footer img[alt="Shape"]');
  shapes.forEach((shape) => {
    gsap.to(shape, { rotation: 360, duration: 10, repeat: -1, ease: "none" });
  });

  const primaryBlur = footer.querySelector(".bg-primary");
  const purpleBlur = footer.querySelector(".bg-purple-400");

  if (primaryBlur) {
    gsap.from(primaryBlur, {
      scale: 0,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: footer, start: "top 80%" },
    });
  }

  if (purpleBlur) {
    gsap.from(purpleBlur, {
      scale: 0,
      opacity: 0,
      duration: 2,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: { trigger: footer, start: "top 80%" },
    });
  }
}

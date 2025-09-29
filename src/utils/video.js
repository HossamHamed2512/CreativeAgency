// ============================================
// Video Popup Functionality - Enhanced for all pages
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("videoModal");
  const videoIframe = document.getElementById("videoIframe");
  const closeBtn = document.getElementById("closeVideoBtn");

  if (!modal || !videoIframe) return;

  // Open video popup
  document.querySelectorAll(".video-popup").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const videoUrl = this.getAttribute("href");
      if (videoUrl && videoUrl.includes("youtube.com")) {
        const videoId = videoUrl.split("v=")[1]?.split("&")[0];
        if (videoId) {
          const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
          videoIframe.src = embedUrl;
          modal.classList.remove("hidden");
        }
      }
    });
  });

  // Close video function
  function closeVideo() {
    modal.classList.add("hidden");
    videoIframe.src = "";
  }

  // Close button click
  if (closeBtn) {
    closeBtn.addEventListener("click", closeVideo);
  }

  // Close when clicking outside the video container
  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      closeVideo();
    }
  });

  // Close with ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeVideo();
    }
  });

  // Handle browser back/forward buttons
  window.addEventListener("popstate", function () {
    if (!modal.classList.contains("hidden")) {
      closeVideo();
    }
  });
});

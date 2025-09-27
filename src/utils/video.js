// ============================================
// Video Popup Functionality
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    const modal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');
    
    if (!modal || !videoIframe) return;
    
    // Open video popup
    document.querySelectorAll('.video-popup').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const videoUrl = this.getAttribute('href');
            const videoId = videoUrl.split('v=')[1];
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            
            videoIframe.src = embedUrl;
            modal.classList.remove('hidden');
            modal.classList.add('flex', 'items-center', 'justify-center');
        });
    });

    // Close video function
    window.closeVideo = function() {
        modal.classList.add('hidden');
        modal.classList.remove('flex', 'items-center', 'justify-center');
        videoIframe.src = '';
    }

    // Close when clicking outside the video
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeVideo();
        }
    });

    // Close with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeVideo();
        }
    });
    
});
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('banner');
    const closeBtn = document.getElementById('closeBannerBtn');

    // Function to check if today is Monday, Tuesday, or Wednesday
    function shouldShowBanner() {
        const today = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
        return today >= 1 && today <= 3; // Monday (1), Tuesday (2), Wednesday (3)
    }

    // Show the banner if today is Monday, Tuesday, or Wednesday
    if (shouldShowBanner()) {
        banner.style.display = 'block';
    }

    // Close banner functionality
    closeBtn.addEventListener('click', function() {
        banner.style.display = 'none';
    });
});

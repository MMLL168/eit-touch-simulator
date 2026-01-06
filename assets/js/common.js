// Common JavaScript utilities
document.addEventListener('DOMContentLoaded', function() {
    console.log('EIT Touch Simulator loaded');
});

// Utility function for smooth scrolling
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

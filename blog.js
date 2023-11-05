// Add smooth scrolling effect to navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    for (let link of navLinks) {
        link.addEventListener("click", smoothScroll);
    }
});

function smoothScroll(event) {
    event.preventDefault();

    // Get the target section based on the href attribute
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll smoothly to the target section
    targetSection.scrollIntoView({
        behavior: "smooth"
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icons a');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.preventDefault();
            const link = this.getAttribute('href');
            window.open(link, '_blank');
        });
    });
});



const testimonials = document.querySelectorAll(".testimonial");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

testimonials.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.2}s`;

    observer.observe(card);

});
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
/* =========================
   WHATSAPP
========================= */

const whatsappNumber = "2347026295544";

function openWhatsApp(message) {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}


/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   ABOUT SCROLL ANIMATION
========================= */

const aboutSection = document.querySelector(".about");
const aboutImage = document.querySelector(".about-image");
const aboutContent = document.querySelector(".about-content");

const aboutObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                aboutImage.classList.add("show");

                setTimeout(() => {
                    aboutContent.classList.add("show");
                }, 150);

                aboutObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.2
    }
);

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}


/* =========================
   REVIEW SCROLL ANIMATION
========================= */

const reviewSection = document.querySelector(".reviews");
const reviewCards = document.querySelectorAll(".review-card");

const reviewObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                reviewCards.forEach(card => {
                    card.classList.add("show");
                });

                reviewObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.2
    }
);

if (reviewSection) {
    reviewObserver.observe(reviewSection);
}


/* =========================
   CONTACT SCROLL ANIMATION
========================= */

const contactSection = document.querySelector(".contact");

const contactObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                contactSection.classList.add("show");

                contactObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.2
    }
);

if (contactSection) {
    contactObserver.observe(contactSection);
}
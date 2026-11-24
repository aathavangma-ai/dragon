// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    setTimeout(() => {
        follower.style.left = e.clientX + "px";
        follower.style.top = e.clientY + "px";
    }, 50);

});


// CURSOR HOVER EFFECT

const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .skill"
);

hoverElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {
        follower.style.width = "60px";
        follower.style.height = "60px";
    });

    element.addEventListener("mouseleave", () => {
        follower.style.width = "35px";
        follower.style.height = "35px";
    });

});


// SCROLL REVEAL

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});
const heroBackground = document.querySelector(".hero-bg img");

document.addEventListener("mousemove", (e) => {

    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const moveX = (mouseX - 0.5) * 120;
    const moveY = (mouseY - 0.5) * 100;

    heroBackground.style.transform =
        `scale(1.12) translate(${moveX}px, ${moveY}px)`;
});
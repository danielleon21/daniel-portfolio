// Responsive hamburger menu

const hamburger = document.querySelector(".hamburger");
const bar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    bar.classList.toggle("active");
});

const navbar__link = document.querySelectorAll(".link");

navbar__link.forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        bar.classList.remove("active");
    });
});
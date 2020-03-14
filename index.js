const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const projectImg = document.querySelectorAll(".project__img");


navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    })
});

// projectImg.forEach(img => {
//     img.addEventListener("mouseenter", () => {
//         img.classList.add("imgTitle");
//     })
// });

// projectImg.forEach(img => {
//     img.addEventListener("mouseleave", () => {
//         img.classList.remove("imgTitle");
//     })
// });
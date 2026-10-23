console.log('Happy developing ✨')
const menuButton = document.getElementById('menuButton');
const navGroups = document.querySelectorAll(".nav-group");
const slides = document.getElementsByClassName('slide');
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
let current = 0;

function toggleSideBar(){
    document.body.classList.toggle("sidebar-hidden");
}
menuButton.addEventListener("click", toggleSideBar);

navGroups.forEach((group) => {
    group.querySelector(".nav-main").addEventListener("click", () => {
        navGroups.forEach((other) => other.classList.remove("open"));
        group.classList.add("open");
    });
});

function showSlide(index) {
    slides[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
}
prevButton.addEventListener("click", () => showSlide(current - 1));
nextButton.addEventListener("click", () => showSlide(current + 1));

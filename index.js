console.log('Happy developing ✨')
const menuButton = document.getElementById('menuButton');
const navGroups = document.getElementsByClassName('navGroup');
const slides = document.getElementsByClassName('slide');
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let current = 0;
function website(){
    let ls = localStorage.getItem();
}

function toggleSideBar(){
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("mainContent");
    const openButton = document.getElementById("open");
    sidebar.classList.toggle("closed");
    const isClosed = sidebar.classList.contains("closed");
    main.classList.toggle("open", isClosed);
    openButton.classList.toggle("visible", isClosed);
}

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

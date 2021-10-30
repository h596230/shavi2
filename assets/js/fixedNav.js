const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const scrollNav = () => {
    if (this.scrollY >= header.offsetHeight) {
        nav.classList.add("nav-scroll");
    } else {
        nav.classList.remove("nav-scroll");
    }
}
window.addEventListener("scroll", scrollNav);
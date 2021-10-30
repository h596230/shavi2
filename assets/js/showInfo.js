const btns = document.querySelectorAll('.medlemskap__btn');
const closeBtns = document.querySelectorAll('.medlemskap__close');
const info = document.querySelector('.medlemskap__info');
//show info
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.parentElement.nextElementSibling.classList.toggle("show");
    })
})
//close info
closeBtns.forEach((close) => {
    close.addEventListener("click", () => {
        close.parentElement.classList.toggle("show");
    })
})
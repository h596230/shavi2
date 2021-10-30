const bodEl = document.querySelector("body");
const button = document.querySelector("#burger");
const menyEl = document.querySelector(".meny");
const coverEl = document.querySelector(".cover");
const textEl = document.querySelector(".meny-text");

const isMobile = false;

button.addEventListener("click", meny);
coverEl.addEventListener("click",hide);

function meny(){
    if(window.innerWidth > window.innerHeight){
        menyEl.style.width="20vw";
    } else {
        menyEl.style.width="100%";
    }
    
    coverEl.style.display="block";
    textEl.style.display="block";
}
function hide(){
    menyEl.style.width="0vw";
    coverEl.style.display="none";
    textEl.style.display="none";
}

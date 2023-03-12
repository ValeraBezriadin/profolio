const menuBtn = document.querySelector(".nav__button")
const menuList = document.querySelector(".nav__list")


menuBtn.addEventListener("click", ()=>{
    menuList.classList.toggle("nav__active")
    menuBtn.classList.toggle("nav__button-active");
})


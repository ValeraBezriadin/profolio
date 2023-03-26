const menuBtn = document.querySelector(".nav__button")
const menuList = document.querySelector(".nav__list")
const menuItem = document.querySelectorAll(".nav__item")

menuBtn.addEventListener("click", ()=>{
    menuList.classList.toggle("nav__active")
    menuBtn.classList.toggle("nav__button-active");
})

menuItem.forEach((item )=>{
    item.addEventListener("click",()=>{
        menuList.classList.remove("nav__active")
    menuBtn.classList.remove("nav__button-active");
    })
})


const $ = document.querySelector.bind(document);
const $$= document.querySelectorAll.bind(document);


//ACCORDION SHOW
const accordionItems= $$(".contact__accordion-item");
[...accordionItems].forEach(item => item.addEventListener("click", (e) =>{
    const accordionContent = e.target.querySelector(".contact__accordion-item-content");
    accordionContent.classList.toggle("show");
}))



//HEADER BACKGROUND
const header= $(".header");
const toTop = $(".totop");
window.addEventListener("scroll", (e) =>{
    let y = window.scrollY;
    if(y > 100){
        header.classList.add("header-show");
        toTop.classList.add("totop-show")
    } else{
        toTop.classList.remove("totop-show")
        header.classList.remove("header-show");
    }
})

//click totop function
toTop.addEventListener("click", (e) => {
    if(e.target) window.scrollTo(0, 0);
})


//CLICK FAVORITE
// const detailFavorite = $(".detail__favorite");
// console.log(detailFavorite)

// detailFavorite.addEventListener("click", (e) => {
//     const icon = $(".detail__favorite-icon");
//     icon.classList.toggle("favorite-show");
// })

//CLICK SHOW NAVBAR SIDE RESPONSIVE
const listWrapper = $(".header__list-wrapper");
const navbarIcon = $(".header__navbar-icon");
navbarIcon.addEventListener("click", (e) => {
    listWrapper.classList.toggle("active");
    navbarIcon.style.opacity = "0";
    e.stopPropagation();
    window.addEventListener("click", (e)=>{
        
        if(listWrapper.matches(".active") ) {
    navbarIcon.style.opacity = "1";

            listWrapper.classList.toggle("active");

        };
    })
})


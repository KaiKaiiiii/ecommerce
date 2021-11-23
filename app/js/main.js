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
const detailFavorite = $(".detail__favorite");

detailFavorite.addEventListener("click", (e) => {
    const icon = $(".detail__favorite-icon");
    icon.classList.toggle("favorite-show");
})
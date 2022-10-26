//accordian
const accordBtn=document.querySelectorAll(".accordian-btn")
accordBtn.forEach((btn)=>{
btn.addEventListener("click",function(e)
{
    const body=e.target.parentElement.parentElement.children[1]
    body.classList.toggle("show-accordian-body")
})
})
//
//reviews
const cardsContainer=document.querySelector(".review-container");
const cards=document.querySelector(".main__section-reviews");
let pressed=false
let cursorX;
if(window.innerWidth>900)
{
    cardsContainer.addEventListener("mousedown",(e)=>
{
    pressed=true
cursorX=e.offsetX-cards.offsetLeft;
})
cardsContainer.addEventListener("mouseup",(e)=>
{
    pressed=false
    cardsContainer.style.cursor="grab"
})
cardsContainer.addEventListener("mousemove",(e)=>
{
    if(!pressed)return;
    e.preventDefault()
cards.style.left=`${e.offsetX-cursorX}px`
cardsContainer.style.cursor="grabbing"
boundCards()
})
function boundCards()
{
    const container_rect=cardsContainer.getBoundingClientRect()
    const cards_rect=cards.getBoundingClientRect()
    if(parseInt(cards.style.left)>0)
    {
        cards.style.left=0;
    }
    else if(cards_rect.right<container_rect.right)
    {
        cards.style.left=`-${cards_rect.width -container_rect.width}px`
    }
}
}
//
//slider
const slides=document.querySelectorAll(".slide")
let count=0,classOne="visible",classTwo="hide";
setInterval(()=>{
    changeSlides(slides)
},10000)
function changeSlides(array)
{
    if(count<array.length)
    {
        if(count==array.length-1)
        {changeClass(array,count,classOne,classTwo)
            count=0
            changeClass(array,count,classTwo,classOne)
        }
        else{
               changeClass(array,count,classOne,classTwo)
        count++
        changeClass(array,count,classTwo,classOne)
        }
}
}
function changeClass(elementArray,index,classNameOne,classNameTwo)
{
elementArray[index].classList.replace(classNameOne,classNameTwo)
}
//
//cart
const closeCart=document.querySelector(".close-btn")
const openCart=document.querySelector(".show-cart")
const modal=document.querySelector(".modal")
const body=document.querySelector("body")
openCart.addEventListener("click",()=>{
    modal.classList.add("show-cart")
    body.style.overflowY="hidden"
})
closeCart.addEventListener("click",()=>{
    modal.classList.remove("show-cart")
    body.style.overflowY="auto"
})
//
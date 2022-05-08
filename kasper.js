

const listOfLinks = document.querySelector("ul.links-list");

const toggleMenu = document.querySelector(".toggle-menu")

toggleMenu.addEventListener("click",(e)=>{
    if(listOfLinks.classList.contains("responsive-list")){
        listOfLinks.classList.remove("responsive-list")
    }else{
        listOfLinks.classList.add("responsive-list")
    }
})


/* Fixed Header*/
const header = document.querySelector("header")
window.addEventListener("scroll",(e)=>{
    if(window.scrollY > 0){
        header.classList.add("fixed")
    }else{
        header.classList.remove("fixed")
    }
})

/*Active links */

const links = document.querySelectorAll("nav ul a");
const sections = document.querySelectorAll("section");

links.forEach(function(link){
    link.addEventListener("click",(e)=>{
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active")
    })
})

window.addEventListener("scroll",(e)=>{
    sections.forEach((section)=>{
        const secTop = section.getBoundingClientRect().top;
        const link = document.querySelector(`a[href="#${section.id}"]`)
        const headerHeight = header.getBoundingClientRect().height
        if(secTop - headerHeight <= 0){
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active")
        }
    })
})


/****************************The Slider**********************************/

//// Bullets Slider
const bullets = document.querySelectorAll(".bullets li")
const slides = document.querySelectorAll(".slider-imgs .slide")

bullets.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        bullets.forEach(li => li.classList.remove("active-bullet"))
        li.classList.add("active-bullet");

        let id = li.dataset.img;
        let activeSlide = document.querySelector(`#${id}`)

        slides.forEach(slide => slide.classList.remove("active-slide"))
        
        activeSlide.classList.add("active-slide")
    })
})

//// Arrows Slider


const arrows = document.querySelectorAll(".change-arrow")
const ulSlides = document.querySelector(".slider-imgs")


arrows.forEach((arrow)=>{
    arrow.addEventListener("click",(e)=>{
        const currentActive = document.querySelector(".active-slide")
        const offset = arrow.classList.contains("next-arrow") ? 1 : -1;

        // Cuurent active slide index + offset = next active slide index
        
        let nextActiveSlide = [...ulSlides.children].indexOf(currentActive) + offset;

        if(nextActiveSlide < 0) nextActiveSlide = slides.length - 1;
        if(nextActiveSlide >= slides.length ) nextActiveSlide = 0;

        // remove active class from all lis first 
        slides.forEach(slide => slide.classList.remove("active-slide"));

        // add active class
        slides[nextActiveSlide].classList.add("active-slide")
    })
})



/*Testing  */
let gallarey = document.querySelector(".gallarey")

let arrayOfImgs = [

    {
        img:"images/shuffle-01.jpg",
        title:"print",
    },
    {
        img:"images/shuffle-02.jpg",
        title:"print",
    },
    {
        img:"images/shuffle-03.jpg",
        title:"photo",
    },
    {
        img:"images/shuffle-04.jpg",
        title:"print",
    },
    {
        img:"images/shuffle-05.jpg",
        title:"photo",
    },
    {
        img:"images/shuffle-06.jpg",
        title:"photo",
    },
    {
        img:"images/shuffle-07.jpg",
        title:"modern",
    },
    {
        img:"images/shuffle-08.jpg",
        title:"modern",
    },
]


function drawGallarey(array){
    let mapOnArray = array.map(function(img){
        return `
        <div class="box">
        <img src="${img.img}" alt="">
        <div class="caption">
            <p>Awosome Image</p>
            <p>Photography</p>
        </div>
        </div>
        `
    }) 

    gallarey.innerHTML = mapOnArray.join("")
}

drawGallarey(arrayOfImgs)


/*Filtering */

const filterBtns = document.querySelectorAll(".btns-list button")


filterBtns.forEach(function(btn){
    btn.addEventListener("click",(e)=>{
        let title = btn.dataset.filter;
        filterBtns.forEach(btn => btn.classList.remove("active-btn"))
        btn.classList.add("active-btn")
        filterByTitle(title)
    })
})


function filterByTitle(title){
    // console.log(title);
    if(title === "all"){
        drawGallarey(arrayOfImgs)
    }else{
        let filterArray = arrayOfImgs.filter(function(img){
            return img.title === title
        })
        console.log(filterArray);
        drawGallarey(filterArray)
    }
}

/******************Testiemonials****************/


const testimon_Bullets = document.querySelectorAll(".testimon-bullets li");
const testimon_Divs = document.querySelectorAll(".testimon-info > div");


testimon_Bullets.forEach(function(li){
    li.addEventListener("click",(e)=>{
        testimon_Bullets.forEach( li => li.classList.remove("active-testi-bullets"))
        li.classList.add("active-testi-bullets")
        let id = li.dataset.testiemon;  
        // console.log(id);
        
        let activeElement = document.querySelector(`#${id}`)
        console.log(activeElement);
        
        testimon_Divs.forEach( div => div.classList.remove("active-testimon"))
        activeElement.classList.add("active-testimon");
    })
})

/*date in footer */

const date = document.querySelector(".date");
const d = new Date().getFullYear()

date.innerHTML = d
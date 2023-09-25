var typed = new Typed(".type",{
    strings:["","Graphics Designer", "UI/UX Desiger", "Mob App Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})

const nav_links = document.querySelectorAll(".nav_links li a");
nav_links.forEach(nav_linkEl => {
    nav_linkEl.addEventListener('click', () =>{
        document.querySelector('.active')?.classList.remove('active');
        nav_linkEl.classList.add('active');
    })
})

const lastScroll = 20,
navBar = document.querySelector(".topNav");
const section = document.querySelectorAll('section');
window.addEventListener('scroll', function () {
    
    if (window.pageYOffset > 150) {
        navBar.classList.add("sticky")
    }else{
        navBar.classList.remove("sticky");
    }
    
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >=offset && top < offset+height) {
            nav_links.forEach(links =>{
                links.classList?.remove('active');
                document.querySelector('.nav .nav_links li a[href*='+id+']').classList.add('active')
            })
        }
    })
    

    
})

const titleContainer = document.querySelector(".title"),
    titleBtns = titleContainer.children,
    titleLeng = titleBtns.length,
    portfolioItem =document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItem.length;
    

    for (let i = 0; i < titleLeng; i++) {
        titleBtns[i].addEventListener("click", function () {
            titleContainer.querySelector('.btn_active').classList.remove('btn_active')
            this.classList.add('btn_active');
            const filterValue = this.getAttribute("data-filter");
            console.log(filterValue)
             for (let k = 0; k < totalPortfolioItem; k++) {
                 if (filterValue == portfolioItem[k].getAttribute("data-categories")) {
                     portfolioItem[k].classList.remove("hide")
                     portfolioItem[k].classList.add("show")
                 }else{
                     portfolioItem[k].classList.remove("show")
                     portfolioItem[k].classList.add("hide")
                 }
                 if (filterValue === "all") {
                    portfolioItem[k].classList.remove("hide")
                    portfolioItem[k].classList.add("show")
                 }
                
            }
        })
        
    }
    

    // view box
    const imgView = document.querySelector(".view_box_img"),
        textView = document.querySelector(".textcaption"),
        counterView = document.querySelector(".countercaption");
        let itemIndex = 0;
 for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItem[i].addEventListener('click', function () {
        itemIndex=i;
        changeItem()
        toggleView()
    })
    function toggleView() {
        openView.classList.toggle("open")
    }
    function changeItem() {
        imgSrc = portfolioItem[itemIndex].querySelector('.port_inner img').getAttribute('src');
        imgView.src=imgSrc;
        textView.innerHTML=portfolioItem[itemIndex].querySelector("h4").innerHTML;
        counterView.innerHTML=(itemIndex+1)+" / "+totalPortfolioItem;
    }
    
 }
//  Next Item
function nextItem() {
    if (itemIndex==totalPortfolioItem-1) {
        itemIndex=0;
    }else{
        itemIndex++;
    }
    changeItem()
}
//  Previous Item
function prevItem() {
    if (itemIndex==0) {
        itemIndex=totalPortfolioItem-1;
    }else{
        itemIndex--;
    }
    changeItem()
}

const closebtn = document.querySelector(".view_box_close"),
    openView = document.querySelector(".view_box")
  
    openView.addEventListener('click', function (e) {
        if (e.target===closebtn||e.target===openView) {
            openView.classList.remove('open')
        }
    })
        
        
// scrollUp
const mybutton =document.querySelector(".scrollup")
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// scroll Reveal
function revealFunction() {
    window.sr =ScrollReveal({ duration:2000, distance:'500px', easing:'ease-out'})
    sr.reveal('.reveal-left', {origin:'left', reset:true});
    sr.reveal('.reveal-top', {origin:'top', reset:true});
    sr.reveal('.reveal-bottom', {origin:'bottom', reset:false});
    sr.reveal('.reveal-right', {origin:'right', reset:true});
    sr.reveal('.rotation',{ origin:'bottom', rotate:{x:1000,z:1000}, reset:true});
}
window.addEventListener('load', () =>{
    revealFunction();
})


/*  320*/
const openBar = document.querySelector(".togleIconOpen")
const closeBar = document.querySelector(".togleIconClose")
const openNav = document.querySelector(".nav")
openBar.addEventListener('click', function () {
    openNav.style.left ="0px";
    openBar.style.display="none";
    closeBar.style.display="block";
})
closeBar.addEventListener('click', function () {
    openNav.style.left ="-300px";
    openBar.style.display="block";
    closeBar.style.display="none";
})
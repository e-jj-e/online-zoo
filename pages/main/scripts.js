(function(){


const burgerMenu = document.querySelector('.burger-menu');
let clickCount = 0;
const mobileOverlay = document.querySelector('.mobile-overlay');
const navBar = document.querySelector('.nav-bar');
// const navBarList = document.querySelector('.nav-bar-list');

burgerMenu.addEventListener('click', function(){
    clickCount = (clickCount + 1) % 2;
    if(clickCount === 1){
        burgerMenu.classList.add('active');
        mobileOverlay.classList.add('active');
        mobileOverlay.style.visibility = "visible";
        navBar.classList.add('opened');
        // navBarList.classList.add('opened');
        document.body.classList.add('notScrollable');
        document.querySelector('.notScrollable').style.overflow = "hidden";
        // document.querySelector('.header-tablet-logo').style.marginLeft = "310px";
        document.querySelector('.header-tablet-logo').style.zIndex = "1";
        document.querySelector('.a').style.color = "orange";
        document.querySelector('.header-tablet-logo').style.border = "1px solid orange";
        document.querySelector('.header-tablet-logo').style.borderRadius = "2px";
        document.querySelector('.header-tablet-logo').style.padding = "3px";
        document.querySelector('.header-tablet-logo').style.width = "66px";
        document.querySelector('.header-tablet-logo').style.height = "42px";
        document.querySelector('.header-tablet-logo').style.marginTop = "12px";
        document.querySelector('.header-tablet-logo').style.fontSize = "15px";
        document.querySelector('.header-tablet-logo').style.position = "relative";
        document.querySelector('.header-tablet-logo').style.left = "52%";
        // document.querySelector('.designed-by-btn').style.top = "280px";
        // document.querySelector('.designed-by-btn').style.left = "180px";
        // document.querySelector('.designed-by-btn').style.position = "absolute";
        // document.querySelector('.designed-by-btn').style.zIndex = "1";
        // document.querySelector('.designed-by-btn').style.display = "block";
        document.querySelector('.designed-a').style.color = "gray";
        document.querySelector('.designed-a').style.visibility = "visible";


    } else {
        burgerMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        mobileOverlay.style.visibility = "hidden";
        navBar.classList.remove('opened');
        // navBarList.classList.remove('opened');
        document.querySelector('.notScrollable').removeAttribute('style');
        document.body.classList.remove('notScrollable');
        document.body.removeAttribute('class');
        document.querySelector('.header-tablet-logo').removeAttribute("style");
        document.querySelector('.a').removeAttribute("style");
        document.querySelector('.designed-a').removeAttribute('style');
        document.querySelector('.designed-a').style.visibility = "hidden";
        // document.querySelector('.designed-by-btn').removeAttribute("style");
    }
});


mobileOverlay.addEventListener('click', ()=> {
    burgerMenu.classList.remove('active');
    navBar.classList.remove('opened');
    mobileOverlay.classList.remove('active');
    mobileOverlay.style.visibility = "hidden";
    // navBarList.classList.remove('opened');
    document.querySelector('.notScrollable').removeAttribute('style');
    document.body.classList.remove('notScrollable');
    document.body.removeAttribute('class');
    document.querySelector('.header-tablet-logo').removeAttribute("style");
    document.querySelector('.a').removeAttribute("style");
    document.querySelector('.designed-a').removeAttribute('style');
    document.querySelector('.designed-a').style.visibility = "hidden";
    // document.querySelector('.designed-by-btn').removeAttribute("style");

});

const leftSlideBtn = document.querySelector('.left-btn');
const rightSlideBtn = document.querySelector('.right-btn');
const slideOne = document.querySelector('.slide-1');
const slideTwo = document.querySelector('.slide-2');
const imgsList = document.querySelector('imgs');
let w = window.innerWidth;
let h = window.innerHeight;
// console.log(w);


rightSlideBtn.addEventListener('click', ()=>{
    if(w>=1001 || w<=1000){
        slideOne.style.transform = `translateX(0)`;
        slideTwo.style.transform = `translateX(0)`;
        slideOne.style.transition = 'all 2s ease';            slideTwo.style.transition = 'all 2s ease';
    } 
        
});

leftSlideBtn.addEventListener('click', ()=>{
    if(w>=1001 || w<=1000) {
        slideOne.style.transform = `translateX(-1194px)`;
        slideTwo.style.transform = `translateX(-1194px)`;
      slideTwo.style.transition = 'all 2s ease';
      slideOne.style.transition = 'all 2s ease';
    }
});

})();

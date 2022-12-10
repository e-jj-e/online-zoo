(function(){

let el = document.querySelector('.yellow-dots-list').getElementsByTagName('li');
document.querySelector('.yellow-dots-list').addEventListener('click', (e)=>{
    for(let ev of el) {
        // console.log(ev);
        if(ev.classList.contains('orange-circle')){
            ev.classList.remove('orange-circle');
            ev.removeAttribute('class');
        } else {
            e.target.classList.add('orange-circle');
        }
    }
    
});

const burgerMenu = document.querySelector('.burger-menu');
let clickCount = 0;
const navBar = document.querySelector('.nav-bar');
const mobileOverlay = document.querySelector('.mobile-overlay');

burgerMenu.addEventListener('click', ()=>{
    clickCount = (clickCount + 1) % 2;
    if(clickCount === 1){
      burgerMenu.classList.add('active');
      mobileOverlay.classList.add('active');
      mobileOverlay.style.visibility = "visible";
      navBar.classList.add('opened');
      document.body.classList.add('notScrollable');
      document.querySelector('.notScrollable').style.overflow = "hidden";
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
    } else {
      burgerMenu.classList.remove('active');
      mobileOverlay.classList.remove('active');
      mobileOverlay.style.visibility = "hidden";
      navBar.classList.remove('opened');
      document.querySelector('.notScrollable').removeAttribute('style');
      document.body.classList.remove('notScrollable');
      document.body.removeAttribute('class');
      document.querySelector('.header-tablet-logo').removeAttribute("style");
        document.querySelector('.a').removeAttribute("style");
    }
});

mobileOverlay.addEventListener('click', ()=> {
    burgerMenu.classList.remove('active');
    navBar.classList.remove('opened');
    mobileOverlay.classList.remove('active');
    mobileOverlay.style.visibility = "hidden";
    document.querySelector('.notScrollable').removeAttribute('style');
    document.body.classList.remove('notScrollable');
    document.body.removeAttribute('class');
    document.querySelector('.header-tablet-logo').removeAttribute("style");
    document.querySelector('.a').removeAttribute("style");
    // document.querySelector('.designed-a').removeAttribute('style');
    // document.querySelector('.designed-a').style.visibility = "hidden";
    // document.querySelector('.designed-by-btn').removeAttribute("style");

});

})();

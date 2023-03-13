document.addEventListener("DOMContentLoaded", function(event) { 

//Animation banner1

const html = document.documentElement;
window.addEventListener("scroll", function(){

    const content = document.querySelector(".c1");
    const content2 = document.querySelector(".c2");
    const content3 = document.querySelector(".c3");
    const content4 = document.querySelector(".c4");
    const background = document.querySelector(".background");
    const header = document.querySelector("header");
    let scrollPosition = window.pageYOffset;
    let banner1 = document.querySelector(".banner1")

    const scrollTop = html.scrollTop;
    const maxScrollTop = banner1.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop/maxScrollTop;
    
    const halfwayCounted = 1-(scrollFraction*8)
    content.style.opacity = halfwayCounted;
    console.log(halfwayCounted)
    content2.style.transition = 1.5 + "s";
    content3.style.transition = 1 + "s";
    content4.style.transition = 1 + "s";

  
    if(halfwayCounted <= -1){
        content2.style.top = "40%";
        content3.style.top = "55%";
        content3.style.opacity = "1";
    } else{
        content2.style.removeProperty("top");
        content3.style.opacity = "0";
        content3.style.removeProperty("top");
    }
    if(halfwayCounted <= -3){
        content2.style.transition = 1.5 + "s";
        content2.style.top = "25%";
        content2.style.opacity = "0";
    }
    if(halfwayCounted <= -4){
        content3.style.top = "40%";
        content3.style.transition = 2 + "s";
        content4.style.top = "55%";
        content4.style.opacity = "1";
    } else if(halfwayCounted <= -1){
        content2.style.top = "40%";
        content2.style.opacity = "1";
        content3.style.top = "55%";
        content4.style.opacity = "0";
        content4.style.top = "75%"
    }

    if(halfwayCounted <= -5){
        content3.style.opacity = 7 + halfwayCounted;
        content3.style.transition = 0 + "s";
        content4.style.transition = 0 + "s";
        content4.style.opacity = 7 + halfwayCounted;
    }

    if (halfwayCounted <= -8.5) {
        header.style.transition = "1.2s";
        header.style.opacity = ".95";
      } else {
        header.style.transition = ".5s";
        header.style.opacity = "0";
      }
})


//Header Responsive

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.close-icon');
const menuItems = document.querySelectorAll('.menu li a');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  menu.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
  menuIcon.classList.remove('active');
  menu.classList.remove('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && menu.classList.contains('active')) {
    menuIcon.classList.remove('active');
    menu.classList.remove('active');
  }
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuIcon.classList.remove('active');
    menu.classList.remove('active');
  });
});







//Smooth Scroll

const windowHeight = window.innerHeight;
const nextSection = banner1.nextElementSibling;
const threshold = 100;

window.addEventListener('scroll', () => {
  const banner1Bottom = banner1.getBoundingClientRect().bottom;
  const scrollDistance = windowHeight - banner1Bottom;

  if (scrollDistance > threshold) {
    window.scrollTo({
      top: nextSection.offsetTop,
      behavior: 'smooth',
    });
  }
});


});
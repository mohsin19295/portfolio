const menu = document.querySelector(".menu")
const navOpen = document.querySelector(".hamburger")
const navClose = document.querySelector(".close")
const logo = document.querySelector(".top-nav")
const navBar = document.querySelector(".navbar")
const navLink = document.querySelector(".nav-list")


navOpen.addEventListener('click', () => {
  menu.classList.add("show");
})

navClose.addEventListener('click', () => {
  menu.classList.remove("show")
})

navLink.addEventListener('click', () => {
  menu.classList.remove("show")
})

logo.addEventListener('click', () => {
  menu.classList.remove("show")
})

//navbar fixation 
const navHeight = navBar.getBoundingClientRect().height
// console.log('navHeight:', navHeight)
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset+57
  // console.log('scrollHeight:', scrollHeight)
  if(scrollHeight > navHeight){
    navBar.classList.add('fix-nav')
  }else{
    navBar.classList.remove('fix-nav')
  }
})


new TypeIt("#type1", {
    speed: 120,
    loop: true,
    waitUntilVisible: true
}).type("Full Stack Developer", {delay: 400}).pause(500).delete(20).type('Web Developer', {delay: 400}).pause(500).delete(9).go()

gsap.from(".logo", {opacity : 0, duration: 1, delay:0.5, y:-10})
gsap.from(".hamburger", {opacity : 0, duration: 1, delay:1, x:20})
gsap.from(".banner", {opacity : 0, duration: 1, delay:1.5, x:-200})
gsap.from(".hero h3", {opacity : 0, duration: 1, delay:2, y:-50})
gsap.from(".hero h1", {opacity : 0, duration: 1, delay:2.5, y:-45})
gsap.from(".hero h4", {opacity : 0, duration: 1, delay:3, y:-30})
gsap.from(".hero a", {opacity : 0, duration: 1, delay:3.5, y:50})

gsap.from(".nav-item", {opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2})
gsap.from(".icons span", {opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2})



const slider = document.querySelector('.project-flex');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 3;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
});
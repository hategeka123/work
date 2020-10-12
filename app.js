const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');
const nav_link = document.querySelectorAll('.nav-list ul li a');
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';   
    }
});

window.addEventListener('scroll', event =>{
    let fromTop = window.scrollY;

   nav_link.forEach(link => {
    let section = document.querySelector(link.hash);

    if (section.offsetTop <= fromTop + 70 && section.offsetTop + section.offsetHeight > fromTop + 70){
        link.style.color = 'crimson';
        link.style.borderBottom = '2px solid crimson';
        console.log(fromTop +30)
    } else {
        link.style.color = 'white';
        link.style.borderBottom = 'none';
    }
   })
});

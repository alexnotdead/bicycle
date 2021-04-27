const menu = document.querySelector('.header__row');
const iconBurger = document.querySelector('.icon-burger');
const header = document.querySelector('header');
const subscribeForm = document.querySelector('.subscribe');

subscribeForm.onclick = (event) =>{
    let target = event.target;
    if (target.classList.contains('subscribe__form-btn')) return
    if (!target.classList.contains('subscribe__form-inp')){
        document.querySelector('.subscribe__form-inp').value = 'enter your e-mail...';  
    } else{
        document.querySelector('.subscribe__form-inp').value = '';   
    }
}


header.onclick = (event) =>{
    let target = event.target;
    if (!target.classList.contains('menu-icon')) return;
    iconBurger.classList.toggle('active');
    menu.classList.toggle('active');
}

$('.slider').slick({
    dots : true,
    slidesToShow: 1,
    slidesToScroll:1,
    prevArrow: false,
    nextArrow: false
})

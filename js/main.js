const nav = document.querySelector('.header__nav');
const burgerBlock = document.querySelector('.header__nav_mobile');
const burgerIcon = document.querySelector('.header__nav_mobile--icon');

burgerBlock.addEventListener('click',() => 
{
	burgerIcon.classList.toggle('active');
	nav.classList.toggle('active');
	
	nav.classList.contains('active') ? document.body.style.overflow = 'hidden' : document.body.style.removeProperty('overflow');
});

// AOS Library
AOS.init({
	once: true
});
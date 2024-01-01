
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()){
      $('nav').addClass('sticky');
    }else{
      $('nav').removeClass('sticky');
    }
  })
});
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 300) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

$('.slider').slick({
  autoplay: true,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  prevArrow:'<button type="button" class="slick-prev custom-prev"><i class="fa-solid fa-caret-left left"></i></button>',
  nextArrow:'<button type="button" class="slick-next custom-next"><i class="fa-solid fa-caret-right right"></i></button>'
});
$(document).ready(function() {
  var items = $('.slider-message .item');
  var currentIndex = 0;

  function showNextItem() {
    items.removeClass('active');
    items.eq(currentIndex).addClass('active');
    currentIndex = (currentIndex + 1) % items.length;
  }

  setInterval(showNextItem, 3000); 
});
$('.slide-history').slick({
  autoplay: true,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  prevArrow:'<button type="button" class="slick-prev custom-prev"></button>',
  nextArrow:'<button type="button" class="slick-next custom-next"></button>'
});
$('.slide-hs-item').slick({
  autoplay: true,
  infinite: true,
  dots:true,
  speed: 1000,
  dotsClass:'slick-dots',
  prevArrow:'<button type="button" class="slick-prev custom-prev cs-sub-prev"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow:'<button type="button" class="slick-next custom-next cs-sub-next"><i class="fa-solid fa-angle-right"></i></button>'
});

$('.testimonials-ct').slick({
  autoplay: true,
  infinite: true,
  dots:true,
  speed: 1000,
  dotsClass:'slick-dotss',
  prevArrow:'<button type="button" class="slick-prev custom-prev cs-sub-prev testimonials-n"></button>',
  nextArrow:'<button type="button" class="slick-next custom-next cs-sub-next testimonials-n"></button>'
});


document.addEventListener('DOMContentLoaded', function() {
  var navbarToggle = document.querySelector('.navbar-toggle');
  var navMenu = document.querySelector('.nav-menu');

  navbarToggle.addEventListener('click', function() {
      navMenu.classList.toggle('actives');
  });
});
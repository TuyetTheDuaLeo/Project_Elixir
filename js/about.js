$(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop()){
        $('nav').addClass('sticky');
      }else{
        $('nav').removeClass('sticky');
      }
    })
});
$('.slide-history').slick({
    infinite: false,
    autoplay: 1000,
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
document.addEventListener('DOMContentLoaded', function() {
  var navbarToggle = document.querySelector('.navbar-toggle');
  var navMenu = document.querySelector('.nav-menu');

  navbarToggle.addEventListener('click', function() {
      navMenu.classList.toggle('actives');
  });
});
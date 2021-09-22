'use stric'



  var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $(".prices__parent").click(function () {        
    $(this).children(".child").slideToggle(300);
});

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});
$(document).ready(function(){
  $('.slaider__inner').slick({
      autoplay: true,
      autolaySpeed: 2000,
      prevArrow:'<button type="button" class="slick-prev"><img src="../icons/leftright/ligtleft.png"></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="../icons/leftright/ligtright.png"></button>',
  });
   

});
// Scroll
$(window).scroll(function() {
  if ($(this).scrollTop() > 1500) {
      $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});
$(function(){
  $("a[href^='#']").click(function(){
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
  });
});


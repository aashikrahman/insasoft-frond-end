


$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      700: {
        items: 3
      },
      1400: {
        items: 4
      }
    }

  });
});


$(document).ready(function () {
  var owl = $('.owl-carousel-testi');
  owl.owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }

  });

});


$(document).ready(function () {
  var owl = $('.owlMarquee');
  owl.owlCarousel({
    items: 8,
    loop: true,
    margin: 20,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 0,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }

  });

});



let SwiperTop = new Swiper('.swiper--top', {

  centeredSlides: true,
  speed: 7000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true,
  breakpoints: {  
    '480': {
      slidesPerView: 3,
     },
   
  },
});





// testimonials

var swiper = new swiper(".mySwiperCleint", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
  nextEl: '.swiper-testi-next',
  prevEl: '.swiper-testi-prev',
},
});

// testimonials


var swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto', // Automatically calculate the number of slides per view
  speed: 6000, // Adjust speed (6 seconds in this example)
  autoplay: {
    delay: 0, // No delay for initial autoplay start
    disableOnInteraction: false, // Autoplay continues even if user interacts with swiper
  },
});



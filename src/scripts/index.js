



import '../scss/main.scss';

import './headerAnim';

import Typed from 'typed.js';

import Swiper from 'swiper';
import 'swiper/css/swiper.css';


import AOS from 'aos';
import 'aos/dist/aos.css';





window.addEventListener('load', function(){

    
    const navbar = document.querySelector('.nav')
   const pageLoader = document.querySelector('.page-loader');
    pageLoader.classList.add('preload-finish');



        if (window.scrollY){
            navbar.classList.add('nav-link')
            
        }
  
    });

    AOS.init({
      useClassNames: true
    });
   
    
    
    /********code for typed.js config********/

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed:'8',
        backSpeed:'8',
        smartBackspace: 'false',
        loop:'true'
    });   


  /**************Swiper Config*****************/

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

var swiper1 = new Swiper('.swiper-container1', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    
});


var swiper3 = new Swiper('.swiper-container3', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: false,
    loopFillGroupWithBlank: false,
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    }
  });


  



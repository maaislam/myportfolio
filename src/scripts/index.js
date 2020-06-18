

import '../scss/main.scss';
import '../images/fontawesome-free-5.12.1-web/css/all.css';
import './headerAnim';

import Typed from 'typed.js';

import Swiper from 'swiper';
import 'swiper/css/swiper.css';

import sal from 'sal.js'
import 'sal.js/dist/sal.css';






window.addEventListener('load', function(){

    const pageLoader = document.querySelector('.page-loader');
    pageLoader.classList.add('preload-finish');

  
    });


    sal({
        threshold: 0.7,
        once: false,
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



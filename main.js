const searchLink = document.querySelector('.search-link');
const searchBlock = document.querySelector('.header-search');
const searchClose = document.querySelector('.header-search__close');
searchLink.addEventListener('click', () => {
    searchBlock.style.display = 'block';
});

searchClose.addEventListener('click', () => {
    searchBlock.style.display = 'none';
});


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){
    $('document').ready(function(){
        $('.header__logo').click(function(){
            $('.menu__list').slideToggle('slow');
      return false;
      });
    });
    } 

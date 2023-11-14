const slideShowMoreBrand = document.querySelector('.brand-repair__container .slide-show-more');
const swiperWrapperBrand = document.querySelector('.brand-repair__container .brand-repair__slides');
let slideShowMoreIconBrand = slideShowMoreBrand.querySelector('.slide-show-more__icon');
let slideShowMoreTextBrand = slideShowMoreBrand.querySelector('span');

slideShowMoreBrand.addEventListener('click', function() {
    if (slideShowMoreTextBrand.textContent === 'Показать все') {
        swiperWrapperBrand.style.height = '100%'
        slideShowMoreTextBrand.textContent = 'Скрыть'
        slideShowMoreIconBrand.style.transform = 'rotate(180deg)'
    } else {
        swiperWrapperBrand.style.height = '160px'
        slideShowMoreTextBrand.textContent = 'Показать все'
        slideShowMoreIconBrand.style.transform = 'rotate(0deg)'
    }
});
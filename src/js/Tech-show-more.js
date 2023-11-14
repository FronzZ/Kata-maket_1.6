const slideShowMoreTech = document.querySelector('.tech-repair__container .slide-show-more');
const swiperWrapperTech = document.querySelector('.tech-repair__container .tech-repair__slides');
let slideShowMoreIconTech = slideShowMoreTech.querySelector('.slide-show-more__icon');
let slideShowMoreTextTech = slideShowMoreTech.querySelector('span');

slideShowMoreTech.addEventListener('click', function() {
    if (slideShowMoreTextTech.textContent === 'Показать все') {
        swiperWrapperTech.style.height = '100%'
        slideShowMoreTextTech.textContent = 'Скрыть'
        slideShowMoreIconTech.style.transform = 'rotate(180deg)'
    } else {
        swiperWrapperTech.style.height = '160px'
        slideShowMoreTextTech.textContent = 'Показать все'
        slideShowMoreIconTech.style.transform = 'rotate(0deg)'
    }
});
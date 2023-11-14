const phoneButtons = document.querySelectorAll('.phone');
const chatButtons = document.querySelectorAll('.chat');
const callback = document.querySelector('.callback');
const closeCallbackButton = callback.querySelector('.callback__close-btn');
const feedback = document.querySelector('.feedback');
const closeFeedbackButton = feedback.querySelector('.feedback__close-btn');
const opacityPage = document.querySelector('.opacity-page');

const burgerMenu = document.querySelector('.burger');
const containerSide = document.querySelector('.side-wrapper');
const closeBurgerMenu = containerSide.querySelector('.closeBurger');

//                   Меню                               //

burgerMenu.addEventListener('click', function() {
    containerSide.classList.add('active-burger');
    opacityPage.classList.add('opacity-page-active');
});

closeBurgerMenu.addEventListener('click', function() {
    containerSide.classList.remove('active-burger');
    opacityPage.classList.remove('opacity-page-active');
});



//              Для двух кнопок phone (callback)               //

phoneButtons.forEach(function(phoneButton) {
    phoneButton.addEventListener('click', function() {
        if (callback.classList.contains('callback-translate')) {
            // Если классы присутствуют, удаляем их
            callback.classList.remove('callback-translate');
            opacityPage.classList.remove('opacity-page-active');
        } else {
            // Если классы отсутствуют, добавляем их
            callback.classList.add('callback-translate');
            opacityPage.classList.add('opacity-page-active');
        }
        containerSide.classList.remove('active-burger');
    });
});

closeCallbackButton.addEventListener('click', function() {
    callback.classList.remove('callback-translate');
    opacityPage.classList.remove('opacity-page-active');
});


//              Для двух кнопок chat (feedback)               //

chatButtons.forEach(function(chatButton) {
    chatButton.addEventListener('click', function() {
        if (feedback.classList.contains('feedback-translate')) {
            // Если классы присутствуют, удаляем их
            feedback.classList.remove('feedback-translate');
            opacityPage.classList.remove('opacity-page-active');
        } else {
            // Если классы отсутствуют, добавляем их
            feedback.classList.add('feedback-translate');
            opacityPage.classList.add('opacity-page-active');
        }
        containerSide.classList.remove('active-burger');
    });
});

closeFeedbackButton.addEventListener('click', function() {
    feedback.classList.remove('feedback-translate');
    opacityPage.classList.remove('opacity-page-active');
});




//                   Клик вне блоков                     //
opacityPage.addEventListener('click', function() {
    containerSide.classList.remove('active-burger');
    callback.classList.remove('callback-translate');
    feedback.classList.remove('feedback-translate');
    opacityPage.classList.remove('opacity-page-active');   
});





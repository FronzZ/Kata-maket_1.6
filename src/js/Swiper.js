var swiper1 = null; // Переменная для первого Swiper
var swiper2 = null; // Переменная для второго Swiper
var swiper3 = null; // Переменная для третьего Swiper

function initSwiper1() {
    if (swiper1 === null) {
        swiper1 = new Swiper('.brand-repair__container .swiper', {
            // Параметры для первого Swiper в block_1
            pagination: {
                el: '.brand-repair__container .swiper-pagination',
            },
            slidesPerView: 1.3,
            spaceBetween: 16,
        });
    }
}

function initSwiper2() {
    if (swiper2 === null) {
        swiper2 = new Swiper('.tech-repair__container .swiper', {
            // Параметры для второго Swiper в block_2
            pagination: {
                el: '.tech-repair__container .swiper-pagination',
            },
            slidesPerView: 1.3,
            spaceBetween: 16,
        });
    }
}

function initSwiper3() {
    if (swiper3 === null) {
        swiper3 = new Swiper('.prices__container .swiper', {
            // Параметры для третьего Swiper в block_3
            pagination: {
                el: '.prices__container .swiper-pagination',
            },
            slidesPerView: 1.3,
            spaceBetween: 16,
        });
    }
}

function destroySwiper1() {
    if (swiper1 !== null) {
        swiper1.destroy();
        swiper1 = null;
    }
}

function destroySwiper2() {
    if (swiper2 !== null) {
        swiper2.destroy();
        swiper2 = null;
    }
}

function destroySwiper3() {
    if (swiper3 !== null) {
        swiper3.destroy();
        swiper3 = null;
    }
}

function handleSwipers() {
    if (window.innerWidth >= 768) {
        destroySwiper1(); // Уничтожит первый Swiper при разрешении 768px и ниже
        destroySwiper2(); // Уничтожит второй Swiper при разрешении 768px и ниже
        destroySwiper3(); // Уничтожит третий Swiper при разрешении 768px и ниже
    } else {
        initSwiper1(); // Инициализирует первый Swiper снова при разрешении выше 768px
        initSwiper2(); // Инициализирует второй Swiper снова при разрешении выше 768px
        initSwiper3(); // Инициализирует третий Swiper снова при разрешении выше 768px
    }
}

document.addEventListener("DOMContentLoaded", function () {
    handleSwipers(); // Инициализирует Swiper-ы при загрузке страницы

    // Добавим обработчик изменения размера окна браузера
    window.addEventListener("resize", handleSwipers);
});



































// document.addEventListener("DOMContentLoaded", function () {
//     var swiper1 = new Swiper('.block_1 .swiper', {
//         // Параметры для первого Swiper в block_1
//         pagination: {
//             el: '.block_1 .swiper-pagination',
//         },
//         slidesPerView: 1.3,
//         spaceBetween: 16,
//     });

//     var swiper2 = new Swiper('.block_2 .swiper', {
//         // Параметры для второго Swiper в block_2
//         pagination: {
//             el: '.block_2 .swiper-pagination',
//         },
//         slidesPerView: 1.3,
//         spaceBetween: 16,
//     });
// });


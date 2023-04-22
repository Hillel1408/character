window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-image', {
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-reviews', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

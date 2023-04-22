window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-image', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 3,
            },
        },
        spaceBetween: 20,
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

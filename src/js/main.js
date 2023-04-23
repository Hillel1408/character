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
    const swiperReviews = new Swiper('.swiper-reviews', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const swiperWedding = new Swiper('.swiper-wedding', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const mobileMenu = document.querySelector('.mobile-menu');
    const openBtn = document.querySelector('.mobile-menu__open');
    const closeBtn = document.querySelector('.mobile-menu__close');

    openBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = 'initial';
    });
});

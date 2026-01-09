
const logoSwiper = new Swiper(".logoSwiper", {
    slidesPerView: 5,          
    spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,   
        }
    }
});




// Desktop tab functionality
const tabs = document.querySelectorAll('.programme-tabs li');
const groups = document.querySelectorAll('.programme-group');

tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        const category = this.getAttribute('data-category');

        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        groups.forEach(group => {
            group.classList.remove('active');
            if (group.id === category) {
                group.classList.add('active');
            }
        });
    });
});

// Mobile accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
        const accordionItem = this.parentElement;
        const isActive = accordionItem.classList.contains('active');

        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });

        if (!isActive) {
            accordionItem.classList.add('active');
        }
    });
});


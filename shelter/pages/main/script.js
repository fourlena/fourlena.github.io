// Бургер-меню
const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.list__item'),
    logo = document.querySelector('.logo'),
    hamburger = document.querySelector('.humburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('humburger--active');
        menu.classList.toggle('menu--active');
        logo.classList.toggle('logo--active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('humburger--active');
            menu.classList.toggle('menu--active');
            logo.classList.toggle('logo--active');
        });
    });
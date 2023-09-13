const menuBox = document.querySelector('.menu-box');
const email = document.querySelector('.email-address');
const menuMobileIcon = document.querySelector('.menu-icon');
const menuMobile = document.querySelector('.menu-box-mobile');

email.addEventListener('click', () => {
  menuBox.classList.toggle('inactive');
});

menuMobileIcon.addEventListener('click', () => {
    menuMobile.classList.toggle('inactive');
})
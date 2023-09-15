const menuBox = document.querySelector('.menu-box');
const email = document.querySelector('.email-address');
const menuMobileIcon = document.querySelector('.menu-icon');
const menuMobile = document.querySelector('.menu-box-mobile');
const shoppingCart = document.querySelector('.cart-icon');
const shoppingContainer = document.querySelector('.shopping-container');
const shoppingCloseArrow = document.querySelector('#shopping-close-arrow');

email.addEventListener('click', () => {
  menuBox.classList.toggle('inactive');
  if (!shoppingContainer.classList.contains('inactive')) {
      shoppingContainer.classList.toggle('inactive');
  }
});

menuMobileIcon.addEventListener('click', () => {
    menuMobile.classList.toggle('inactive');
    if (!shoppingContainer.classList.contains('inactive')) {
        shoppingContainer.classList.toggle('inactive');
    }
})

shoppingCart.addEventListener('click', () => {
    shoppingContainer.classList.toggle('inactive');
    if (!menuMobile.classList.contains('inactive')) {
        menuMobile.classList.toggle('inactive');
    }
    if (!menuBox.classList.contains('inactive')) {
        menuBox.classList.toggle('inactive');
    }
})
shoppingCloseArrow.addEventListener('click', () => {
  shoppingContainer.classList.toggle('inactive');
  if (!menuMobile.classList.contains('inactive')) {
      menuMobile.classList.toggle('inactive');
  }
})
const menuBox = document.querySelector('.menu-box');
const email = document.querySelector('.email-address');

email.addEventListener('click', () => {
  menuBox.classList.toggle('inactive');
});
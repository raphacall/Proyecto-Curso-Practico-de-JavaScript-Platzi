const menuBox = document.querySelector('.menu-box');
const email = document.querySelector('.email-address');
const menuMobileIcon = document.querySelector('.menu-icon');
const menuMobile = document.querySelector('.menu-box-mobile');
const shoppingCart = document.querySelector('.cart-icon');
const shoppingContainer = document.querySelector('.shopping-container');
const shoppingCloseArrow = document.querySelector('#shopping-close-arrow');
const cardsContainer = document.querySelector('.cards-container');

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

let productList = [
  { 
    name: "Bike",
    price: 100,
    quantity: 16,
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
  },
  { 
    name: "Car",
    price: 300,
    quantity: 13,
    image: "https://cdn.motor1.com/images/mgl/G33JZA/s3/bentley-mulliner-batur.jpg"
  },
  { name: " Boat",
    price: 400,
    quantity: 10,
    image: "https://media.istockphoto.com/id/162324941/photo/a-blue-striped-white-yacht-speeding-across-the-sea.jpg?s=612x612&w=0&k=20&c=uMcPUZGQDxRDhDpRJ9yiYbIM8xyi_YGaZ_c6_Y2IWjs="
  },
  { 
    name: "Laptop",
    price: 200,
    quantity: 7,
    image: "https://i.blogs.es/a19284/framw/1366_2000.jpeg"
  }
]

function renderProducts(productList) {
  let index = 0;
  for (product of productList){
    index++;
    let productCard = document.createElement('div');
    productCard.classList.add('product-card');
    let productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.alt = product.name + ' image';
    productImg.classList.add('product'+ '-' + index);
    let productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productInfo.classList.add('product'+ '-' + index);
    let productInfoDiv = document.createElement('div');
    let productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.innerText = '$ ' + product.price;
    let productName = document.createElement('p');
    productName.classList.add('product-name');
    productName.innerText = product.name;
    let productFigure = document.createElement('figure');
    let productFigureImg = document.createElement('img');
    productFigureImg.src = './icons/bt_add_to_cart.svg';
    productFigureImg.alt = 'add product';
    productFigure.appendChild(productFigureImg);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);

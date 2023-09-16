const menuBox = document.querySelector('.menu-box');
const email = document.querySelector('.email-address');
const menuMobileIcon = document.querySelector('.menu-icon');
const menuMobile = document.querySelector('.menu-box-mobile');
const shoppingCart = document.querySelector('.cart-icon');
const shoppingContainer = document.querySelector('.shopping-container');
const shoppingCloseArrow = document.querySelector('#shopping-close-arrow');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail-aside');
const productDetailCloseIcon = document.querySelector('.close-icon-frame');
let productImgArray;

email.addEventListener('click', () => {
  menuBox.classList.toggle('inactive');
  if (!shoppingContainer.classList.contains('inactive')) {
      shoppingContainer.classList.toggle('inactive');
  }
  if (!productDetail.classList.contains('inactive')) {
    productDetail.classList.add('inactive');
  }
});

menuMobileIcon.addEventListener('click', () => {
    menuMobile.classList.toggle('inactive');
    if (!shoppingContainer.classList.contains('inactive')) {
        shoppingContainer.classList.toggle('inactive');
    }
    if (!productDetail.classList.contains('inactive')) {
      productDetail.classList.add('inactive');
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
    if (!productDetail.classList.contains('inactive')) {
      productDetail.classList.add('inactive');
    }
  })

shoppingCloseArrow.addEventListener('click', () => {
  shoppingContainer.classList.toggle('inactive');
  if (!menuMobile.classList.contains('inactive')) {
      menuMobile.classList.toggle('inactive');
  }
})

productDetailCloseIcon.addEventListener('click', () => {
  productDetail.classList.add('inactive');
})
function createDetailProduct(name, price, image, description) {
  let productDetailImg = document.querySelector('.product-detail-img');
  productDetailImg.src = image;
  productDetailImg.alt = name + ' image';
  let productDetailName = document.querySelector('.product-detail-name');
  productDetailName.innerText = name;
  let productDetailPrice = document.querySelector('.product-detail-price');
  productDetailPrice.innerText = '$ ' + price;
  let productDetailDescription = document.querySelector('.product-detail-description');
  productDetailDescription.innerText = description ;
}



let productList = [
  { 
    name: "Bike",
    price: 100,
    quantity: 16,
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { 
    name: "Car",
    price: 300,
    quantity: 13,
    image: "https://cdn.motor1.com/images/mgl/G33JZA/s3/bentley-mulliner-batur.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { name: " Boat",
    price: 400,
    quantity: 10,
    image: "https://media.istockphoto.com/id/162324941/photo/a-blue-striped-white-yacht-speeding-across-the-sea.jpg?s=612x612&w=0&k=20&c=uMcPUZGQDxRDhDpRJ9yiYbIM8xyi_YGaZ_c6_Y2IWjs=",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { 
    name: "Laptop",
    price: 200,
    quantity: 7,
    image: "https://i.blogs.es/a19284/framw/1366_2000.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
    productImg.classList.add('product-img-frame');
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
  productImgArray = document.querySelectorAll('.product-img-frame');
  for (let i = 0; i < productImgArray.length; i++) {
    productImgArray[i].addEventListener('click', () => {
      console.log("le io")
      createDetailProduct(productList[i].name, productList[i].price, productList[i].image, productList[i].description);
      productDetail.classList.remove('inactive');
      if (!shoppingContainer.classList.contains('inactive')) {
        shoppingContainer.classList.add('inactive');
      }
      if (!menuMobile.classList.contains('inactive')) {
        menuMobile.classList.add('inactive');
      }
      if (!menuBox.classList.contains('inactive')) {
        menuBox.classList.add('inactive');
      }
    })
  }
}
renderProducts(productList);


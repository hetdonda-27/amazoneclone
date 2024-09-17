var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("image-item");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

// Array to hold cart items
let cart = [];

// Function to add items to the cart
function addToCart(item) {
  cart.push(item);
  alert(item + ' added to cart');
}

// Function to display all cart items
function showCartItems() {
  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = ''; // Clear existing items

  if (cart.length === 0) {
    cartItemsList.innerHTML = '<li>No items in cart</li>';
    return;
  }

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    cartItemsList.appendChild(listItem);
  });
}

// Event listener for showing cart items
document.getElementById('show-cart').addEventListener('click', showCartItems);

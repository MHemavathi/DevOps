const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
const slides = document.querySelectorAll(".home .slides-container .slide");
const header = document.querySelector(".header");

let index = 0;

// JavaScript to toggle the
// visibility of the navigation menu
document.addEventListener("DOMContentLoaded",
	function () {
		const hamburger = document.getElementById("hamburger");
		const navbar = document.querySelector(".navbar");

		hamburger.addEventListener("click", function () {
			navbar.classList.toggle("active");
		});
	});

window.addEventListener("scroll", () => {
	navbar.classList.remove("active");
});

function showSlide(nextIndex) {
	slides[index].classList.remove("active");
	index = (nextIndex + slides.length) % slides.length;
	slides[index].classList.add("active");
}

function next() {
	showSlide(index + 1);
}

function prev() {
	showSlide(index - 1);
}


document.getElementById('login-btn').addEventListener('click', function() {
    window.location.href = 'login.html';
});




function addToCart(productName, price) {
    // Retrieve cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the selected product to the cart
    cart.push({ productName, price });

    // Store the updated cart back in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the cart page
    window.location.href = 'cart.html';
}



// Cart object to store items
let cart = [];

// Function to add items to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let cartItemsHTML = '';
    let total = 0;

    cart.forEach(item => {
        cartItemsHTML += `<li>${item.name} - $${item.price}</li>`;
        total += item.price;
    });

    cartItemsElement.innerHTML = cartItemsHTML;
    cartTotalElement.textContent = `$${total}`;
}


document.getElementById("cart-btn").addEventListener("click", function() {
  window.location.href = "cart.html";
});

document.getElementById("back-btn").addEventListener("click", function() {
  window.location.href = "index.html";
});

//const addtocart = Document.getElementById('addtocart');


async function loadProducts() {
    const response = await fetch('/.vscode/products.json');
    const products = await response.json();
    const container = document.getElementById('product-info');
    products.forEach(product => {
        const card = document.createElement('div');


        card.className = 'prd-nm p-4 prd-result border rounded-lg overflow-hidden shadow-lg shadow-gray-600 hover:bg-green-500  cursor-pointer';
        card.innerHTML = `
            <div class="prd-img">
            <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover" />
            </div>
            <div  class="prd-nm p-8">
                <h3 class="font-bold text-md">${product.name} </h3>
                <h4 class="padx-20px items-right">${product.liter}</h4>
                <span class="product-price">₹${product.price}</span>
                <button class="info-btn text-white bg-green-700 rounded-lg p-3"><a href = "/pages/empprddetails.html"> ${product.details} </a></button>
                <button class="info-btn text-black hover:bg-yellow-400 rounded-lg p-3 w-48" /*onClick='addTocart("${product.name}",${product.price})'*/ > Add to Cart</button>
            </div>
            `;
        container.appendChild(card);
    });
}

let cartItems = [];
let totalPrice = 0;

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productItem = this.closest('.product-item');
        const productName = productItem.querySelector('h3').innerText;
        const productPrice = parseFloat(productItem.querySelector('p').innerText.replace('Price: $', ''));

        // Add item to cart
        cartItems.push({ name: productName, price: productPrice });
        totalPrice += productPrice;

        // Update cart display
        updateCart();
    });
});

document.getElementById('cart-icon').addEventListener('click', function() {
    var cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = (cartContainer.style.display === 'none' || cartContainer.style.display === '') ? 'block' : 'none';
});

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');

    // Clear current list
    cartItemsList.innerHTML = '';

    // Populate cart items
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });

    // Update total price
    totalPriceDisplay.innerText = `Total: $${totalPrice.toFixed(2)}`;
}
window.onload = loadProducts;
//function to add product


function addtocart() {
    alert('Product added to cart!');
}
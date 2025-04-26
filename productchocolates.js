//const addtocart = Document.getElementById('addtocart');


async function loadProducts() {
    const response = await fetch('/.vscode/products3.json');
    const products = await response.json();
    const container = document.getElementById('product-info');
    products.forEach(product => {
        const card = document.createElement('div');


        card.className = 'prd-nm p-4 prd-result border rounded-lg overflow-hidden shadow-lg shadow-gray-600 hover:bg-yellow-700  cursor-pointer';
        card.innerHTML = `
            <div class="prd-img">
            <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover" />
            </div>
            <div  class="prd-nm p-8">
                <h3 class="font-bold text-md">${product.name} </h3>
                <h4 class="padx-20px items-right">${product.liter}</h4>
                <span class="product-price">₹${product.price}</span>
                <div class="product-rating text-center">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</div>
                <button class="info-btn text-white bg-green-700 rounded-lg p-3">${product.details}</button>
                <button class="info-btn text-black hover:bg-yellow-400 rounded-lg p-3 w-48" /*onClick='addTocart("${product.name}",${product.price})'*/ > Add to Cart</button>
            </div>
            `;
        container.appendChild(card);
    });
}

let cart = [];

function addTocart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function removeFromCart(index) {
    // Remove product from cart
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index); // Set up removal function

        li.appendChild(removeButton); // Append the button to the list item
        cartList.appendChild(li); // Append list item to the cart

        total += item.price;
    });

    document.getElementById('total-price').textContent = `Total:$${total.toFixed(2)}`;

}


window.onload = loadProducts;
//function to add product


function addtocart() {
    alert('Product added to cart!');
}
//product details

async function loaddetails() {
    const response = await fetch('/.vscode/productdet.json');
    const prodetails = await response.json();
    const container = document.getElementById('prd-container');
    prodetails.forEach(product => {
        const card = document.createElement('div');

        card.className = 'p-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 min-h-screen';
        card.innerHTML = `

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto lg:p-10 rounded-lg">


           <div class="space-y-8 animate-right"                 
           <div  class="prd-nm p-8">
                <h3 class="font-bold text-md">${product.name} </h3>
                <h4 class="padx-20px items-right">${product.liter}</h4>
                <span class="product-price">₹${product.price}</span>
                <button class="info-btn text-black hover:bg-yellow-400 rounded-lg p-3 w-48"  > Add to Cart</button>
            </div>
            </div>

        `;

        container.appendChild(card);
    });
}



window.onload = loaddetails;
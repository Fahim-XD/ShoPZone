let cart = [];

function addToCart(product, price) {
    const existing = cart.find(item => item.product === product);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ product, price, quantity: 1 });
    }
    renderCart();
}

function renderCart() {
    const cartTable = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");
    cartTable.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        cartTable.innerHTML += `
            <tr>
                <td>${item.product}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${subtotal.toFixed(2)}</td>
            </tr>
        `;
    });

    totalDisplay.innerText = "$" + total.toFixed(2);
}

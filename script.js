document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Hair Oil 1', price: 10.00 },
        { id: 2, name: 'Hair Oil 2', price: 15.00 },
    ];

    const cart = [];

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            renderCart();
        }
    }

    function renderCart() {
        const cartItems = document.querySelector('.cart-items');
        const totalPrice = document.querySelector('.total-price');
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.className = 'cart-item';
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });

        totalPrice.textContent = total.toFixed(2);
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.product').dataset.id);
            addToCart(productId);
        });
    });

    document.querySelector('.checkout').addEventListener('click', () => {
        document.querySelector('.checkout-form').style.display = 'block';
    });

    document.querySelector('.checkout-form form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Order placed!');
        cart.length = 0;
        renderCart();
        document.querySelector('.checkout-form').style.display = 'none';
    });
});

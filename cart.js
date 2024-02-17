document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.querySelector('.checkout-button');

    function addToCart(name, price) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        displayCartItems();

        alert(`Товар "${name}" успішно додано до корзини!`);
    }

    function displayCartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalPrice = 0;

        cartItemsContainer.innerHTML = '';

        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `<p>${item.name} x${item.quantity}</p><p>Ціна: $${(item.price * item.quantity).toFixed(2)}</p>`;
            cartItemsContainer.appendChild(cartItemElement);

            totalPrice += item.price * item.quantity;
        });
        totalPriceElement.textContent = `Загальна сума: $${totalPrice.toFixed(2)}`;
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = button.getAttribute('data-product-name');
            const productPrice = parseFloat(button.getAttribute('data-product-price'));

            addToCart(productName, productPrice);
        });
    });

    checkoutButton.addEventListener('click', function() {
        alert('Замовлення оформлено! Дякуємо за покупку!');
        localStorage.removeItem('cart');
    });

    displayCartItems();
});
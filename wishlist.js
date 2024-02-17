document.addEventListener('DOMContentLoaded', function() {
    const wishlistItemsContainer = document.getElementById('wishlist-items');
    const addToWishlistButtons = document.querySelectorAll('.add-to-wishlist-button');

    function displayWishlistItems() {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        wishlistItemsContainer.innerHTML = '';

        wishlist.forEach((item, index) => {
            const wishlistItemElement = document.createElement('div');
            wishlistItemElement.classList.add('wishlist-item');
            wishlistItemElement.innerHTML = `
                <p>${item.name}</p>
                <p>Ціна: $${item.price.toFixed(2)}</p>
                <p>Характеристики: ${item.characteristics}</p>
                <button class="remove-from-wishlist-button" data-index="${index}">Видалити зі списку бажань</button>`;
            wishlistItemsContainer.appendChild(wishlistItemElement);
        });

        const removeFromWishlistButtons = document.querySelectorAll('.remove-from-wishlist-button');
        removeFromWishlistButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = button.getAttribute('data-index');
                removeFromWishlist(index);
                alert('Товар видалено зі списку бажань!');
                
                displayWishlistItems();
            });
        });
    }

    addToWishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = button.getAttribute('data-product-name');
            const productPrice = parseFloat(button.getAttribute('data-product-price'));
            const characteristics = button.getAttribute('data-characteristics');

            addToWishlist(productName, productPrice, characteristics);
            alert(`Товар "${productName}" успішно додано до списку бажань!`);

            displayWishlistItems();
        });
    });

    displayWishlistItems();
});

function addToWishlist(name, price, characteristics) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push({ name, price, characteristics });
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function removeFromWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

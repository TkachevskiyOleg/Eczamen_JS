function filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map(checkbox => checkbox.value.toLowerCase());

    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || Number.MAX_VALUE;

    console.log('Filtering products...');
    console.log('Selected categories:', selectedCategories);
    console.log('Min price:', minPrice);
    console.log('Max price:', maxPrice);

    const allProducts = document.querySelectorAll('.Tovar li');

    allProducts.forEach(product => {
        const productCategories = product.getAttribute('data-category').toLowerCase();
        const productPrice = parseFloat(product.getAttribute('data-price'));

        console.log('Product categories:', productCategories);
        console.log('Product price:', productPrice);

        const isVisible = (
            (selectedCategories.length === 0 || selectedCategories.includes(productCategories)) &&
            productPrice >= minPrice &&
            productPrice <= maxPrice
        );

        if (isVisible) {
            console.log('Show product:', product);
            product.classList.remove('hidden');
            product.classList.add('visible');
        } else {
            console.log('Hide product:', product);
            product.classList.remove('visible');
            product.classList.add('hidden');
        }
    });
}
  
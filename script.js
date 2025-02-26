let nama = prompt("Masukkan nama Anda : ");
alert("Halo " + nama + ", selamat datang di KWeb");
const usia = prompt("Masukkan usia Anda : ");
alert("Anda lahir pada tahun " + (2025 - usia));

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            const products = data.products.slice(0, 10); 

            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');

                productDiv.innerHTML = `
                    <h2 id = "nama-produk">${product.title}</h2>
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <p>${product.description}</p>
                    <p id = "harga-produk">Harga: $${product.price}</p>
                    <p id = "rating-produk">Rating: ${product.rating}</p>
                `;

                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error:', error));
});



// Fetch product data from the backend API
fetch('/api/products')
  .then(response => response.json())
  .then(data => {
    // Call the function to display the products
    displayProducts(data);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch request
    console.error('Error fetching products:', error);
  });

// Function to display the products on the page
function displayProducts(products) {
  const productsContainer = document.getElementById('productsContainer');

  // Loop through the products array and generate HTML for each product
  products.forEach(product => {
    // Create the product card element
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // Set the product details
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span>Price: ${product.price}</span>
    `;

    // Append the product card to the products container
    productsContainer.appendChild(productCard);
  });
}

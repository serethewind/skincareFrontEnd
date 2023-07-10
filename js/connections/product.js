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



fetch('http://localhost:8080/api/health/v1/products')
  .then(response => response.json())
  .then(products => {
    const productListElement = document.getElementById('productList');
    
    products.forEach(product => { const productElement = document.createElement('div');
    productElement.className = 'col-lg-4';

    productElement.innerHTML =  `
    <div class="col">
    <div class="card shadow-sm">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
      <div class="card-body">
        <p class="card-title fw-bold">${product.productName}</p>
        <p class="card-text">${product.description}</p>
        <p class="card-text"># ${product.price}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-primary">Add to cart</button>
          </div>
          <small class="text-body-secondary">in stock</small>
        </div>
      </div>
    </div>
  </div>
`;




















      
      productListElement.appendChild(productElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
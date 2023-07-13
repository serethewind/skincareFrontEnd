const userId = localStorage.getItem('userId');

fetch('https://skin-likemilk.onrender.com/api/health/v1/products')
  .then(response => response.json())
  .then(products => {
    const productListElement = document.getElementById('productList');
    
    products.forEach(product => { const productElement = document.createElement('div');
    productElement.className = 'col-lg-4';
    // localStorage.setItem('productId', product.productId);

    productElement.innerHTML =  `
    <div class="col">
    <div class="card shadow-sm" style="width: 18rem;">
    <img src=${product.imageUris} alt="" class="bd-placeholder-img card-img-top" width="50%" height="225">
    
      <div class="card-body bg-outline-dark">
        <p class="card-title fw-bold">${product.productName}</p>
        <p class="card-text">${product.description}</p>
        <p class="card-text"># ${product.price}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-primary" onclick="addToCart('${product.productId}')">Add to cart</button>
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

  // 

{/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"focusable="false"><img src=${product.imageUris} alt="" class="bd-placeholder-img card-img-top" width="100%" height="225"></svg> */}
  


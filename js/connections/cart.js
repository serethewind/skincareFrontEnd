// Fetch implementation for adding a cart item to the cart
// const productId = localStorage.getItem(productId);


      function addToCart(productIdInString) {
        const userId = localStorage.getItem('userId');
        const newProductId = parseInt(productIdInString)
        const requestBody = {
          userId: userId,
          productId: newProductId
        };

        // const productId = localStorage.getItem('productId');
        fetch(`http://localhost:8080/api/health/v1/carts/addToCart`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          
          },
          body: JSON.stringify(requestBody),
        })
          .then(response => {
            if (response.ok) {
              alert("Item successfully added to cart")
              console.log('Item added to cart');
            } else {
              alert("Item failed to add to cart")
              throw new Error('Failed to add item to cart');
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
      
  document.getElementById('logoutLink').addEventListener('click', function() {
    fetch('http://localhost:8080/api/health/v1/auth/logout', {
      method: 'GET',
      credentials: 'same-origin' // or 'include' if your backend and frontend are on different domains
    })
    .then(response => {
      if (response.ok) {
        // Logout successful, perform any necessary actions
        console.log('Logout successful');
        // Redirect the user to the login page or perform other post-logout actions
        window.location.href = '/signup.html'; // Example: redirect to the login page
      } else {
        // Logout failed, handle the error
        console.error('Logout failed');
      }
    })
    .catch(error => {
      // Handle network errors or other exceptions
      console.error('Error during logout:', error);
    });
  });
  
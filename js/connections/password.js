
//reset-form
const resetForm = document.getElementById('reset-form');

resetForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the form from submitting normally

  const username= document.getElementById('reset-username').value;
  const password = document.getElementById('reset-password').value;
  // Create an object with the form data
  const formData = {
    username: username,
    password: password
  };
  // Send the post request
  fetch('https://skin-likemilk.onrender.com/api/health/v1/auth/reset-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
.then(response => {
    if (response.ok) {
      // Password reset request successful
      return response.json(); // Parse the response body as JSON
    } else {
      // Password reset request failed
      throw new Error('Password reset failed');
    }
  })
  .then(data => {
    // Handle the response data
    console.log('Password reset successful:', data);
    alert("Password changed successfully. Sign in to continue")
    window.location.href = 'signup.html';
    // Perform any additional actions or display success message to the user
  })
  .catch(error => {
    console.error('Error occurred during password reset:', error);
    alert("Error occured. Please try again");
    // Handle any network or other errors that occurred during the request
  });
});

pwShowHide = document.querySelectorAll(".eye-icon")


pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})  
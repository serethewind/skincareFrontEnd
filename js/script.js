const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

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

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})

// loginform
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the form from submitting normally

  const username= document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Create an object with the form data
  const formData = {
    username: username,
    password: password
  };
  // Send the post request
  fetch('http://localhost:8080/api/health/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server
    console.log(data);
    // Perform any necessary actions after successful login
    alert("login successful");
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
    alert("Error occured. Please try again");
  });
});


//registerform
const signUpForm = document.getElementById('signup-form');

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();

  const firstName= document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('signup-password').value;
  
    const formData = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password
      };

      // Send the post request
    fetch('http://localhost:8080/api/health/v1/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })  
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server
    console.log(data);
    // Perform any necessary actions after successful login
    alert("login successful");
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
    alert("Error occured. Please try again");
  });
});

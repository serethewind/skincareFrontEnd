
const updateForm = document.getElementById('update-form');

updateForm.addEventListener('submit', (event) => {
    event.preventDefault();

  const firstName= document.getElementById('update-firstName').value;
  const otherName = document.getElementById('update-otherName').value;
  const lastName = document.getElementById('update-lastName').value;
  const username = document.getElementById('update-username').value;
const email = document.getElementById('update-email').value;
const gender = document.getElementById('update-gender').value;
const address = document.getElementById('update-address').value;
const nextOfKin = document.getElementById('update-nok').value;
const formattedDate = document.getElementById('update-dob').value;
const phoneNumber = document.getElementById('update-phoneNumber').value;


  const userId = localStorage.getItem('userId');
  const inputDate = new Date(formattedDate);
  const dateOfBirth = inputDate.toISOString();
    
  const formData = {
        firstName, otherName, lastName, username, email, gender, address, nextOfKin, dateOfBirth, phoneNumber
      };

      // Send the post request
return fetch('https://skin-likemilk.onrender.com/api/health/v1/users/' +userId , {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          // Request successful
          alert("Update completed")
          console.log('Form data sent to the server successfully');
        } else {
          // Request failed
          alert("Update failed. Try again")
          console.log('Failed to send form data to the server');
        }
      })
      .catch(error => {
        // Error occurred during the request
        alert("Error with updating profile")
        console.error('An error occurred while sending form data to the server:', error);
      });
  });
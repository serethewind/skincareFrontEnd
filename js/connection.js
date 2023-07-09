const appointmentForm = document.getElementById('appointment-form');

appointmentForm.addEventListener('submit', (event) => {
    event.preventDefault();

  const username= document.getElementById('booking-form-name').value;
  const dateInput = document.getElementById('booking-form-date').value;
  const message = document.getElementById('booking-form-message').value;
  const token = localStorage.getItem('token');
  const inputDate = new Date(dateInput);
  const formattedDate = inputDate.toISOString();
    
  const formData = {
        localDate: formattedDate,
        username: username,
        message: message,
      };

      // Send the post request
fetch('http://localhost:8080/api/health/v1/appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          // Request successful
          alert("Appointment successfully booked")
          console.log('Form data sent to the server successfully');
        } else {
          // Request failed
          alert("Appointment booking failed. Try again")
          console.log('Failed to send form data to the server');
        }
      })
      .catch(error => {
        // Error occurred during the request
        alert("Error with booking appointment")
        console.error('An error occurred while sending form data to the server:', error);
      });
  });
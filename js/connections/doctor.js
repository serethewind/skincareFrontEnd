fetch('http://localhost:8080/api/v1/health/doctor')
  .then(response => response.json())
  .then(doctors => {
    const doctorListElement = document.getElementById('doctorList');
    
    doctors.forEach(doctor => { const doctorElement = document.createElement('div');
    doctorElement.className = 'col-lg-4';

    doctorElement.innerHTML = `
      <div class="row">
        <div class="col-lg-12">
          <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
          <h2 class="pt-2">${doctor.firstName} ${doctor.lastName}</h2>
          <p>${doctor.specialization}</p>
          <p>${doctor.about}</p>
        </div>
      </div>
    `;
      
      doctorListElement.appendChild(doctorElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

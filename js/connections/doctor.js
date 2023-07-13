fetch('https://skin-likemilk.onrender.com/api/v1/health/doctor')
  .then(response => response.json())
  .then(doctors => {
    const doctorListElement = document.getElementById('doctorList');

doctors.forEach(doctor => {
  const doctorElement = document.createElement('div');
  doctorElement.className = 'col-lg-4';

  doctorElement.innerHTML = `
    <div class="row">
      <div class="card mx-auto" style="width: 20rem;">
        <img src="${doctor.imageUris}" class="card-img w-100 img-fluid" alt="Doctor Image">
        <div class="card-img-overlay text-dark d-flex align-items-end">
          <div class="card-body text-center">
            <p class="card-text text-dark h5 fw-bold">${doctor.firstName} ${doctor.lastName}</p>
            <p class="card-text text-dark h6"><small>${doctor.specialization}</small></p>
          </div>
        </div>
      </div>
    </div>
  `;

  doctorListElement.appendChild(doctorElement);
});

  })
  .catch(error => {
    console.error('Error:', error);
  });

  // <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

  // <div class="col-lg-12">
  //       <img src=${doctor.imageUris} alt="" class="bd-placeholder-img rounded-circle" width="140" height="140">
          
  //         <h2 class="pt-2">${doctor.firstName} ${doctor.lastName}</h2>
  //         <p>${doctor.specialization}</p>
  //         <p>${doctor.about}</p>
  //       </div>
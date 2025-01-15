import React from 'react';

const Certifications = () => {
  return (
    <div>
      <div className="container pt-5 pb-5 ">
      <p className="fs-2 fw-bold animate__animated animate__slideInLeft mt-5">Earned Certificates</p>
        <div className="container text-center pt-2">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0  ">
              <div className="card mb-3 " style={{ maxWidth: '540px'}}>
                <div className="row g-0 animate__animated animate__zoomIn">
                  <div className="col-md-4 ">
                    <img src="./javascript.png" className="img-fluid rounded-start ps-2 " alt="My Image"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body mt-1">
                      <h5 className="card-title pt-4">Learn Javascript Course</h5>
                
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 ">
              <div className="card mb-3 " style={{maxWidth: '540px'}}>
                <div className="row g-0 animate__animated animate__zoomIn">
                  <div className="col-md-4">
                    <img src="./fcodecamo.png" className="img-fluid rounded-start pt-3 pb-2 ps-2" alt="My Image"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body mt-1">
                      <h5 className="card-title pt-4">Responsive Web Design</h5>
  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <p className="fw-bold fs-2 animate__animated animate__slideInLeft">Technical Skills</p>
        C
        <div className="progress mb-4" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar bg-danger animate__animated animate__slideInLeft" style={{ width: '80%' }}>80%</div>
        </div>
        C++
        <div className="progress mb-4" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar bg-dark animate__animated animate__slideInLeft" style={{width: '72%'}}>72%</div>
        </div>
        HTML
        <div className="progress mb-4" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
          <div  className="progress-bar animate__animated animate__slideInLeft" style={{width: '92%' }}>92%</div>
          
        </div>
        CSS
        <div className="progress mb-4" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar bg-info animate__animated animate__slideInLeft" style={{width: '80%'}}>80%</div>
        </div>
        JAVASCRIPT
        <div className="progress mb-4" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar bg-warning animate__animated animate__slideInLeft" style={{width: '60%'}}>60%</div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

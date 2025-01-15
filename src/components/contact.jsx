import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="container mt-5 pt-5">
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <p className="fs-2 text-start animate__animated animate__slideInLeft">Let's Get In Touch</p>

          <form id="myForm" className="animate__animated animate__slideInLeft">
            <div className="mb-3 w-50">
              <label for="Name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3 w-50">
              <label for="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3 w-50">
              <label for="Number" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="number" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3 w-50 text-black">
              <label for="message" className="form-label">Message</label>
              <textarea className="text-start form-control" id="message" aria-describedby="emailHelp">
                  </textarea>
            </div>
          </form>
          
          <button type="button" id="liveToastBtn" onclick="mail()"
            className="btn btn-secondary text-start animate__animated animate__slideInLeft">Submit</button>
          <button onclick="reset()"
            className="btn btn-secondary text-start animate__animated animate__slideInLeft">Reset</button>
          <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header">
                <strong className="me-auto">Thankyou</strong>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div className="toast-body">
                Your response has been recorded!!
              </div>
            </div>
          </div>
         
        </div>
        <div className="map-container col-12 col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.5216831582234!2d85.31867755388832!3d27.650791552469325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1779642ac047%3A0xaa4ec41d86f88c37!2sKusunti%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1724424251257!5m2!1sen!2snp"
            frameborder="0" allowfullscreen="" loading="lazy" async
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
  </div>

    
  );
};

export default Contact;

import React from 'react';

const Projects = () => {
  return (
    <div>
      <div className="container mt-5 mb-4 pb-4 pt-4">
        <p className="fs-2 fw-bold animate__animated animate__fadeInDown pt-2">Projects</p>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          <div className="col animate__animated animate__zoomIn">
            <div className="card h-100 shadow-lg p-3 mb-5 bg-white rounded">
              <img src="./sci.png" className="card-img-top" alt="My Image" />
              <div className="card-body">
                <h5 className="card-title">✨ Rock-Paper-Scissors</h5>
                <p className="card-text">A dynamic web app that brings the timeless game to life with interactive JavaScript.</p>
                <button
                  onClick={() => window.location.href = 'https://www.github.com/Nishchal-ll'}
                  className="btn btn-secondary">
                  Source Code <i className="fa-solid fa-link"></i>
                </button>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <div className="progress-stacked">
                    <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0"
                      aria-valuemax="100" style={{ width: '55.3%' }}>
                      <div className="progress-bar bg-warning">JS 55.3%</div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0"
                      aria-valuemax="100" style={{ width: '44.7%' }}>
                      <div className="progress-bar" style={{ backgroundColor: 'rgb(225, 102, 36)' }}>HTML 44.7%</div>
                    </div>
                  </div>
                </small>
              </div>
            </div>
          </div>
          
          <div className="col animate__animated animate__zoomIn">
            <div className="card h-100 shadow-lg p-3 mb-5 bg-white rounded">
              <img src="./ccc.jpg" className="card-img-top" alt="My Image" />
              <div className="card-body">
                <h5 className="card-title">🧮 Calculator</h5>
                <p className="card-text">A user-friendly calculator that performs basic arithmetic operations like addition, subtraction, division, etc..</p>
                <button
                  onClick={() => window.location.href = 'https://www.github.com/Nishchal-ll'}
                  className="btn btn-secondary">
                  Source Code <i className="fa-solid fa-link"></i>
                </button>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <div className="progress-stacked">
                    <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0"
                      aria-valuemax="100" style={{ width: '100%' }}>
                      <div className="progress-bar" style={{ backgroundColor: 'rgb(225, 102, 36)' }}>HTML 100%</div>
                    </div>
                  </div>
                </small>
              </div>
            </div>
          </div>
          
          <div className="col animate__animated animate__zoomIn">
            <div className="card h-100 shadow-lg p-3 mb-5 bg-white rounded">
              <img src="./qrr.png" className="card-img-top" alt="My Image" />
              <div className="card-body">
                <h5 className="card-title">📱 QR Code Generator</h5>
                <p className="card-text">Instantly create scannable QR codes from text with this practical and customizable tool.</p>
                <button
                  onClick={() => window.location.href = 'https://www.github.com/Nishchal-ll'}
                  className="btn btn-secondary">
                  Source Code <i className="fa-solid fa-link"></i>
                </button>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <div className="progress-stacked">
                    <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0"
                      aria-valuemax="100" style={{ width: '82.2%' }}>
                      <div className="progress-bar" style={{ backgroundColor: 'rgb(225, 102, 36)' }}>HTML 82.2%</div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0"
                      aria-valuemax="100" style={{ width: '17.8%' }}>
                      <div className="progress-bar bg-warning">JS 17.8%</div>
                    </div>
                  </div>
                </small>
              </div>
            </div>
          </div>
        </div>
        <br/>
     
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col animate__animated animate__zoomIn">
          <div className="card h-100 shadow-lg p-3 mb-5 bg-white rounded">
            <img src="./ttt1.webp" className="card-img-top" alt="My Image" />
            <div className="card-body">
              <h5 className="card-title">🎮 Tic-Tac-Toe</h5>
              <p className="card-text">A classic game reimagined with clean code for a seamless gaming experience.</p>
              <button
                onClick={() => window.location.href = 'https://www.github.com/Nishchal-ll'}
                className="btn btn-secondary">
                Source Code <i className="fa-solid fa-link"></i>
              </button>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                <div className="progress-stacked">
                  <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0"
                    aria-valuemax="100" style={{ width: '100%' }}>
                    <div className="progress-bar" style={{ backgroundColor: 'rgb(255, 99, 125)' }}>C++ 100%</div>
                  </div>
                </div>
              </small>
            </div>
          </div>
        </div>

        <div className="col animate__animated animate__zoomIn">
          <div className="card h-100 shadow-lg p-3 mb-5 bg-white rounded">
            <img src="./renttt.jpeg" className="card-img-top" alt="My Image" />
            <div className="card-body">
              <h5 className="card-title">🚗 Car Rental Service</h5>
              <p className="card-text">A car rental service application to book cars with ease.</p>
              <button
                onClick={() => window.location.href = 'https://www.github.com/Nishchal-ll'}
                className="btn btn-secondary">
                Source Code <i className="fa-solid fa-link"></i>
              </button>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                <div className="progress-stacked">
                  <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0"
                    aria-valuemax="100" style={{ width: '100%' }}>
                    <div className="progress-bar" style={{ backgroundColor: 'rgb(255, 99, 125)' }}>C++ 100%</div>
                  </div>
                </div>
              </small>
            </div>
          </div>
        </div>

        <div className="col animate__animated animate__zoomIn">
          <div className="card h-100 shadow-lg p-3 mb-5 bg-white rounded">
            <img src="./qqqiz.jpeg" className="card-img-top" alt="My Image" />
            <div className="card-body">
              <h5 className="card-title">❓ Simple Quiz</h5>
              <p className="card-text">Engage with a fun quiz designed to test your knowledge on various topics.</p>
              <button
                onClick={() => window.location.href = 'https://www.github.com/Nishchal-ll'}
                className="btn btn-secondary">
                Source Code <i className="fa-solid fa-link"></i>
              </button>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                <div className="progress-stacked">
                  <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0"
                    aria-valuemax="100" style={{ width: '100%' }}>
                    <div className="progress-bar" style={{ backgroundColor: 'rgb(89, 81, 82)' }}>C 100%</div>
                  </div>
                </div>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;

import React from "react";

const Home = () => {
  return (
    <div className="container pt-5 mt-5">
      <div className="container text-center pt-5 pb-3">
        <div className="row">
          <div className="col-sm-6">
            <img
              src="./me1.jpg"
              className="text-start img-fluid animate__animated animate__slideInLeft"
              alt="Nishchal Acharya - Web Developer"
            />
          </div>
          <div className="col-sm-6 pt-5">
            <div>
              <p className="fs-3 text-start animate__animated animate__slideInRight">
                Hello, It's me
              </p>
            </div>
            <div>
              <p
                id="nishchal"
                className="fw-bold fs-1 text-start animate__animated animate__slideInRight"
              >
                Nishchal Acharya
              </p>
            </div>
            <div className="text-start fs-4 animate__animated animate__slideInRight">
              And I'm a <span className="fw-bold">Web Developer</span>
            </div>
            <div className="text-start pt-4 animate__animated animate__slideInRight">
              <p>
                On a mission to master the art of web development. I’m all about
                turning ideas into sleek, interactive websites and pushing the
                boundaries of digital design. Always on the lookout for the next
                big challenge and ready to make some web magic happen!
              </p>
            </div>
            <div
              id="icon"
              className="text-start animate__animated animate__slideInRight"
            >
              <i
                id="iconn"
                onClick={() => window.location.href = "https://www.github.com/Nishchal-ll"}
                className="fa-brands fa-square-github"
              ></i>
              <i
                id="iconn"
                onClick={() => window.location.href = "https://www.instagram.com/nishchal._.l"}
                className="fa-brands fa-square-instagram"
              ></i>
              <i
                id="iconn"
                onClick={() => window.location.href = "https://www.linkedin.com/in/nishchal-acharya-2b350a312"}
                className="fa-brands fa-linkedin"
              ></i>
            </div>
            <div className="text-start pt-3 animate__animated animate__slideInRight">
              <button
                onClick={() => window.location.href = './index3.html'}
                id="contactbtn"
                type="button"
                className="btn btn-secondary"
              >
                Contact Me
                <i className="fa-solid fa-phone"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

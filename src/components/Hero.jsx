import profileImg from "../assets/img.jpeg";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <section className="hero-section py-5" id="home">
      <div className="container">
        <div className="row align-items-center">
          {/* Right Side Content */}
          <div className="col-lg-7">
            <h2 className="display-4 fw-bold">Hello, It's Me</h2>

            <h1 className="display-4 fw-bold mb-3">Ankita Shah</h1>

            <h3 className="mb-3">
              And I'm a{" "}
              <span className="text-primary">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    2000,
                    "Frontend Developer",
                    2000,
                    "WordPress Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h3>

            <p className="lead text-white mb-4">
              I Design and Build responsive, User-friendly websites.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary btn-lg">
                Download CV
              </a>
            </div>
          </div>

          <div className="col-lg-1"></div>

          {/* Left Side Image */}
          <div className="col-lg-4 text-center mb-4 mb-lg-0">
            <img
              src={profileImg}
              alt="Ankita Shah"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

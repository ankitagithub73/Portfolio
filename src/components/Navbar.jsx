import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../App.css'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="/">
          <h2 className="m-0 logo">Ankita Shah</h2>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu + Right Side */}
        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* Center Menu */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#education">
                Education
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3 right-mbox">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-dark"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-primary"
            >
              <FaLinkedin />
            </a>

           

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light main-navigation fixed-top mb-2">
      <div
        className="collapse navbar-collapse mb-2"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav nav-list">
          <li className="nav-list-item">
            <Link to="/" className="link nav-item nav-link">
              About Me
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/projects" className="link nav-item nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/contact" className="link nav-item nav-link">
              Signup
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/resume" className="link nav-item nav-link">
              Resume
            </Link>
          </li>
          <li className="nav-list-item ml-auto">
            {' '}
            {/* Use ml-auto to align right */}
            <div className="contact">
              <span style={{ marginRight: '10px' }}> Contact: </span>
              <a href={`mailto:shawnpark2397@gmail.com`}>
                <i className="fa fa-envelope" style={{ color: 'white' }}></i>
              </a>
              <a href="https://www.linkedin.com/">
                <i className="fa fa-linkedin" style={{ color: 'white' }}></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100002545102216">
                <i className="fa fa-facebook" style={{ color: 'white' }}></i>
              </a>{' '}
              <a href="https://github.com/sptres">
                <i className="fa fa-github" style={{ color: 'white' }}></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import medLogo from './images/medLogo.png'; // Import logo image
import './Header.css'; // Import CSS for Header component styling

const Header = () => {
  // State to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to handle click event on the "About" link
  const handleAboutClick = () => {
    setShowModal(true); // Set showModal state to true to show the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false); // Set showModal state to false to hide the modal
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={medLogo} alt="Medradar Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#hospitals">Hospitals</a></li>
          {/* Call handleAboutClick function onClick */}
          <li><a href="#about" onClick={handleAboutClick}>About</a></li>
          <li><a href="#location">Location</a></li>
          <li className="login-signup">
          <button className="login">Login</button>
          <button className="signup">Signup</button>

          </li>
        </ul>
      </nav>
      {/* Modal for About information */}
      {showModal && (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-content">
            <p>Medradar is dedicated to providing fair emergency services.</p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

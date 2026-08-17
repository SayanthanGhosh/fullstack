import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowRight, FaCalendarCheck } from 'react-icons/fa';

/**
 * MainContent Component
 * Renders the right main panel with hero heading, service overview,
 * and centered primary 'Book an appointment now' button.
 */
const MainContent = ({ onBookClick }) => {
  const handleBookClick = () => {
    if (onBookClick) {
      onBookClick();
    }
  };

  return (
    <main className="main-content">
      {/* Centered Hero Content Container */}
      <div className="main-centered-container">
        {/* 1. Hero Heading */}
        <h1 className="main-heading">
          Now appointments made easier
          <span className="highlight">Try now BookEase</span>
        </h1>

        {/* 2. Short Description Paragraph */}
        <p className="main-description">
          Seamlessly connect with top-rated doctors and specialists in your area.
          Book your consultation instantly with smart matching and zero hassle.
        </p>

        {/* 3. Centered Action Button Container */}
        <div className="action-button-container my-4 text-center">
          <Button
            type="button"
            className="btn-primary-custom btn-lg-custom"
            onClick={handleBookClick}
          >
            <FaCalendarCheck className="me-2" />
            <span>Book an appointment now</span>
            <FaArrowRight className="ms-2" />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default MainContent;

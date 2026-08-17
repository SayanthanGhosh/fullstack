import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Specialties from './components/Specialties';
import Appointments from './components/Appointments';
import './App.css';

/**
 * Main App Component
 * Uses simple useState to manage section navigation ('Home', 'Specialties', 'Appointments')
 * without requiring complex router setup.
 */
function App() {
  const [activePage, setActivePage] = useState('Home');
  const [selectedSpeciality, setSelectedSpeciality] = useState('All');

  // Handle specialty selection from Specialties section
  const handleSelectSpeciality = (specialityName) => {
    setSelectedSpeciality(specialityName);
    setActivePage('Appointments');
  };

  // Reset filter when navigating directly to Appointments from sidebar
  const handlePageChange = (pageName) => {
    if (pageName === 'Appointments' && activePage !== 'Appointments') {
      setSelectedSpeciality('All');
    }
    setActivePage(pageName);
  };

  return (
    <div className="app-container">
      {/* Left Sidebar Navigation */}
      <Sidebar activePage={activePage} setActivePage={handlePageChange} />

      {/* Right Main Content Area (Conditional Rendering based on activePage state) */}
      <div className="main-viewport flex-grow-1 overflow-auto">
        {activePage === 'Home' && (
          <MainContent onBookClick={() => handlePageChange('Appointments')} />
        )}

        {activePage === 'Specialties' && (
          <Specialties onSelectSpeciality={handleSelectSpeciality} />
        )}

        {activePage === 'Appointments' && (
          <Appointments initialSpeciality={selectedSpeciality} />
        )}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FaUserMd, FaTeethOpen, FaHandHoldingMedical, FaHeartbeat, FaArrowRight } from 'react-icons/fa';

/**
 * Specialties Component
 * Displays available medical specialties as cards in a responsive grid.
 * Clicking any card transitions to the Appointments section filtered by that specialty.
 */
const Specialties = ({ onSelectSpeciality }) => {
  const specialtiesList = [
    {
      id: 'gp',
      title: 'General Physician',
      icon: <FaUserMd className="specialty-icon-svg text-primary" />,
      description: 'Comprehensive primary health care, diagnostic evaluations, and routine medical checkups.',
      badge: 'Primary Care',
    },
    {
      id: 'dentist',
      title: 'Dentist',
      icon: <FaTeethOpen className="specialty-icon-svg text-info" />,
      description: 'Oral hygiene treatments, cosmetic dentistry, cavity fillings, and root canal therapy.',
      badge: 'Dental Care',
    },
    {
      id: 'derma',
      title: 'Dermatologist',
      icon: <FaHandHoldingMedical className="specialty-icon-svg text-warning" />,
      description: 'Advanced skin treatments, acne management, allergic skin tests, and scalp care.',
      badge: 'Skin & Hair',
    },
    {
      id: 'cardio',
      title: 'Cardiologist',
      icon: <FaHeartbeat className="specialty-icon-svg text-danger" />,
      description: 'Heart disease diagnosis, ECG consultations, blood pressure management, and cardiac wellness.',
      badge: 'Heart Care',
    },
  ];

  return (
    <div className="specialties-section p-4">
      {/* Section Header */}
      <div className="text-center mb-4">
        <h2 className="section-title">Medical Specialties</h2>
        <p className="section-subtitle text-muted">
          Select a specialty below to view available doctors and schedule an instant consultation.
        </p>
      </div>

      {/* Grid of 4 Specialty Cards */}
      <Row className="g-4">
        {specialtiesList.map((item) => (
          <Col key={item.id} xs={12} sm={6} lg={6} xl={3}>
            <Card
              className="specialty-card h-100 border-0 shadow-sm hover-lift"
              onClick={() => onSelectSpeciality(item.title)}
              style={{ cursor: 'pointer' }}
            >
              <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                <div className="specialty-icon-wrapper mb-3">
                  {item.icon}
                </div>
                <span className="badge bg-light text-primary mb-2 px-3 py-1 rounded-pill border">
                  {item.badge}
                </span>
                <Card.Title className="fw-bold fs-5 mb-2">{item.title}</Card.Title>
                <Card.Text className="text-muted small flex-grow-1 mb-3">
                  {item.description}
                </Card.Text>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="rounded-pill w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSpeciality(item.title);
                  }}
                >
                  <span>View Doctors</span>
                  <FaArrowRight size={12} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Specialties;

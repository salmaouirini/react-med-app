import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCardIC.css';
import Notification from '../../Notification/Notification';
import AppointmentFormIC from '../AppointmentFormIC/AppointmentFormIC';
import { v4 as uuidv4 } from 'uuid';

const DoctorCardIC = ({ name, speciality, experience, ratings, profilePic }) => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleBooking = () => {
    setShowModal(true);
  };

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
    setAppointments(updatedAppointments);
  };

  const handleFormSubmit = (appointmentData) => {
    const newAppointment = {
      id: uuidv4(),
      ...appointmentData, // Make sure all fields are included here
    };
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    setShowModal(false);
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          {profilePic ? (
            <img src={profilePic} alt={`${name}'s profile`} />
          ) : (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.908 10.647a5.622 5.622 0 1 0-4.926.041A7.5 7.5 0 0 0 0 17.743a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 .5-.5v-3a2 2 0 0 1 2-2h.957a.25.25 0 0 0 .173-.431 7.443 7.443 0 0 0-2.722-1.665ZM8.25 15.118a.75.75 0 1 1-1.5 0v-1.655a.75.75 0 0 1 1.5 0ZM7.4 9.243a3.626 3.626 0 0 1-3.619-3.622A3.569 3.569 0 0 1 4.2 3.967a7.631 7.631 0 0 0 4.743 1.655A7.677 7.677 0 0 0 11 5.335c.008.1.029.188.029.286A3.626 3.626 0 0 1 7.4 9.243Z" fill="#12aeeb" className="fill-000000"></path>
              <path d="M24 15.5a1.5 1.5 0 0 0-1.5-1.5h-1.75a.5.5 0 0 1-.5-.5V13a1.752 1.752 0 0 0-1.75-1.75h-2A1.752 1.752 0 0 0 14.75 13v.5a.5.5 0 0 1-.5.5H12.5a1.5 1.5 0 0 0-1.5 1.5v7a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5ZM16.25 13a.251.251 0 0 1 .25-.25h2a.251.251 0 0 1 .25.25v.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5ZM20 19.75a.25.25 0 0 1-.25.25H19a.5.5 0 0 0-.5.5v.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.75a.5.5 0 0 0-.5-.5h-.75a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25H16a.5.5 0 0 0 .5-.5v-.75a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.75a.5.5 0 0 0 .5.5h.75a.25.25 0 0 1 .25.25Z" fill="#12aeeb" className="fill-000000"></path>
            </svg>
          )}
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
        </div>
      </div>

      <div className="doctor-card-options-container">
        <Popup
          style={{ backgroundColor: '#FFFFFF' }}
          trigger={
            <button className={`book-appointment-btn ${appointments.length > 0 ? 'cancel-appointment' : ''}`}>
              {appointments.length > 0 ? (
                <div>Cancel Appointment</div>
              ) : (
                <div>Book Appointment</div>
              )}
              <div>No Booking Fee</div>
            </button>
          }
          modal
          open={showModal}
          onClose={() => setShowModal(false)}
        >
          {(close) => (
            <div className="doctorbg" style={{ height: '100vh', overflow: 'scroll' }}>
              <div>
                <div className="doctor-card-profile-image-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                </div>
                <div className="doctor-card-details">
                  <div className="doctor-card-detail-name">{name}</div>
                  <div className="doctor-card-detail-speciality">{speciality}</div>
                  <div className="doctor-card-detail-experience">{experience} years experience</div>
                  <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
                </div>
              </div>

              {appointments.length > 0 ? (
                <>
                  <h3 style={{ textAlign: 'center' }}>Appointment Booked!</h3>

                    <div>
                    <>
                    {/* Logging to debug */}
                    {console.log('Rendering Notification with Appointment:', appointments[0])}
                    <Notification
                    appointment={appointments[0]} // Pass the first appointment
                    onCancel={() => handleCancel(appointments[0].id)} // Cancel the first appointment
                    />
                </>
                    </div>
                </>
              ) : (
                <AppointmentFormIC doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} />
              )}
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default DoctorCardIC;

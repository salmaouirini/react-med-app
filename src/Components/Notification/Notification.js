import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = ({ appointment, onCancel }) => {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    if (!appointment) {
      setShowNotification(false); // Hide notification when appointment is canceled
    }
    console.log('Received appointment in Notification:', appointment); // Log the received appointment
  }, [appointment]);

  if (!showNotification || !appointment) {
    return null; // Do not render if notification is not to be shown or appointment is null
  }

  return (
    <div className="notification-container">
      <div className="notification-content">
        <h4>Appointment Details</h4>
        <p><strong>Name:</strong> {appointment.name}</p>
        <p><strong>Phone Number:</strong> {appointment.phoneNumber}</p>
        <p><strong>Doctor:</strong> {appointment.doctorName}</p>
        <p><strong>Doctor speciality:</strong> {appointment.doctorSpeciality}</p>
        <p><strong>Date:</strong> {appointment.selectedDate}</p> {/* Corrected */}
        <p><strong>Time:</strong> {appointment.selectedSlot}</p> {/* Corrected */}
        <button onClick={onCancel} className="cancel-button">Cancel Appointment</button>
      </div>
    </div>
  );
};

export default Notification;

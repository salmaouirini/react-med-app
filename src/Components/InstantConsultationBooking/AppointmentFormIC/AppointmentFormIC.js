import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes if not already

const AppointmentFormIC = ({ doctorName, doctorSpeciality, availableSlots = [], onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber, selectedDate, selectedSlot });
        setName('');
        setPhoneNumber('');
        setSelectedDate('');
        setSelectedSlot('');
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="appointmentDate">Date of Appointment:</label>
                <input
                    type="date"
                    id="appointmentDate"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="timeSlot">Select Time Slot:</label>
                <select
                    id="timeSlot"
                    value={selectedSlot}
                    onChange={(e) => handleSlotSelection(e.target.value)}
                    required
                >
                    <option value="">Select a time slot</option>
                    {availableSlots.map((slot, index) => (
                        <option key={index} value={slot}>
                            {slot}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

// Prop Types for type checking
AppointmentFormIC.propTypes = {
    doctorName: PropTypes.string.isRequired,
    doctorSpeciality: PropTypes.string.isRequired,
    availableSlots: PropTypes.array, // Make this optional
    onSubmit: PropTypes.func.isRequired,
};

export default AppointmentFormIC;

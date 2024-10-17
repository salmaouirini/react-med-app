import React, { useState } from 'react'; 
import PropTypes from 'prop-types';
import Notification from '../../Notification/Notification';

const AppointmentFormIC = ({ doctorName, doctorSpeciality, availableSlots = [], onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [appointment, setAppointment] = useState(null); // State for appointment

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newAppointment = { 
            name, 
            phoneNumber, 
            doctorName,
            doctorSpeciality, 
            selectedDate,
            selectedSlot 
        };
    
        console.log('Form Submitted:', newAppointment); // Check the form data
    
        setAppointment(newAppointment); // Save the appointment data
        onSubmit(newAppointment);
        setName('');
        setPhoneNumber('');
        setSelectedDate('');
        setSelectedSlot('');
    };
    

    const handleCancelAppointment = () => {
        setAppointment(null); // Clear the appointment when canceled
    };

    return (
        <div>
            {/* Display the Notification component */}
            {appointment && (
                <>
                    {/* Add another console log here */}
                    {console.log('Rendering Notification with Appointment:', appointment)}
                    <Notification
                        appointment={appointment}
                        username={name}
                        onCancel={handleCancelAppointment} // Pass cancel handler to Notification
                    />
                </>
            )}
            <form onSubmit={handleFormSubmit} className="appointment-form">
                {/* Form Fields */}
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
        </div>
    );
};

// Prop Types and default props...


// Prop Types for type checking
AppointmentFormIC.propTypes = {
    doctorName: PropTypes.string.isRequired,
    doctorSpeciality: PropTypes.string.isRequired,
    availableSlots: PropTypes.array, // Make this optional
    onSubmit: PropTypes.func.isRequired,
};

// Default time slots if not provided
AppointmentFormIC.defaultProps = {
    availableSlots: [
        '8:00 AM - 8:30 AM',
        '8:30 AM - 9:00 AM',
        '9:00 AM - 9:30 AM',
        '9:30 AM - 10:00 AM',
        '10:00 AM - 10:30 AM',
        '10:30 AM - 11:00 AM',
        '11:00 AM - 11:30 AM',
        '11:30 AM - 12:00 PM',
        '12:00 PM - 12:30 PM',
        '12:30 PM - 1:00 PM',
        '1:00 PM - 1:30 PM',
        '1:30 PM - 2:00 PM',
        '2:00 PM - 2:30 PM',
        '2:30 PM - 3:00 PM',
        '3:00 PM - 3:30 PM',
        '3:30 PM - 4:00 PM',
        '4:00 PM - 4:30 PM',
        '4:30 PM - 5:00 PM',
        '5:00 PM - 5:30 PM',
        '5:30 PM - 6:00 PM',
        '6:00 PM - 6:30 PM',
        '6:30 PM - 7:00 PM',
        '7:00 PM - 7:30 PM',
        '7:30 PM - 8:00 PM'
    ]
};

export default AppointmentFormIC;

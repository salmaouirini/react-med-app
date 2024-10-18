import React, { useState } from 'react';
import './ReviewForm.css';
import Popup from 'reactjs-popup';

const ReviewForm = ({ doctors = [] }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null); // Selected doctor for feedback
  const [feedbackData, setFeedbackData] = useState({}); // Store feedback for all doctors
  const [selectedDoctors, setSelectedDoctors] = useState([]); // List of selected doctors for table display
  const [rating, setRating] = useState(0); // Rating state

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const comments = formData.get('comments');

    // Update feedback data with the new review for the selected doctor
    if (selectedDoctor) {
      setFeedbackData((prevData) => ({
        ...prevData,
        [selectedDoctor.id]: { name, rating, comments },
      }));
    }

    setSelectedDoctor(null); // Reset selected doctor after feedback submission
    setRating(0); // Reset rating after feedback submission
  };

  const handleAddDoctor = (doctor) => {
    // Add doctor to the selectedDoctors list if it's not already selected
    if (!selectedDoctors.some(selected => selected.id === doctor.id)) {
      setSelectedDoctors((prev) => [...prev, doctor]);
      setSelectedDoctor(doctor); // Automatically open modal after adding
    }
  };

  const handleStarClick = (index) => {
    setRating(index + 1); // Set rating based on star clicked
  };

  return (
    <div className="review-form-container">
      <h2>Reviews</h2>

      {/* Table to display all doctors with the option to add feedback */}
      <table className="doctor-review-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>Add to Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor.id}>
              <td>{index + 1}</td>
              <td>{doctor.name}</td>
              <td>{doctor.speciality}</td>
              <td>
                <button onClick={() => handleAddDoctor(doctor)} className="btn-add">Add</button>
              </td>
              <td>
                {feedbackData[doctor.id] ? (
                  <span>Review Given</span>
                ) : (
                  <span>No Review Yet</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal to provide feedback */}
      {selectedDoctor && (
        <Popup open={!!selectedDoctor} onClose={() => setSelectedDoctor(null)} modal>
          <center><
            div className="modal-content">
            <h3>Provide Feedback for {selectedDoctor.name}</h3>
            <form onSubmit={handleFeedbackSubmit}>
              <div>
                <label>Your Name:</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>Rating:</label>
                <div className="star-rating">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      onClick={() => handleStarClick(index)}
                      style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <label>Comments:</label>
                <textarea name="comments" required></textarea>
              </div>
              <button type="submit">Submit Feedback</button>
            </form>
          </div></center>
        </Popup>
      )}
    </div>
  );
};

export default ReviewForm;

import React from 'react';
import useForm from '../hooks/useForm';
import { fetchWithAuth } from '../api/api';

interface AppointmentFormProps {
  onSubmit: (appointment: any) => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSubmit }) => {
  const { values, errors, handleChange, handleSubmit: handleFormSubmit } = useForm(
    {
      patientName: '',
      doctorId: '',
      date: '',
      time: '',
      phone: '',  // Make sure phone is here
    },
    async (formData) => {
      const newAppointment = {
        patientName: formData.patientName,
        doctor: `Dr. ${formData.doctorId}`,
        date: formData.date,
        time: formData.time,
        phone: formData.phone,
      };
      try {
        const response = await fetchWithAuth('http://localhost:3000/appointments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newAppointment),
        });
        if (response.id) {
          onSubmit(response); // Call the onSubmit prop after successful API response
        }
      } catch (err) {
        console.error('Appointment submission error:', err);
        alert('Failed to schedule appointment. Please try again.');
      }
    }
  );

  return (
    <form onSubmit={handleFormSubmit}> {/* Use handleFormSubmit from the hook */}
      <input
        type="text"
        name="patientName"
        value={values.patientName}
        onChange={handleChange}
      />
      {errors.patientName && <p>{errors.patientName}</p>}
      
      {/* Add Phone Input */}
      <input
        type="text"
        name="phone"
        value={values.phone}
        onChange={handleChange}
      />
      {errors.phone && <p>{errors.phone}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;

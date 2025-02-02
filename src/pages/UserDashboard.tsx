import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import AppointmentForm from '../components/AppointmentForm';
import ServiceList from '../components/ServiceList';

const UserDashboard: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <p>Error: AuthContext is not available</p>;
  }

  const { user, logout } = authContext;

  if (!user) {
    return <p>Error: User data is not available.</p>;
  }

  const testResults = user.testResults ?? [];
  const appointments = user.appointments ?? [];

  const handleAppointmentSubmit = (appointmentData: any) => {
    console.log('Appointment submitted:', appointmentData);
  };

  return (
    <div className="w-screen h-screen p-2 bg-white">
      <h1 className="text-4xl font-bold text-green-500 mb-6">Patient Dashboard</h1>
      <button
        onClick={logout}
        className="mb-6 bg-red-500 text-white py-2 px-4 font-bold rounded-lg hover:bg-red-600"
      >
        Logout
      </button>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Test Results</h2>
        <div className="grid gap-4">
          {testResults.length > 0 ? (
            testResults.map((result) => (
              <div key={result.id} className="bg-green-100 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-green-700">{result.testName}</h3>
                <p className="text-green-600">Result: {result.result}</p>
                <p className="text-green-600">Date: {result.date}</p>
              </div>
            ))
          ) : (
            <p className="text-green-600">No test results available.</p>
          )}
        </div>
      </div>

      <div className="bg-white mb-4 w-screen h-screen">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Schedule an Appointment</h2>
        <AppointmentForm onSubmit={handleAppointmentSubmit} />
      </div>

      <div className="bg-white mb-4">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Services</h2>
        <ServiceList />
      </div>

      <div className="w-screen h-screen bg-white">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Upcoming Appointments</h2>
        <div className="grid gap-4">
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <div key={appointment.id} className="bg-green-100 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-green-700">Appointment with {appointment.doctor}</h3>
                <p className="text-green-600">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
            ))
          ) : (
            <p className="text-green-600">No upcoming appointments.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

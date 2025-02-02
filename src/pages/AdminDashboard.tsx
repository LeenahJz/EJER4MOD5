import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import DoctorCard from '../components/DoctorCard';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
}

const AdminDashboard: React.FC = () => {
  const authContext = useContext(AuthContext);

  // Handle the case where AuthContext or user is not available
  if (!authContext || !authContext.user) {
    return <p>Error: AuthContext or user is not available</p>;
  }

  const { user, logout } = authContext;
  const [doctors, setDoctors] = useState<Doctor[]>([
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Pediatrician' },
  ]);
  const [newDoctor, setNewDoctor] = useState<Doctor>({ id: 0, name: '', specialty: '' });

  const handleAddDoctor = () => {
    if (newDoctor.name && newDoctor.specialty) {
      setDoctors([
        ...doctors,
        { id: doctors.length + 1, name: newDoctor.name, specialty: newDoctor.specialty },
      ]);
      setNewDoctor({ id: 0, name: '', specialty: '' });
    }
  };

  const handleRemoveDoctor = (id: number) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
  };

  return (
    <div className="w-screen h-screen p-6 bg-white">
      <h1 className="text-4xl font-bold text-green-500 mb-6">Admin Dashboard</h1>
      <button
        onClick={logout}
        className="mb-6 bg-red-500 text-white py-2 px-4 font-bold rounded-lg hover:bg-red-600"
      >
        Logout
      </button>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Add Doctor</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Doctor Name"
            value={newDoctor.name}
            onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
            className="px-3 py-2 border border-green-300 rounded-lg text-green-700 focus:outline-none focus:border-green-500"
          />
          <input
            type="text"
            placeholder="Specialty"
            value={newDoctor.specialty}
            onChange={(e) => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
            className="px-3 py-2 border border-green-300 rounded-lg text-green-700 focus:outline-none focus:border-green-500"
          />
          <button
            onClick={handleAddDoctor}
            className="bg-green-500 text-white py-2 px-4 font-bold rounded-lg hover:bg-green-600"
          >
            Add Doctor
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-green-600 mb-4">Manage Doctors</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-green-100 p-4 rounded-lg shadow-lg flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-bold text-green-700">{doctor.name}</h3>
                <p className="text-green-600">{doctor.specialty}</p>
              </div>
              <button
                onClick={() => handleRemoveDoctor(doctor.id)}
                className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white mb-4 w-screen h-screen">
        <h2 className="text-2xl font-bold text-green-700 mb-4"></h2>
        <DoctorCard />
      </div>
    </div>
  );
};

export default AdminDashboard;

import React, { useEffect, useState } from 'react';
import { fetchWithAuth } from '../api/api';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  experience: string;
};

const DoctorCard: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchDoctors = async () => {
    try {
      const data: Doctor[] = await fetchWithAuth('http://localhost:3000/doctors');
      setDoctors(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="w-screen h-screen px-6 py-12 bg-white">
      {error && <p>{error}</p>}
      <h2 className="text-4xl font-bold text-center text-green-500 py-2">Specialists</h2>
      <div className="text-center my-4">
        <button onClick={fetchDoctors} className="w-full bg-green-300 text-green-900 py-2 px-4 font-bold rounded-lg hover:bg-green-400 mb-2">
          Reload Doctors
        </button>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="flex flex-col items-center bg-green-100 text-green-500 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold text-center text-green-500 py-2">{doctor.name}</h2>
            <p className='text-xl font-semibold text-center text-green-700'>{doctor.specialty}</p>
            <p className='text-xl font-semibold text-center text-green-700'>{doctor.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorCard;

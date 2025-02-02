import React, { useEffect, useState } from 'react';

interface Service {
  id: number;
  name: string;
  description: string;
}

const ServiceList: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = async () => {
    try {
      const response = await fetch('http://localhost:3000/services');
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }
      const data: Service[] = await response.json();
      setServices(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="bg-green-950 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-green-300 mb-10">Services</h2>
      {error && <p>{error}</p>}
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 p-4 py-2 mb-4">
        <button
          className="w-full bg-green-300 text-green-900 py-2 px-4 font-bold rounded-lg hover:bg-green-400 mb-2"
          onClick={fetchServices}
        >
          Reload Services
        </button>
        <ul className="grid md:grid-cols-2 mb-4 gap-6 list-disc list-inside"></ul>
        {services.map((service) => (
          <li
            key={service.id}
            className="grid md:grid-cols-1 bg-white text-green-900 font-bold p-6 mb-2 rounded-lg shadow-lg hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-bold text-center text-green-500 py-2">{service.name}</h2>
            <p className="text-xl font-semibold text-center text-green-600">{service.description}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;

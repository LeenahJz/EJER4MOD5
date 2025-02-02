import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Homepage: React.FC = () => {
    const navigate = useNavigate();
  
    const handleLoginClick = () => {
      navigate('/login');
    };
  
    return (
      <div className='w-full h-screen'>
        <img className="top-0 left-0 w-full h-screen object-cover" src="https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1580196666465-doctor.jpg" alt="Hospital"/>
        <div className="bg-green-950/40 absolute top-0 left-0 w-full h-screen"/>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
          <div className="max-w-[1100px] m-auto absolute p-4">
            <p className="font-bold text-l">Welcome to Green Hospital</p>
            <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Your Healthcare</h1>
            <h1 className="font-bold text-5xl text-green-300 md:text-7xl drop-shadow-2xl">Destination</h1>
            <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">Log in to see more options.</p>
            <button onClick={handleLoginClick} className="text-white font-bold text-xl p-4 bg-green-300">Log In</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Homepage;
  
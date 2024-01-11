import React from 'react';
import Hero from '../Components/Hero'; // Assuming the file path is correct
import Recommender from '../Components/Recommender'; // Assuming the file path is correct
import Footer from '../Components/Footer';

const LandingPage = () => {
  return (
    <div className='bg-black'>
      {/* Hero Component */}
      <Hero />
      {/* Recommender Component */}
      <Recommender />
       {/* Footer Component */}
       <Footer />
    </div>

  );
};

export default LandingPage;



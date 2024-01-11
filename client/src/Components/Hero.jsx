import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import logo from '../Images/logo.png';
import heroBackground1 from '../Images/oppenheimer.png';
import heroBackground2 from '../Images/Jhonwick.png';
import heroBackground3 from '../Images/boodhounds.jpeg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const films = [
    { title: 'Oppenheimer', background: heroBackground1 },
    { title: 'Jhonwick', background: heroBackground2 },
    { title: 'boodhounds', background: heroBackground3 },
  ];

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === films.length - 1 ? 0 : currentSlide + 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${films[currentSlide].background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        transition: 'background-image 1s ease',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col text-white font-Montserrat items-start p-6 max-w-[1600px] md:mt-[10px]">
        <div className="flex justify-between items-center w-full mb-6 md:mb-0">
          <img src={logo} alt="ecotrade" className="w-[100px]" />
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white font-Montserrat hover:text-Hoverlgreen">
              Home
            </a>
            <a href="#" className="text-white font-Montserrat hover:text-Hoverlgreen">
              Movies
            </a>
            <a href="#" className="text-white font-Montserrat hover:text-Hoverlgreen">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-[500px]">
          <h1 className="text-8xl font-Montserrat md:text-5xl font-bold mb-4">{films[currentSlide].title}</h1>
          <p className="text-lg font-Montserrat md:text-xl mb-4">
            Biography, science, history
          </p>
          <div className="flex gap-1 mb-6 text-Yellow">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <button className="px-8 py-3 font-Montserrat font-bold inline-block bg-Yellow text-gray-950 hover:bg-Hoverlgreen">
            Try It Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

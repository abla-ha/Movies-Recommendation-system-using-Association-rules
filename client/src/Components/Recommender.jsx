import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useTypewriter } from 'react-simple-typewriter';
import axios from 'axios';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../Figures', false, /\.(jpg)$/));

const Recommender = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [typeEffect] = useTypewriter({
    words: ["just a click!"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/recommend/${searchTerm}`);
      const data = response.data;

      setRecommendations(data.unique_recommended_books);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <section className="h-full bg-black text-white flex flex-col items-center justify-center">
      <div className="container mx-auto mt-24 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Find the best movies with <span>{typeEffect}</span>
        </h1>
        <div className="flex mt-16 items-center justify-center mb-24">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-24 py-3 text-black rounded-l-md outline-none focus:ring-2 focus:ring-Yellow"
          />
          <button className="px-4 py-4 bg-Yellow rounded-r-md" onClick={handleSearch}>
            <FaSearch className="text-black" />
          </button>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-4 gap-4 items-center justify-center">
            {recommendations.map((movieName, index) => (
              <div key={index} className="text-center">
                <img
                  src={require(`../Figures/${movieName}.jpg`)}
                  alt={movieName}
                  style={{ maxWidth: '200px', maxHeight: '300px', margin: '0 auto' }}
                />
                <p className="text-white mt-2">{movieName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommender;

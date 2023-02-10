import React, { useState } from 'react';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartGame = () => {
    setIsLoading(true);
    setTimeout(() => {
        window.location.href = '/chess-board';
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-900 h-screen w-screen flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">Welcome to the Chess Game</h1>
        <p className="text-xl text-center text-gray-600 mt-5">Ready to play?</p>
        <div className="mt-10 flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg"
            onClick={handleStartGame}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Start Game'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

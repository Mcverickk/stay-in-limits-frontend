import React from 'react';

export default function CustomFooter() {
  return (
    <footer className="py-6 bg-gray-800 flex justify-around items-center px-8 w-full">
      {/* Polygon */}
      <div className="flex items-center space-x-2">
      <img
          src="icons/polygon.svg" // This assumes the eth.svg is inside the public folder
          alt="Polygon"
          className="w-6 h-6" // Adjust size as needed
        />
        <span className="capitalize text-3xl italic text-white">Polygon</span>
      </div>

      {/* Base */}
      <div className="flex items-center space-x-2">
      <img
          src="icons/base2.svg" // This assumes the eth.svg is inside the public folder
          alt="Polygon"
          className="w-6 h-6" // Adjust size as needed
        />
        <span className="capitalize text-2xl text-white">Base</span>
      </div>

      {/* BSC */}
      <div className="flex items-center space-x-2">
      <img
          src="icons/binance.svg" // This assumes the eth.svg is inside the public folder
          alt="Polygon"
          className="w-6 h-6" // Adjust size as needed
        />
        <span className="capitalize text-2xl text-white">BSC</span>
      </div>

      {/* Arbitrum */}
      <div className="flex items-center space-x-2">
      <img
          src="icons/arbitrum.svg" // This assumes the eth.svg is inside the public folder
          alt="Polygon"
          className="w-6 h-6" // Adjust size as needed
        />
        <span className="capitalize text-2xl text-white">Arbitrum</span>
      </div>
    </footer>
  );
}

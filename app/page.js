import React from "react";
import TickerHeader from "./components/Ticker";
import LaunchButton from "./components/LaunchButton";
import CustomFooter from "./components/Footer" // Import the Client Component

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between mt-8">
      {/* Moving Ticker */}
      <TickerHeader />

      {/* Main Content */}
      <div className="text-center flex flex-col items-center justify-center flex-grow">
        <h1 className="text-6xl italic font-bold">Stay <span className="text-gray-600"> In</span></h1>
        <h1 className="text-5xl italic font-bold text-white mt-4">LIMITS</h1>
        <div className="mt-8">
        <LaunchButton /> {/* Client Component for the button */}
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="py-4 bg-gray-800 flex justify-center space-x-8">
        <div className="py-4 bg-gray-800 flex justify-center space-x-8 mx-auto w-full max-w-screen-xl">
        {["polygon", "base", "bsc", "arbitrum"].map((chain, index) => (
          <span key={index} className="capitalize text-2xl text-white">
            {chain}
          </span>
        ))}
        </div>
      </footer> */}
      <CustomFooter/>
    </main>
  );
}

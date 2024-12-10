"use client"; // Enable client-side rendering

import React from "react";

export default function LaunchButton() {
  const handleClick = () => {
    window.location.href = "/buy-sell";
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 font-bold py-2.5 px-5 rounded-md  group-hover:bg-opacity-0 w-auto
      relative inline-flex items-center justify-center  overflow-hidden text-sm  text-gray-900  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
    >
      Launch App
    </button>
  );
}
// relative px-5 py-2.5  bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0
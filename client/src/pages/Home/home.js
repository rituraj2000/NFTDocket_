import React from "react";

function Home() {
  return (
    <div className="h-screen bg-gray-300 flex flex-col">
      <div className="w-full bg-teal-500 p-6 text-right text-white">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
      <div className="flex-1 flex">
        <div className="w-1/4 bg-teal-500 h-full flex flex-col items-center justify-center p-6 text-white">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6">
            Create new warranty
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Previous Warranties
          </button>
        </div>
        <div className="w-3/4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-teal-500 mb-6">
              Welcome to Home
            </h1>
            <p className="text-gray-700">
              This is a sample home page built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

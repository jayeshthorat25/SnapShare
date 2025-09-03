import React, { useState } from 'react';

// The main App component that renders the entire UI
const Landing = () => {
  // State for managing a message box, if needed
  const [message, setMessage] = useState(null);

  // Function to show a message box
  const showMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="relative min-h-screen font-sans antialiased text-white bg-gray-900">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://travelguideandphotography.com/wp-content/uploads/2020/03/d8_2763-hoi-an-lanterns.jpg?w=596&h=397"
          alt="Night street in Asia with lanterns"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Main Content Container with Z-index to be on top of the background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between p-6">
          <div className="text-2xl font-bold">
            SnapShare
          </div>
          <button className="px-4 py-2 text-white transition duration-300 ease-in-out bg-gray-700 rounded-full hover:bg-white hover:text-gray-900">
            SIGN IN
          </button>
        </header>

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center flex-grow p-4 text-center">
          <h1 className="mb-4 text-6xl font-bold">
            SnapShare
          </h1>
          <p className="max-w-xl mx-auto mb-8 text-lg font-light">
            SnapShare is an image-sharing app built with the React and styled with the Material-UI library.
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              className="px-6 py-3 font-semibold text-white transition duration-300 ease-in-out transform border-2 border-white rounded-full bg-white/20 backdrop-blur-sm hover:scale-105 hover:bg-white hover:text-gray-900"
              onClick={() => showMessage("Sign Up button clicked!")}
            >
              SIGN UP
            </button>
            <button
              className="px-6 py-3 font-semibold text-white transition duration-300 ease-in-out transform border-2 border-white rounded-full bg-white/20 backdrop-blur-sm hover:scale-105 hover:bg-white hover:text-gray-900"
              onClick={() => showMessage("LOG IN button clicked!")}
            >
              LOG IN
            </button>
          </div>
        </main>

        {/* Message Box */}
        {message && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-6 text-center text-gray-900 bg-white rounded-lg shadow-lg">
              <p className="mb-4">{message}</p>
              <button
                className="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-gray-700 rounded-full hover:bg-gray-600"
                onClick={() => setMessage(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;

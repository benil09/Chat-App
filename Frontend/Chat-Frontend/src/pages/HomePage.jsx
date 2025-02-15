import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
    
      
      <main className="text-center mt-12">
        <h2 className="text-4xl font-extrabold text-gray-900">Welcome to Chat.io</h2>
        <p className="mt-4 text-gray-600">Discover amazing content and explore new opportunities with us.</p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
          Lets Chat
        </button>
      </main>

      <footer className="mt-16 text-gray-500 text-sm">
        &copy; 2025 My Website. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;

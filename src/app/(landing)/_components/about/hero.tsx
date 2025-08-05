import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          About Chat Life
          <div className="w-20 h-1 bg-[#615EF0] mx-auto mt-4 rounded-full"></div>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Connecting hearts and minds across the globe, breaking down barriers
          and building bridges through the power of seamless communication.
        </p>
      </div>
    </section>
  );
};

export default Hero;

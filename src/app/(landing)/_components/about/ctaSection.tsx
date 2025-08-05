import React from "react";
import Link from "next/link";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-[#615EF0] to-[#5048e6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Connect?
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Join thousands of users who trust Chat Life for their communication
          needs
        </p>
        <Link
          href="/register"
          className="inline-block bg-white text-[#615EF0] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Start Chatting Now
        </Link>
      </div>
    </section>
  );
};

export default CTASection;

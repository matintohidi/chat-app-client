import React from "react";

const StorySection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
          Our Story
        </h2>
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            Chat Life was born from a simple yet powerful belief: everyone
            deserves the freedom to communicate without boundaries. We
            recognized the need for a platform that not only connects people
            worldwide but also provides specialized support for communities
            facing communication challenges.
          </p>
          <p>
            With a particular focus on serving Iranian communities and global
            users seeking unrestricted communication, we've built a platform
            that prioritizes reliability, security, and seamless connectivity
            from anywhere in the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

import React from "react";
import { Target, Eye } from "lucide-react";

const MissionVision: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">
          Mission & Vision
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#615EF0] rounded-full flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#615EF0]">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide unrestricted, secure communication tools that empower
              individuals and communities worldwide to connect, share, and
              thrive without interruption. We are committed to breaking down
              digital barriers and ensuring everyone has access to reliable
              communication technology.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#615EF0] rounded-full flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#615EF0]">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become the world's most trusted communication platform,
              fostering global understanding and connection. We envision a
              future where geographical, political, and technological barriers
              cannot prevent meaningful human connections and free expression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

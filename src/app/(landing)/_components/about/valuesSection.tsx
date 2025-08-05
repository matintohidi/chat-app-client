import React from "react";
import { Shield, Globe, Users, Rocket } from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 border-transparent hover:border-[#615EF0]">
      <div className="w-16 h-16 bg-[#615EF0] rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-4">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Privacy & Security",
      description:
        "Your conversations are protected with end-to-end encryption and robust security measures, ensuring your privacy is never compromised.",
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Global Accessibility",
      description:
        "We believe communication is a fundamental right. Our platform works reliably from any location, bypassing restrictions and limitations.",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Community Focus",
      description:
        "We're dedicated to serving diverse communities with specialized features and support, particularly for underserved populations.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Innovation",
      description:
        "Continuously improving our technology to provide the most reliable, fast, and user-friendly communication experience possible.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">
          Core Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

import React from "react";

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
  return (
    <div className="text-center">
      <div className="text-4xl lg:text-5xl font-bold text-[#615EF0] mb-2">
        {number}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const ImpactSection: React.FC = () => {
  const stats = [
    { number: "2,291+", label: "Happy Members" },
    { number: "4.8/5", label: "User Rating" },
    { number: "24/7", label: "Reliability" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
          Our Impact
        </h2>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-12">
          <p>
            Built by a diverse team of communication specialists, security
            experts, and community advocates, Chat Life represents the
            collective effort to democratize global communication. Our
            international team brings together expertise from technology, human
            rights, and community building.
          </p>
          <p>
            We're proud to serve a growing global community that values freedom,
            connection, and authentic communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

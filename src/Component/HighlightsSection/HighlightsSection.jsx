import React from "react";
import { highlights } from "../../utils/highlights ";

const HighlightsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="px-4 md:px-12 lg:px-0 lg:w-11/12 mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6  gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-md transition text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;

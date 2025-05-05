import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const OrganizationCard = ({ org }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="group p-5 rounded-2xl bg-gray-100 border border-gray-100 hover:border-blue-500 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer text-center"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-fit mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={org.image}
            alt={org.name || "Organization Logo"}
            className="w-24 rounded-full object-center transition-transform duration-500 group-hover:rotate-12"
          />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {org.name}
        </h3>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-4">
          <div className="bg-gray-100 rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              <IoClose />
            </button>
            <div className="text-cente">
            <div className="w-fit mx-auto bg-white rounded-full">
              <img
                src={org.image}
                alt={org.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-contain"
                />
                </div>
              <h2 className="text-2xl font-bold mb-4">{org.name}</h2>
              <p className="text-gray-600 font-medium">
                {org.description || "No additional information available."}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrganizationCard;

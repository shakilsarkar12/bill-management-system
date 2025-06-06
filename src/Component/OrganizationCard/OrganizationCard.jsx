import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const OrganizationCard = ({ datas }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, image, description } = datas;
  return (
    <>
      {/* Card */}
      <div
        className="group p-5 rounded-2xl bg-white border border-gray-100 hover:border-blue-500 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer text-center"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-fit mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={name || "Organization Logo"}
            className="w-24 rounded-full object-center transition-transform duration-500 group-hover:rotate-12"
          />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-4">
          <div
            className="bg-gray-50 border border-gray-200 rounded-xl max-w-md w-full p-6 relative
                    transform transition-all duration-300 opacity-0 scale-95 animate-fadeInModal"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl"
            >
              <IoClose />
            </button>
            <div className="text-center">
              <div className="w-fit mx-auto bg-white rounded-full">
                <img
                  src={image}
                  alt={name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">{name}</h2>
              <p className="text-gray-600 font-medium">
                {description || "No additional information available."}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrganizationCard;

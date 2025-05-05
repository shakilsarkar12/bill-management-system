import React from "react";

const Slide = ({ slide }) => {
    const { title, description , image} = slide;
    return (
      <div className="lg:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 lg:p-20 shadow mx-2.5 my-4 rounded-lg ">
          <div className="flex-1 text-center md:text-left space-y-4">
            <h2 className="w-full text-xl md:text-4xl font-bold text-gray-800">
              {title}
            </h2>
            <p className="text-gray-600 md:text-lg">{description}</p>
            <button className="btn btn-info text-white font-semibold px-6 py-3">
              Pay Now
            </button>
          </div>
          <div className="flex-1">
            <img
              src={image}
              alt={title}
              className="w-full h-64 md:h-80 object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    );
};

export default Slide;

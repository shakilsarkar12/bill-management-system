import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const AppDownload = () => {
  return (
    <section className="bg-white py-12 md:py-20 mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Download Our App
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto font-medium">
          Access all services on the go. Pay bills, transfer money, and more
          from your mobile.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-3 btn btn-accent text-white btn-xl">
            <FaGooglePlay className="text-xl" />
            <span>Google Play</span>
          </button>
          <button className="flex items-center gap-3 btn btn-info text-white btn-xl ">
            <FaApple className="text-xl" />
            <span>App Store</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;

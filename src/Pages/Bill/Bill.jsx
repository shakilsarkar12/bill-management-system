import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const Bill = () => {
  const navigate = useNavigate();
    const bills = useLoaderData();
    
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
      {bills?.map((bill) => (
        <div
          key={bill.id}
          className="bg-white border-2 p-6 border-gray-200 rounded-lg grid grid-cols-5 gap-16"
        >
          <div className="col-span-2 border-r-2 border-gray-200">
            <img className="w-48" src={bill.icon} alt="" />
          </div>
          <div className="col-span-3 space-y-3">
            <h1 className="text-3xl font-semibold text-gray-700">
              {bill.name}
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              {bill.bill_type}
            </h2>
            <p className="text-xl font-medium text-gray-700">
              Due Amount : {bill.amount} TaKa
            </p>
            <p className="text-xl font-medium text-gray-700">
              Due Date:{" "}
              {new Date(bill["due-date"]).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
            <button
              onClick={() => navigate(`/billdetails/${bill.id}`)}
              className="btn btn-accent w-full text-white text-lg font-medium"
            >
              Bill Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bill;

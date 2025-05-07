import React from "react";
import { useLoaderData, useParams } from "react-router";

const BillDetails = () => {
  const data = useLoaderData();
    const { id } = useParams()
    const bill = data.find(singleBill => singleBill.id == id);
    
    
    
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-12 flex flex-col md:flex-row items-center gap-8">
      <img
        src={bill.icon}
        alt={bill.name}
        className="w-40 object-contain border-r pr-6"
      />

      <div className="flex-1 space-y-3 text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-800">{bill.name}</h1>
        <p className="text-xl font-semibold text-gray-600">{bill.bill_type}</p>
        <p className="text-lg text-gray-700">
          Due Amount: <span className="font-semibold">{bill.amount} TaKa</span>
        </p>
        <p className="text-lg text-gray-700">
          Due Date:{" "}
          {new Date(bill["due-date"]).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        <button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded text-lg font-medium">
          Pay Bill
        </button>
      </div>
    </div>
  );
};

export default BillDetails;

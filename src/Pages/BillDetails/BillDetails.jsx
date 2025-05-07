import React from "react";
import { useLoaderData, useParams } from "react-router";

const BillDetails = () => {
  const data = useLoaderData();
    const { id } = useParams()
    const bill = data.find(singleBill => singleBill.id == id);
    
    
    
  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-lg border border-gray-200 mt-10">
      <div className="text-center flex justify-evenly">
        <img
          src={bill.icon}
          alt={bill.bill_type}
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-md"
              />
              <button className="btn btn-info">Pay</button>
      </div>
    </div>
  );
};

export default BillDetails;

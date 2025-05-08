import React, { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { BillsContext } from "../../Context/BillsContext/BillsContext";
import { toast } from "react-toastify";
import { getStatusArray, updateStatusById } from "../../utils/storage";

const BillDetails = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { id } = useParams();
  const bill = data.find((singleBill) => singleBill.id == id);
  const { balence, setBalence } = useContext(BillsContext);

  const handlePayBill = () => {
    const billAmount = bill.amount;
    if (balence > billAmount) {
      updateStatusById(id, true);
      setTimeout(() => {
        const reminingBalence = balence - billAmount;
        setBalence(reminingBalence);
        toast.success(`${bill.name} pay successfull !`);
        navigate("/bills/0");
      }, 800);
    } else {
      toast.warn("Insufficient balance please add your balence");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg p-8 mt-24 flex flex-col md:flex-row items-center gap-8 relative ">
      <img
        src={bill.icon}
        alt={bill.name}
        className="w-80 object-contain  pr-6"
      />
      <div className="flex-1 space-y-3 text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-800">{bill.name}</h1>
        <p className="text-xl font-semibold text-cyan-600">{bill.bill_type}</p>
        <p className="text-lg">Due Amount: {bill.amount} TaKa</p>
        <p className="text-lg">
          Due Date:{" "}
          {new Date(bill["due-date"]).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        <p
          className={`text-lg font-semibold absolute top-4 right-4 ${
            bill.status ? "text-green-600" : "text-red-500"
          }`}
        >
          Status: {bill.status ? "Paid" : "Unpaid"}
        </p>

        <button
          onClick={handlePayBill}
          disabled={bill.status}
          className={`mt-4 ${
            bill.status
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-cyan-500 hover:bg-cyan-600"
          } text-white px-6 py-2 rounded text-lg font-medium`}
        >
          {bill.status ? "Already Paid" : "Pay Bill"}
        </button>
      </div>
    </div>
  );
};

export default BillDetails;

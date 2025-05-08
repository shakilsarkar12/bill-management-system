import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, useRouteLoaderData } from "react-router";
import { BillsContext } from "../../Context/BillsContext/BillsContext";

const Categories = () => {
  const navigate = useNavigate();
  const [categoriesBills, setCategoriesBills] = useState([]);
const {statusArray}= useContext(BillsContext)
  const data = useRouteLoaderData("bills");
  const { id } = useParams();



  useEffect(() => {
    if (data) {
      if (id == 0) {
        setCategoriesBills(data);
      } else {
        const bills = data.filter((bill) => bill.category_id == id);
        setCategoriesBills(bills);
      }
    }
  }, [id, data]);

  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-16 mb-24">
      {categoriesBills?.map((bill) => {
        const billStatus = statusArray.find((item) => item.id === bill.id);
        return (
          <div
            key={bill.id}
            className="bg-white border-2 border-gray-200 rounded-lg grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-5  items-center relative overflow-hidden"
          >
            <span
              className={`px-2 py-1 rounded-bl-md text-xs font-medium absolute top-0 right-0 ${
                billStatus?.status
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {billStatus?.status ? "Paid" : "Unpaid"}
            </span>
            <div className="w-full h-full col-span-2 border-b-2 sm:border-r-2 sm:border-b-0 md:border-b-0 lg:border-r-2 border-gray-200  flex items-center justify-center p-4">
              <img
                className="w-24 sm:w-44 md:w-36 lg:w-48"
                src={bill.icon}
                alt=""
              />
            </div>
            <div className="col-span-3 space-y-3 p-4 sm:p-6">
              <h1 className="text-lg sm:text-3xl md:text-2xl lg:text-3xl font-semibold text-gray-700">
                {bill.name}
              </h1>
              <h2 className="text-base sm:text-2xl md:text-xl lg:text-2xl font-semibold text-gray-700">
                {bill.bill_type}
              </h2>
              <p className="text-sm sm:text-lg md:text-base lg:text-lg font-medium text-gray-700">
                Due Amount : {bill.amount} TaKa
              </p>
              <p className="text-sm sm:text-lg md:text-base lg:text-lg font-medium text-gray-700">
                Due Date:{" "}
                {new Date(bill["due-date"]).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <button
                onClick={() => navigate(`/billdetails/${bill.id}`)}
                disabled={billStatus?.status === true}
                className={`btn btn-accent w-full text-white sm:text-lg lg:text-lg font-medium ${
                  billStatus?.status === true
                    ? "bg-[#c0f3ed] cursor-not-allowed"
                    : ""
                }`}
              >
                Bill Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;

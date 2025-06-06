import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { BillsContext } from "../../Context/BillsContext/BillsContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { bills, paid, unPaid, totalpaid, recentBills, statusArray } =
    useContext(BillsContext);

  const [stats, setstats] = useState([]);

  useEffect(() => {
    setstats([
      { label: "Total Bills", value: bills.length },
      { label: "Unpaid Bills", value: unPaid.length },
      { label: "Paid Bills", value: paid.length },
      { label: "Total Paid", value: totalpaid },
    ]);
  }, [bills, unPaid, paid, totalpaid]);

  return (
    <div className="p-4 md:p-6 space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold md:font-semibold text-gray-800">
          Welcome, {user?.displayName}
        </h1>
        <p className="text-sm sm:text-base text-gray-500">Email: {user?.email}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats?.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl  border-2 border-gray-100 text-center"
          >
            <p className="font-medium text-gray-500">{stat.label}</p>
            <p className="text-xl font-bold text-accent">{stat.value}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Recent Bills
        </h2>
        <div className="bg-white overflow-x-auto w-full">
          <div className="min-w-[500px]">
            <table className="min-w-full text-sm text-left rounded-md">
              <thead className="bg-gray-100 text-gray-600">
                <tr className="border border-gray-200">
                  <th className="px-4 py-3">Biller</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Due Date</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBills?.map((bill) => {
                  const billStatus = statusArray.find((item) => item.id === bill.id);
        return (
                  (
                    <tr
                      key={bill.id}
                      className="border border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3">{bill.name}</td>
                      <td className="px-4 py-3">৳{bill.amount}</td>
                      <td className="px-4 py-3">
                        {new Date(bill?.["due-date"]).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${billStatus.status
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                            }`}
                        >
                          {billStatus.status ? "Paid" : "Unpaid"}
                        </span>
                      </td>
                    </tr>
                  ))
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";

const payments = [
  {
    id: 1,
    method: "Bkash",
    mobile: "01712345678",
    amount: 1000,
    date: "2025-05-08T14:30:00Z",
    status: "Successful",
  },
  {
    id: 2,
    method: "Bank Transfer",
    mobile: "AC: 9876543210",
    amount: 2500,
    date: "2025-05-05T11:15:00Z",
    status: "Pending",
  },
];

const PaymentHistory = () => {
  return (
    <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 max-w-6xl xl:mx-auto space-y-8 mt-4 sm:mt-6 md:mt-12 lg:mt-20 mx-4 md:mx-8">
      <h2 className="text-xl font-semibold mb-4">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Method</th>
              <th className="px-4 py-3">Account</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((pay) => (
              <tr
                key={pay.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-2">
                  {new Date(pay.date).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
                <td className="px-4 py-2">{pay.method}</td>
                <td className="px-4 py-2">{pay.mobile}</td>
                <td className="px-4 py-2">৳ {pay.amount}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      pay.status === "Successful"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {pay.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;

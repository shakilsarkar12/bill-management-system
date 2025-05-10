import React from "react";
import { FiBell, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const notifications = [
  {
    id: 1,
    type: "info",
    message: "Your balance was updated successfully.",
    time: "2 mins ago",
  },
  {
    id: 2,
    type: "warning",
    message: "Electricity bill is due tomorrow.",
    time: "1 day ago",
  },
  {
    id: 3,
    type: "success",
    message: "Payment of ৳1200 was successful.",
    time: "3 days ago",
  },
];

const getIcon = (type) => {
  switch (type) {
    case "success":
      return <FiCheckCircle className="text-green-500 text-lg" />;
    case "warning":
      return <FiAlertCircle className="text-yellow-500 text-lg" />;
    default:
      return <FiBell className="text-blue-500 text-lg" />;
  }
};

const NotificationSection = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 max-w-5xl mx-auto mt-12">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <ul className="space-y-4">
        {notifications.map((note) => (
          <li
            key={note.id}
            className="flex items-start gap-4 bg-gray-50 px-4 py-3 rounded-md border border-gray-200 hover:bg-gray-100 transition"
          >
            <div>{getIcon(note.type)}</div>
            <div className="flex-1">
              <p className="text-gray-800">{note.message}</p>
              <p className="text-sm text-gray-400">{note.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationSection;

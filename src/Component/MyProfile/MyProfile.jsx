import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    return (
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
        <div className="flex items-center gap-6">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-24 h-24 rounded-full object-cover border-4 border-accent"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-700">{user?.name}</h2>
            <p className="text-gray-500">{user?.email}</p>
            <p className="text-sm text-gray-400 mt-1">
              Member since:{" "}
              {new Date(user?.metadata?.creationTime).toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4 text-gray-600">
          <div>
            <p className="font-medium">Total Bills Paid</p>
            <p className="text-xl text-green-600 font-semibold">
              ৳{user?.totalPaid}
            </p>
          </div>
          <div>
            <p className="font-medium">Pending Bills</p>
            <p className="text-xl text-red-500 font-semibold">
              {user?.pendingCount}
            </p>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;
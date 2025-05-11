import React, { useState } from "react";
import { auth } from "../../Firebase/firebase.init";
import { updatePassword } from "firebase/auth";
import { toast } from "react-toastify";

const Settings = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdatePassword = (e) => {
    e.preventDefault();

    const user = auth.currentUser;

    if (user) {
      updatePassword(user, newPassword)
        .then(() => {
          toast.success(" Password updated successfully!");
        })
        .catch((error) => {
          setMessage(` Error: ${error.message}`);
        });
    } else {
      setMessage(" User not logged in.");
    }
  };

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-10 mt-12">
      {/* Account Settings */}
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Change password</h2>
        <div className="space-y-4">
          <form onSubmit={handleUpdatePassword}>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full p-2 border rounded mb-4"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-info text-white py-2 rounded hover:bg-accent"
            >
              Update Password
            </button>
          </form>
          {message && <p className="mt-4 text-center text-sm">{message}</p>}
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Preferences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label htmlFor="language">
            <span className="text-lg font-semibold text-gray-600">
              Language:
            </span>
            <select
              name="language"
              className="border border-accent focus:outline-accent w-full px-4 py-2 rounded-sm"
            >
              <option>English</option>
              <option>Bangla</option>
            </select>
          </label>
          <label htmlFor="language">
            <span className="text-lg font-semibold text-gray-600">
              Timezone:
            </span>
            <select
              name="language"
              className="border border-accent focus:outline-accent w-full px-4 py-2 rounded-sm"
            >
              <option>Asia/Dhaka</option>
              <option>GMT</option>
            </select>
          </label>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Security</h2>
        <div className="space-y-4">
          <button className="btn btn-outline border-accent w-full">
            Enable Two-Factor Authentication
          </button>
          <button className="btn btn-outline border-info w-full">
            View Login Activity
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="checkbox" /> Email Notifications
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="checkbox" /> Push Notifications
          </label>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-xl p-6 border border-red-200">
        <h2 className="text-xl font-semibold mb-4 text-red-600">Danger Zone</h2>
        <div className="space-y-2">
          <button className="btn btn-warning w-full">Deactivate Account</button>
          <button className="btn btn-error w-full">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

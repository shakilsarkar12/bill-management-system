import React from "react";

const Settings = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      {/* Account Settings */}
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
      <div className="bg-white shadow rounded-xl p-6 border">
        <h2 className="text-xl font-semibold mb-4">Change password</h2>
        <div className="space-y-4">

        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white shadow rounded-xl p-6 border">
        <h2 className="text-xl font-semibold mb-4">Preferences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select className="select select-bordered w-full">
            <option>Language: English</option>
            <option>Bangla</option>
          </select>
          <select className="select select-bordered w-full">
            <option>Currency: BDT (৳)</option>
            <option>USD ($)</option>
          </select>
          <select className="select select-bordered w-full">
            <option>Timezone: Asia/Dhaka</option>
            <option>GMT</option>
          </select>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white shadow rounded-xl p-6 border">
        <h2 className="text-xl font-semibold mb-4">Security</h2>
        <div className="space-y-4">
          <button className="btn btn-outline w-full">
            Enable Two-Factor Authentication
          </button>
          <button className="btn btn-outline w-full">
            View Login Activity
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white shadow rounded-xl p-6 border">
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
      <div className="bg-white shadow rounded-xl p-6 border border-red-200">
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

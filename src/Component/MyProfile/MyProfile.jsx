import React, { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { FiEdit3, FiPlusCircle, FiLock } from "react-icons/fi";
import { BillsContext } from "../../Context/BillsContext/BillsContext";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const MyProfile = () => {
  const navigate = useNavigate();
  const { user, nameWord } = useContext(AuthContext);
  const { balence, unPaid, paid, setBalence, setLoading } =
    useContext(BillsContext);
  const [editMode, setEditMode] = useState(false);
  const [addBlanceMode, setAddBlanceMode] = useState(false);
  const [creationDate, setCreationDate] = useState("");
  const [error, setError] = useState("");
  const methodRef = useRef();

  useEffect(() => {
    if (user?.metadata?.creationTime) {
      const created = new Date(user.metadata.creationTime);
      setCreationDate(
        created.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      );
    }
  }, [user]);

  const totalPaid = paid.length || 0;
  const totalUnpaid = unPaid.length || 0;

  const completion =
    (user.displayName ? 25 : 0) +
    (user.email ? 25 : 0) +
    (user.photoURL ? 25 : 0) +
    (user.emailVerified ? 25 : 0);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    console.log(name, photoUrl);

    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        toast.success("Profile updated");
        setEditMode(false);
        setLoading(false);
      })
      .catch((error) => {
        toast.warn(error.message);
      });
  };

  const handleAddBalence = (e) => {
    e.preventDefault();
    setError("");
    const method = methodRef.current.value;
    const account = e.target.accountNum.value;
    const amount = e.target.amount.value;
    if (method == "bank") {
      if (account.length == 10) {
        if (amount > 0) {
          const newBalence = balence + parseFloat(amount);
          setTimeout(() => {
            setBalence(newBalence);
            toast.success("Balence added successfully");
            setAddBlanceMode(false);
          }, 600);
        } else {
          setError("Invalid Amount");
        }
      } else {
        setError("Account number must be at least 10 digits long. ");
      }
    } else {
      if (account.length == 11) {
        if (amount > 0) {
          const newBalence = balence + parseFloat(amount);
          setTimeout(() => {
            setBalence(newBalence);
            toast.success("Balence added successfully");
            setAddBlanceMode(false);
          }, 600);
        } else {
          setError("Invalid Amount");
        }
      } else {
        setError("Account number must be at least 11 digits long. ");
      }
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      {/* Profile Card */}
      <div className="relative bg-white shadow-lg rounded-2xl p-6 flex flex-col  items-center gap-6 border border-gray-200">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-accent"
          onClick={() => setEditMode(true)}
          title="Edit Profile"
        >
          <FiEdit3 className="text-xl" />
        </button>

        <div>
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-accent"
            />
          ) : (
            <div className="bg-info text-5xl font-medium text-white flex items-center justify-center rounded-full h-28 w-28">
              {nameWord}
            </div>
          )}
        </div>

        <div className="text-gray-800 w-full space-y-3 text-center sm:text-left">
          <h2 className="text-xl font-semibold">Name : {user?.displayName}</h2>
          <p className="font-medium text-gray-500">Email: {user?.email}</p>
          <p className="text-lg font-medium">
            Balance:
            <span className="text-accent font-semibold">৳ {balence}</span>
          </p>
          <p className="text-sm text-gray-500">
            Account Created: {creationDate}
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-sm">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Paid: {totalPaid}
            </span>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
              Unpaid: {totalUnpaid}
            </span>
          </div>

          <div className="mt-2">
            <label className="text-sm font-medium text-gray-600">
              Profile Completion
            </label>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
              <div
                className="h-2 bg-accent rounded-full"
                style={{ width: `${completion}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {completion}% completed
            </p>
          </div>

          <div className="flex gap-3 mt-4 justify-center sm:justify-start">
            <button
              onClick={() => setAddBlanceMode(true)}
              className="btn btn-outline border-accent hover:btn-accent font-medium hover:text-white btn-sm flex items-center gap-2"
            >
              <FiPlusCircle /> Add Balance
            </button>
            <button
              onClick={() => navigate("/profile/settings")}
              className="btn btn-outline border-info hover:btn-info font-medium hover:text-white btn-sm flex items-center gap-2"
            >
              <FiLock /> Change Password
            </button>
          </div>
        </div>
      </div>

      {editMode && (
        <div className="bg-gray-200/30 backdrop-blur-md w-full h-screen flex items-center justify-center absolute top-0 left-0">
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <input
                name="name"
                className="border border-info focus:outline-info w-full px-4 py-2 rounded-sm"
                type="text"
                placeholder="name"
                required
              />
              <input
                name="photoUrl"
                className="border border-info focus:outline-info w-full px-4 py-2 rounded-sm"
                type="url"
                placeholder="PhotoURL"
              />
              <div className="space-x-4">
                <button
                  type="submit"
                  className="btn btn-accent text-white w-full sm:w-fit"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  type="button"
                  className="btn   hover:btn-accent hover:text-white  w-full sm:w-fit"
                >
                  Cencle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {addBlanceMode && (
        <div className="bg-gray-200/30 backdrop-blur-md w-full h-screen flex items-center justify-center absolute top-0 left-0">
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 relative">
            <button
              type="button"
              onClick={() => setAddBlanceMode(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-accent"
            >
              <IoClose className="text-2xl" />
            </button>
            <h2 className="text-xl font-semibold mb-6">Add Balance</h2>
            <form onSubmit={handleAddBalence} className="max-w-sm space-y-4">
              <select
                ref={methodRef}
                className="border border-info focus:outline-info w-full px-4 py-2 rounded-sm"
                required
              >
                <option value="">Select payment method</option>
                <option value="bkash">Bkash</option>
                <option value="nagad">Nagad</option>
                <option value="bank">Bank Transfer</option>
              </select>

              <input
                type="number"
                name="accountNum"
                placeholder="Enter Bank/Mobile Account Number"
                className="border border-info focus:outline-info w-full px-4 py-2 rounded-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield"
                required
              />

              <input
                type="number"
                name="amount"
                placeholder="Enter amount"
                className="border border-info focus:outline-info w-full px-4 py-2 rounded-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield"
                required
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="col-span-1 sm:col-span-2">
                <button
                  type="submit"
                  className="btn btn-info text-white w-full"
                >
                  Add Balance
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;

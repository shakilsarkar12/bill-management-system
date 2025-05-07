import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = async () => {
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to update: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow mt-10 rounded">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={photo}
        alt="profile"
      />
      <h2 className="text-xl font-semibold text-center mt-4">{user?.email}</h2>

      <div className="mt-6 space-y-4">
        <input
          type="text"
          className="w-full border px-4 py-2 rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="w-full border px-4 py-2 rounded"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;

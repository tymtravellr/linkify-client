import { useState } from "react";
import { useUserStore } from "../../../store/store";

const ProfileCustomization = () => {
  const { firstname, lastname, email, image, updateProfile } = useUserStore(state => state);
  const [profile, setProfile] = useState({
    firstname: firstname,
    lastname: lastname,
    email: email,
    image: image
  });
  console.log("profile", profile)
  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-6">Profile Details</h2>
      <p className="text-gray-500 mb-8">Add your details to create a personal touch to your profile.</p>

      <div className="mb-6">
        <label htmlFor="profile-picture">Profile picture</label>
        <div className="relative mt-2 flex items-center justify-center w-32 h-32 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-50">
          <input
            type="file"
            name="profile-picture"
            id="profile-picture"
            className="absolute inset-0 opacity-0"
            onChange={(e) => setProfile((state) => ({
              ...state, image: URL.createObjectURL(e.target.files[0])
            }))}
          />
          <img src={profile.image || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} alt="Profile" className="w-32 h-32 rounded-lg" />
          <span className="sr-only">Change Image</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">Image must be below 1024x1024px. Use PNG, JPG, or BMP format.</p>
      </div>

      <div>
        <label htmlFor="first-name">First name*</label>
        <input id="first-name" defaultValue={firstname} className="mt-1" onChange={(e) => setProfile((state) => ({
          ...state, firstname: e.target.value
        }))}
        />
      </div>
      <div>
        <label htmlFor="last-name">Last name*</label>
        <input id="last-name" defaultValue={lastname} className="mt-1" onChange={(e) => setProfile((state) => ({
          ...state, lastname: e.target.value
        }))} />
      </div>
      <div className="mb-6">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" defaultValue={email} className="mt-1" onChange={(e) => setProfile((state) => ({
          ...state, email: e.target.value
        }))} />
      </div>

      <div className="flex justify-end">
        <button onClick={() => updateProfile(profile)}>Save</button>
      </div>
    </div>
  )
}

export default ProfileCustomization
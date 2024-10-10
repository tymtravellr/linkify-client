import { useDraftStore } from "../../../store/draftStore";

const ProfileCustomization = () => {
  const { draftFirstname, draftLastname, draftEmail, draftImage, updateDraftProfile } = useDraftStore(state => state);

  const handleUpdateDraftProfile = (data) => {
    updateDraftProfile(data);
  }

  return (
    <div className="flex-1">
      <div className="mb-6">
        <div className="bg-gray-100 w-full p-4 flex justify-between items-center">
          <p>
            Profile Picture
          </p>
          <div className="flex items-center gap-4 max-w-md w-full">
            <div className="relative w-32 h-32  rounded-lg cursor-pointer ">
              <input
                type="file"
                name="profile-picture"
                id="profile-picture"
                className="absolute inset-0 opacity-0"
                onChange={(e) => handleUpdateDraftProfile({ draftImage: URL.createObjectURL(e.target.files[0]) })}
              />
              <img src={draftImage || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} alt="Profile" className="w-32 h-32 rounded-lg" />
              <span className="sr-only">Change Image</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">Image must be below 1024x1024px. <br /> Use PNG, JPG, or Webp format.</p>
          </div>
        </div>
       
      </div>
      <div>
        <label htmlFor="first-name">First name*</label>
        <input
          id="first-name"
          value={draftFirstname}
          className="mt-1"
          onChange={(e) => handleUpdateDraftProfile({ draftFirstname: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="last-name">Last name*</label>
        <input
          id="last-name"
          value={draftLastname}
          className="mt-1"
          onChange={(e) => handleUpdateDraftProfile({ draftLastname: e.target.value })}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={draftEmail}
          className="mt-1"
          onChange={(e) => handleUpdateDraftProfile({ draftEmail: e.target.value })}
        />
      </div>
    </div>
  )
}

export default ProfileCustomization;
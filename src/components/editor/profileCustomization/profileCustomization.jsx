import PhotoUploadWidget from "@/components/editor/photoUploadWidget/photoUploadWidget";
import { Input } from "@/components/ui/input";
import { useDraftStore } from "../../../store/draftStore";

const ProfileCustomization = () => {

  const { draftfirstName, draftlastName, draftEmail, updateDraftProfile } = useDraftStore(state => state);

  const handleUpdateDraftProfile = (data) => {
    updateDraftProfile(data);
  }

  return (
    <div className="flex-1 md:pb-0 pb-10">
      <div className="mb-6">
        <div className="bg-gray-50 w-full p-4 flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start gap-3 rounded-md">
          <p>
            Profile Picture
          </p>
          <div className="flex md:flex-row flex-col md:items-center items-start gap-4 max-w-md w-full">
            <PhotoUploadWidget />
            <p className="mt-2 text-sm text-gray-400">Image must be below 1024x1024px. <br /> Use PNG, JPG, or Webp format.</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 w-full p-4 flex flex-col gap-3 rounded-md">
        <div className="flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start gap-2">
          <label htmlFor="first-name">First name*</label>
          <Input
            id="first-name"
            value={draftfirstName}
            className="max-w-md w-full"
            placeholder="John"
            onChange={(e) => handleUpdateDraftProfile({ draftfirstName: e.target.value })}
          />
        </div>
        <div className="flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start gap-2">
          <label htmlFor="last-name">Last name*</label>
          <Input
            id="last-name"
            value={draftlastName}
            className="max-w-md w-full"
            placeholder="Doe"
            onChange={(e) => handleUpdateDraftProfile({ draftlastName: e.target.value })}
          />
        </div>
        <div className="flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start gap-2">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            value={draftEmail}
            className="max-w-md w-full"
            placeholder="email@example.com"
            disabled
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileCustomization;
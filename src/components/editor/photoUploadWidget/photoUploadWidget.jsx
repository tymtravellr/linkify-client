import { useDraftStore } from "@/store/draftStore";
import { Images } from "lucide-react";

const PhotoUploadWidget = () => {
    const { draftImage, updateDraftProfile } = useDraftStore(state => state);
    const handleUpdateDraftProfile = (data) => {
        updateDraftProfile(data);
    }
    return (
        <div className="relative w-32 h-32 rounded-lg cursor-pointer overflow-hidden group" >
            <input
                type="file"
                name="profile-picture"
                id="profile-picture"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => handleUpdateDraftProfile({ draftImage: URL.createObjectURL(e.target.files[0]) })}
            />
            <img
                src={draftImage || 'https://i.pinimg.com/originals/19/34/6c/19346ce85a15a5dd20136b6a063a9112.png'} alt="Profile"
                className="w-full h-full object-cover cursor-pointer"
            />
            <span className="sr-only">Change Image</span>
            {
                /* 
                Overlay    
                */
            }
            <div
                className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out pointer-events-none cursor-pointer ">
                <Images />
                <p>
                    {draftImage ? 'Change Image' : 'Upload Image'}
                </p>
            </div>
        </div>
    )
}

export default PhotoUploadWidget
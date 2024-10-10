//Preview editor data in mobile mockup
import { Github, Linkedin, Youtube } from "lucide-react";
import { useUserStore } from "../../../store/store";

const PhonePreview = () => {
    const { firstname, lastname, email, image, links } = useUserStore(state => state);
    console.log("links", links)
    return (
        <div className="bg-white p-6 border-l w-1/3">
            <div className="border-2 border-gray-300 rounded-3xl p-8 mx-auto" style={{ maxWidth: '300px' }}>
                <div>
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
                        {
                            image
                                ? <img src={image} alt="" />
                                : <div className="bg-gray-200 w-full h-full"></div>
                        }
                    </div>
                    {
                        (firstname && lastname)
                            ? <h1 className="text-2xl font-bold text-center">{firstname} {lastname}</h1>
                            : <div className="bg-gray-200 w-32 h-4 mx-auto mb-2 rounded-full"></div>
                    }
                    {
                        email
                            ? <p className="text-gray-600 text-center">{email}</p>
                            : <div className="bg-gray-200 w-24 h-2 mx-auto mb-8 rounded-full"></div>
                    }
                </div>
                {links.map((link, index) => (
                    <button key={index} className="w-full mb-4 bg-red-500">
                        {link.platform === 'GitHub' && <Github className="mr-2 h-4 w-4" />}
                        {link.platform === 'YouTube' && <Youtube className="mr-2 h-4 w-4" />}
                        {link.platform === 'LinkedIn' && <Linkedin className="mr-2 h-4 w-4" />}
                        {link.platform}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default PhonePreview
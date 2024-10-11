import { useUserStore } from "@/store/userStore";
import PlatformLink from "./platformLink";

const Preview = ({ className }) => {

    // Global state
    const { firstName, lastName, email, image, links } = useUserStore(state => state);

    return (
        <div className={`${className} flex flex-col gap-8 w-full h-full overflow-hidden`}>
            <div>
                <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
                    {
                        image
                            ? <img src={image} alt="" />
                            : <div className="bg-gray-200 w-full h-full"></div>
                    }
                </div>
                {
                    (firstName || lastName)
                        ? <h1 className="text-2xl font-bold text-center">{firstName} {lastName}</h1>
                        : <div className="bg-gray-200 w-32 h-4 mx-auto mb-2 rounded-full"></div>
                }
                {
                    email
                        ? <p className="text-sm text-gray-400 text-center">{email}</p>
                        : <div className="bg-gray-200 w-24 h-2 mx-auto mb-8 rounded-full"></div>
                }
            </div>
            <div className="flex flex-col gap-4">
                {links.map((link, index) => <PlatformLink key={index} index={index} link={link} />)}
            </div>
        </div>
    )
}

export default Preview
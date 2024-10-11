//Preview editor data in mobile mockup
import { ArrowRight, Facebook, Github, Instagram, Link2, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../../store/userStore";

const platforms = [
    {
        name: 'github',
        icon: <Github className="mt-[2px] h-4 w-4" />,
        color: 'bg-gray-900'
    },
    {
        name: 'youtube',
        icon: <Youtube className="mt-[2px] h-4 w-4" />,
        color: 'bg-red-500'
    },
    {
        name: 'linkedin',
        icon: <Linkedin className="mt-[2px] h-4 w-4" />,
        color: 'bg-blue-500'
    },
    {
        name: 'twitter',
        icon: <Twitter className="mt-[2px] h-4 w-4" />,
        color: 'bg-blue-400'
    },
    {
        name: 'instagram',
        icon: <Instagram className="mt-[2px] h-4 w-4" />,
        color: 'bg-red-500'
    },
    {
        name: 'facebook',
        icon: <Facebook className="mt-[2px] h-4 w-4" />,
        color: 'bg-blue-700'
    },
    {
        name: 'website',
        icon: <Link2 className="mt-[2px] h-4 w-4" />,
        color: 'bg-gray-900'
    }
]

const PhonePreview = () => {
    const { firstName, lastName, email, image, links } = useUserStore(state => state);
    const modifyLink = (link) => {
        if (link.includes('http://') || link.includes('https://')) {
            return link;
        } else {
            return `https://${link.toLowerCase().replace(/\s+/g, '')}`;
        }
    }
    return (
        <div className="bg-white p-6 border-l w-1/3 flex justify-center items-center rounded-lg">
            <div className="border-2 flex flex-col gap-8 border-gray-300 rounded-3xl py-8 px-4 mx-auto max-w-[260px] w-full min-h-[500px] overflow-hidden">
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
                            ? <p className="text-gray-600 text-center">{email}</p>
                            : <div className="bg-gray-200 w-24 h-2 mx-auto mb-8 rounded-full"></div>
                    }
                </div>
                <div className="flex flex-col gap-4">
                    {links.map((link, index) => (
                        <Link
                            to={modifyLink(link.link)}
                            key={index}
                            className={`w-full text-white flex justify-between items-center px-3 py-2 rounded-md ${platforms.find(platform => platform.name === link.platform.toLowerCase())?.color}`}
                            target="_blank"
                        >
                            <div className="flex items-center gap-2">
                                {
                                    platforms.find(platform => platform.name === link.platform.toLowerCase())?.icon
                                }
                                <span className="capitalize">
                                    {link.platform}
                                </span>
                            </div>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PhonePreview
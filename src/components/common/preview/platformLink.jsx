import { ArrowRight, Facebook, Github, Instagram, Link2, Linkedin, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"


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


const PlatformLink = ({ index, link }) => {

    const modifyLink = (link) => {
        if (link.includes('http://') || link.includes('https://')) {
            return link;
        } else {
            return `https://${link.toLowerCase().replace(/\s+/g, '')}`;
        }
    }

    return (
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
    )
}

export default PlatformLink
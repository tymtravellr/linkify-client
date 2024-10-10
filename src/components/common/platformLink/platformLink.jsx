import { TwitterIcon, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
const platforms = [
    {
        name: 'twitter',
        icon: <TwitterIcon />,
        bgColor: 'bg-blue-500'
    },
    {
        name: 'facebook',
        icon: 'facebook',
        bgColor: 'bg-blue-800'
    },
    {
        name: 'instagram',
        icon: 'instagram',
        bgColor: 'bg-pink-500'
    },
    {
        name: 'linkedin',
        icon: 'linkedin',
        bgColor: 'bg-blue-700'
    },
    {
        name: 'youtube',
        icon: 'youtube',
        bgColor: 'bg-red-500'
    },
    {
        name: 'github',
        icon: 'github',
        bgColor: 'bg-gray-900'
    }
]

const PlatformLink = (props) => {

    const { name, link } = props;

    const platform = platforms.find(platform => platform.name === name);

    return (
        <Link to={link} className={`w-10 h-10 rounded-full flex items-center justify-center ${platform.bgColor}`}>
            <div>
                {platform.icon}
                {platform.name}
            </div>
            <div>
                <ArrowRight />
            </div>
        </Link>
    )
}

export default PlatformLink
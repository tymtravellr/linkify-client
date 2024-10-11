import { useEditorViewStore } from "@/store/editorViewStore";
import { Eye, Link2Icon, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logoSm from "../../../assets/logo-sm.png";
import logo from "../../../assets/logo.png";
import { variantStyle } from "../button/buttonVariantStyle";

const HeaderEditor = () => {
    const { view, setLinksView, setProfileView } = useEditorViewStore(state => state)
    return (
        <div className="flex justify-between items-center">
            <div>
                <img src={logo} alt="" className="h-10 hidden md:block" />
                <img src={logoSm} alt="" className="h-5 block md:hidden" />
            </div>
            <div className="flex items-center">
                <button
                    onClick={() => setLinksView()}
                    className={`${view === 'links'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-white text-gray-700'} font-medium flex items-center gap-1 rounded-lg px-5 py-2`}
                >
                    <Link2Icon className="h-6 mt-[2px]" />
                    <span className="hidden md:block">
                        Links
                    </span>
                </button>
                <button
                    onClick={() => setProfileView()}
                    className={`${view === 'profile'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-white text-gray-700'} font-medium flex items-center gap-1 rounded-lg px-5 py-2`}
                >
                    <UserCircle className="h-6 mt-[2px]" />
                    <span className="hidden md:block">
                        Profile Details
                    </span>
                </button>
            </div>
            <Link to="/preview" className={`${variantStyle('outline')}`}>
                <span className="block md:hidden">
                    <Eye />
                </span>
                <span className="hidden md:block">
                    Preview
                </span>
            </Link>
        </div>
    )
}

export default HeaderEditor
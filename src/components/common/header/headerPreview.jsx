import { useAuthStore } from "@/store/authStore";
import { ArrowLeft, Forward } from "lucide-react";
import { Link } from "react-router-dom";
import logoSm from "../../../assets/logo-sm.png";
import logo from "../../../assets/logo.png";
import { variantStyle } from "../button/buttonVariantStyle";

const HeaderPreview = () => {
    const { isAuthenticated } = useAuthStore(state => state);
    return (
        <div className="flex justify-between items-center">
            {
                isAuthenticated ? (
                    <>
                        <Link to="/" className={`${variantStyle('outline')}`}>
                            <span className="block md:hidden">
                                <ArrowLeft />
                            </span>
                            <span className="hidden md:block">
                                Back to Editor
                            </span>
                        </Link>
                        <button className={`${variantStyle()}`}>
                            <span className="block md:hidden">
                                <Forward />
                            </span>
                            <span className="hidden md:block">
                                Share Link
                            </span>
                        </button>
                    </>
                ) : (
                    <>
                        <div>
                            <img src={logo} alt="" className="h-10 hidden md:block" />
                            <img src={logoSm} alt="" className="h-5 block md:hidden" />
                        </div>
                        <Link to="/login" className={`${variantStyle('outline')}`}>
                            Login
                        </Link>
                    </>
                )
            }
        </div>
    )
}

export default HeaderPreview
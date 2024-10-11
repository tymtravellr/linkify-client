import { useAuthStore } from "@/store/authStore";
import { ArrowLeft, Forward } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoSm from "../../../assets/logo-sm.png";
import logo from "../../../assets/logo.png";
import { variantStyle } from "../button/buttonVariantStyle";

const HeaderPreview = () => {
    const { isAuthenticated, email } = useAuthStore(state => state);
    const [isCopied, setIsCopied] = useState(false);

    // const handleShareLink = () => {
    //     const link = `https://linkify-client.vercel.app/profile/${email}`
    //     // copy to clipboard
    //     navigator.clipboard.writeText(link).then(() => {
    //         setIsCopied(true);
    //     }).catch((error) => {
    //         console.error('Copy failed:', error);
    //     });
    // }

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    }, [isCopied])

    return (
        <div className="flex justify-between items-center">
            {
                isAuthenticated ? (
                    <>
                        <Link
                            to="/"
                            className={`${variantStyle('outline')}`}
                        >
                            <span className="block md:hidden">
                                <ArrowLeft />
                            </span>
                            <span className="hidden md:block">
                                Back to Editor
                            </span>
                        </Link>
                        {/* <button
                            className={`${variantStyle()}`}
                            onClick={() => handleShareLink()}
                        >
                            <span className="block md:hidden">
                                <Forward />
                            </span>
                            <span className="hidden md:block">
                                {
                                    isCopied ? 'Copied!' : 'Share Link'
                                }
                            </span>
                        </button> */}
                        <Link
                            to={`/profile/${email}`}
                            className={`${variantStyle()}`}
                            target="_blank"
                        >
                            <span className="block md:hidden">
                                <Forward />
                            </span>
                            <span className="hidden md:block">
                                Share Link
                            </span>
                        </Link>
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
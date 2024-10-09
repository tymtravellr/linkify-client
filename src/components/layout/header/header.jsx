import { Eye } from "lucide-react"
import { Link } from "react-router-dom"
import { useEditorContext } from "../../../contexts/editorContext"
import Button from "../../ui/button/button"

const Header = () => {
    const { setLinkView, setProfileView } = useEditorContext();
    return (
        <header className="py-3 bg-white rounded-lg">
            <div className="container">
                <div>
                    <Link to="/">
                        <p>
                            Linkify
                        </p>
                    </Link>
                    <div>
                        <button>
                            Links
                        </button>
                        <button>
                            Profile Details
                        </button>
                    </div>
                    <Button to="/preview" variant="outline">
                        <div>
                            <span className="hidden md:block">
                                Preview
                            </span>
                            <span className="block md:hidden">
                                <Eye />
                            </span>
                        </div>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header
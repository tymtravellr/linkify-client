import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useEditorViewStore } from "../../../store/store";
import Button from "../../ui/button/button";

const Header = () => {
    const { setLinksView, setProfileView } = useEditorViewStore(state => state);

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
                        <button
                            onClick={() => setLinksView()}
                        >
                            Links
                        </button>
                        <button
                            onClick={() => setProfileView()}
                        >
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
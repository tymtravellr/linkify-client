import { useLocation } from "react-router-dom";

import HeaderEditor from "./headerEditor";
import HeaderPreview from "./headerPreview";

const Header = () => {

    // Routing functionality
    const { pathname } = useLocation();

    return (
        <header className="py-3 px-6 bg-white rounded-lg">
            {
                pathname === '/' ? <HeaderEditor /> : <HeaderPreview />
            }
        </header>
    )
}

export default Header
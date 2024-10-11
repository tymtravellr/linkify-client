import PlatformLink from "@/components/common/preview/platformLink";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Profile page for shared links and user details
const UserProfilePage = () => {

    const params = useParams();
    console.log(params);

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        image: "",
        links: []
    });

    useEffect(() => {
        const fetchUserView = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_API_ROUTE}api/user/view/${params.email}`);
                if (!response.ok) throw new Error('User data fetch failed');
                const { userData } = await response.json();
                setUserData(userData);

            } catch (error) {
                console.error('User data fetch error:', error);
            }
        }
        fetchUserView();
    }, [params.email]);

    return (
        <div className="w-full flex justify-center pt-20">
            <div className="flex flex-col gap-8 bg-white rounded-3xl max-w-[300px] w-full mx-auto overflow-hidden">
                <div className={`flex flex-col gap-8 w-full h-full overflow-hidden py-10 px-8`}>
                    <div>
                        <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
                            {
                                userData.image
                                    ? <img src={userData.image} alt="" />
                                    : <div className="bg-gray-200 w-full h-full"></div>
                            }
                        </div>
                        {
                            (userData.firstName || userData.lastName)
                                ? <h1 className="text-2xl font-bold text-center">{userData.firstName} {userData.lastName}</h1>
                                : <div className="bg-gray-200 w-32 h-4 mx-auto mb-2 rounded-full"></div>
                        }
                        {
                            userData.email
                                ? <p className="text-sm text-gray-400 text-center">{userData.email}</p>
                                : <div className="bg-gray-200 w-24 h-2 mx-auto mb-8 rounded-full"></div>
                        }
                    </div>
                    <div className="flex flex-col gap-4">
                        {userData?.links.map((link, index) => <PlatformLink key={index} index={index} link={link} />)}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserProfilePage
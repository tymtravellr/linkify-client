import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import { useUserStore } from './store/userStore';

const PrivateRoute = () => {
    const { isAuthenticated, isLoading, email } = useAuthStore();
    const { updateLinks, updateProfile } = useUserStore();

    useEffect(() => {
        const fetchData = async () => {
            if (isAuthenticated && email) {
                try {
                    const response = await fetch(`${import.meta.env.VITE_APP_API_ROUTE}api/user/${email}`);
                    if (!response.ok) throw new Error('User data fetch failed');
                    const { user } = await response.json();
                    updateLinks(user.links);
                    updateProfile({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        image: user.image,
                        links: user.links
                    });
                } catch (error) {
                    console.error('User data fetch error:', error);
                }
            }
        };

        fetchData();
    }, [isAuthenticated, email, updateLinks, updateProfile]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
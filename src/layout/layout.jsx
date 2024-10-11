import { useAuthStore } from '@/store/authStore';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/common/header/header';

const Layout = () => {
    const { pathname } = useLocation();
    const { isAuthenticated } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated && (pathname === '/login' || pathname === '/register')) {
            navigate('/');
        }
    }, [isAuthenticated, navigate, pathname])

    return (
        <div className='bg-gray-100  overflow-hidden'>
            <div className="container space-y-4 h-screen p-8 flex flex-col">
                {pathname !== '/login' && pathname !== '/register' && <Header />}
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
import { Outlet } from 'react-router-dom';
import Header from '../components/common/header/header';

const Layout = () => {

    return (
        <div className='bg-gray-100  overflow-hidden'>
            <div className="container space-y-4 h-screen p-8 flex flex-col">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
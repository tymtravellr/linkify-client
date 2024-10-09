import { Outlet } from 'react-router-dom'
import Header from '../components/layout/header/header'

const Layout = () => {
    return (
        <div className='p-8 bg-gray-100 min-h-screen overflow-hidden space-y-4'>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout
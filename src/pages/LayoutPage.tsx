
import { NavBar } from '../components/NavBar';

import {
    Outlet, useLocation
} from "react-router-dom";
import { SideBar } from '../components/SideBar';

const LayoutPage = () => {
    
    return (
        <>
            <NavBar />
            <div className='flex flex-row h-screen'>
                <SideBar />
                <div className='flex flex-1'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default LayoutPage
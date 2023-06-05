import React from 'react'
import { Link, useLocation } from "react-router-dom";

export const SideBar = () => {
  const location = useLocation();

  return (
    <div className='flex flex-col w-1/6 bg-slate-500'>
        <Link to={'dashboard'} className={`block text-center ${location.pathname === '/home/dashboard' ? 'text-gray-50' : ''}`}>Dashboard</Link>
        <Link to={'products'} className={`block text-center ${location.pathname === '/home/products' ? 'text-gray-50' : ''}`}>Products</Link>
        <Link to={'clients'} className={`block text-center ${location.pathname === '/home/clients' ? 'text-gray-50' : ''}`}>Clients</Link>
        <Link to={'add-client'} className={`block text-center ${location.pathname === '/home/add-client' ? 'text-gray-50' : ''}`}>Add Client</Link>
    </div>
  )
}

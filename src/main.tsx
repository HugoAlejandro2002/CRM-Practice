import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';
import ProductsPage from './pages/ProductsPage';
import ClientsPage from './pages/ClientsPage';
import { getClients, getClientById } from './services/clientsService';
import ErrorPage from './pages/ErrorPage';
import AddClientPage from './pages/AddClientPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/home",
    element: <LayoutPage/>,
    children: [
      {
        path:'dashboard',
        element:<HomePage/>
      },
      {
        path:'products',
        element:<ProductsPage/>
      },
      {
        path:'clients',
        element:<ClientsPage/>,
        loader: async () => {
          return await getClients();
        },
        errorElement: <ErrorPage/>
      },
      {
        path:'add-client/:clientID?',
        element:<AddClientPage/>,
        loader: async ({params}) =>{
          const { clientID } = params;
          if (clientID) {
            return await getClientById(clientID);
          } 
          return {};
          
        }
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

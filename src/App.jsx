
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from './components/Navbar';
//import Catalog from './pages/Catalog';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Filter from './components/Filter/Filter';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { useState } from 'react';




const Dashboard = () => {


  return (
    <div>
      
      <div className='sticky top-0 z-50'><Navbar /></div>
      <div className=' pb-36'><Outlet /></div>
      <div className=''><Footer/></div>
    </div>
  );
};

const router = createBrowserRouter([
  {


    path:"/",
    element:<Dashboard />,
    children: [
      {
      path:"/",
      element: <Home/>,
      },
      {
        path:"/contact",
        element:<Contact />
    
      },      
      {
        
        path:"/catalog",
        element:<Filter  />
    
      },
      {
        
        path:"/signup",
        element:<SignUp  />
    
      },
      {
        
        path:"/signin",
        element:<SignIn  />
    
      },     
      {
        
        path:"/profile",
        element:<Profile  />
    
      },
    ],

  },  
  {
    path:"*",
    element:<Error />

  },
]);

function App() {
  
  return (
    <div className='App'>

      <RouterProvider router={router}/>
    </div>
    
  )
}

export default App

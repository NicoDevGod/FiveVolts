
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";



const Dashboard = () => {


  return (
    <div>
      <div className='sticky top-0 z-50'><Navbar /></div>
      <Outlet />
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
        element:<Catalog  />
    
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

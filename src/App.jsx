
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from './components/Navbar';
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
      <Navbar />
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

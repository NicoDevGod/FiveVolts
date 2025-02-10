import React from "react";
import { Button, Space } from "antd";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";
import {FaTimes, FaHome, FaBookOpen} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { removeToken } from "../helpers";
import {MdContactSupport} from "react-icons/md";
import {GrCatalog} from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Enlace({path, nombre}){

    return(
        <>
            <Link to={"/"+path} >
                <li className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2 ">
                    {nombre}
                </li>
            </Link>
        </>
    )
}
function Enlace2({path, nombre, handleClick}){

    return(
        <>
            <Link onClick={handleClick} to={"/"+path}>
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-white">
                    {nombre}
                </li>
            </Link>
        </>
    )
}

function Navbar(){
    const navigate = useNavigate();
    const { user, setUser } = useAuthContext();
    const handleLogout = () => {
        removeToken();
        setUser(undefined);
        navigate("/", { replace: true });
      };


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-50 transition">
            <ul className="text-center text-xl p-20">
                <Enlace2 path="" nombre="Home" handleClick={handleClick} />
                <Enlace2 path="catalog" nombre="Catalog" handleClick={handleClick} />
                <Enlace2 path="contact" nombre="Contact" handleClick={handleClick} />
                <Enlace2 path="contact" nombre="Log in" handleClick={handleClick} />
            </ul>
        </div>
    </>
    return(
        <nav>
            <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 drop-shadow-xl bg-white">
            {user ? (
                                <>
                                    <div className="flex items-center space-x-4">
                                        <img className="w-10 h-10 rounded-full" src={user.avatar_url} alt=""/>
                                        <div className="font-medium dark:text-white">
                                            <div>{user.username}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                                        </div>
                                    </div>
                                </>
                                ) : (
                                <>
                                    <div className="flex items-center flex-1 ">
                                        <span className="text-3xl font-bold">Logo</span>
                                    </div>
                                </>
                            )}


                <div className="lg:flex md:flex sm:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 items-center">
                            <div className="flex ">
                                <Enlace path="" nombre={<FaHome size={25}/>}/>
                                <Enlace path="catalog" nombre={<FaBookOpen size={25}/>}/>
                                <Enlace path="contact" nombre={<MdContactSupport size={25}/>}/>
                            </div>
                            <div>
                                {user ? (
                                    <>
                                        <Link to={"/profile"} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" href="/profile" >
                                            {user.username}
                                        </Link>
                                        <button onClick={handleLogout} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" href="/profile" type="link">
                                            Logout
                                        </button>
                                    </>
                                    ) : (
                                    <>
                                        <Link to={"/signin"} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                Login
                                            </span>
                                        </Link>

                                        <button
                                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                        href="/signup"
                                        type="primary"
                                        >
                                        SignUp
                                        </button>
                                    </>
                                )}
                            </div>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/> }
                </button>
            </div>
        </nav>
    )
}
export default Navbar
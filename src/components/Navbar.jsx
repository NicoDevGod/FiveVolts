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


function Enlace({path, nombre}){

    return(
        <>
            <Link to={"/"+path} >
                <li className="hover:text-cyan-500 transition border-b-2 border-slate-900 hover:border-cyan-500 cursor-pointer ">
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
    const { user, setUser } = useAuthContext();
    const handleLogout = () => {
        removeToken();
        setUser(undefined);
        navigate("/signin", { replace: true });
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
                <div className="flex items-center flex-1 ">
                    <span className="text-3xl font-bold">Logo</span>
                </div>
                <div className="lg:flex md:flex sm:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 items-center">
                            <Enlace path="" nombre={<FaHome size={25}/>}/>
                            <Enlace path="catalog" nombre={<FaBookOpen size={25}/>}/>
                            <Enlace path="contact" nombre={<MdContactSupport size={25}/>}/>
                            {user ? (
                                <>
                                    <Button className="auth_button_login" href="/profile" type="link">
                                    {user.username}
                                    </Button>
                                    <Button
                                    className="auth_button_signUp"
                                    
                                    onClick={handleLogout}
                                    >
                                    Logout
                                    </Button>
                                </>
                                ) : (
                                <>
                                    <Button className="auth_button_login" href="/signin" type="link">
                                    Login
                                    </Button>
                                    <Button
                                    className="auth_button_signUp"
                                    href="/signup"
                                    type="primary"
                                    >
                                    SignUp
                                    </Button>
                                </>
                            )}
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
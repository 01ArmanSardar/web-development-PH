import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Home/AuthProvider";
import DefaultProfilePic from '../../../assets/user.png'
const Navbar = () => {
    const Links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/Carrier'}>Carrier</NavLink></li>


    </>
    const { LogOut } = useContext(AuthContext)
    const Navigate = useNavigate()
    const Handellogout = () => {
        LogOut()
            .then(console.log('logout DOne'))
            .catch(err => { console.log(err.message) })
        Navigate('/login')
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            src={DefaultProfilePic}
                            alt="Tailwind CSS Navbar component"
                        />
                    </div>
                </div>

                <Link to={'/register'} className="btn btn-info">Register</Link>
                <Link to={'/login'} className="btn btn-info">Login</Link>
                <button onClick={Handellogout} className="btn btn-warning"> logoout</button>
            </div>
        </div>
    );
};

export default Navbar;
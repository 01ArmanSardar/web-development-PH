import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Header = () => {
    const { LogOut, user } = useContext(AuthContext)
    const HandelLogout = () => {
        
        LogOut()
            .then(() => {
                console.log('logout succesfully')
            }

            )
            .catch(err => { console.log(err); })
    }
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/Register'} >Register</NavLink></li>
        <li><NavLink to={'/Login'}>Login</NavLink></li>
        <li><NavLink to={'/Orders'}>Orders</NavLink></li>
        { user &&<>
        <li><NavLink to={'/Profile'}>Profile</NavLink></li>
        </>
        }

    </>




    // console.log(user.email);
    return (
        <div>
            <div className="navbar bg-teal-500">
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
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">auth</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <><span>{user.email}</span>
                            <a onClick={HandelLogout} className="btn" >SignOut</a>
                        </> : <Link to='/Login'> <button className="btn">LogIn</button> </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;
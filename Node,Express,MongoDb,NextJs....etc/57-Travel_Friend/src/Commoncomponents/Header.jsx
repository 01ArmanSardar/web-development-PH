import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Header = () => {
    const { user, Logout } = useContext(AuthContext)
    // const email=user.email
    console.log(user);
    const HandelLogout = () => {
        Logout()
            .then(
                alert('signout succesfully')
            )
            .catch((err) => {
                console.log(err);
            })

    }
    const links = < >
        <NavLink className={'text-teal-300 p-2 '} to={'/'}>Home</NavLink>
        <NavLink className={'text-teal-300 p-2'} to={'/register'}>Register</NavLink>
        <NavLink className={'text-teal-300 p-2'} to={'/login'}>Login</NavLink>
        <NavLink className={'text-teal-300 p-2 '} to={''}>AllTouristSpot</NavLink>
        <NavLink className={'text-teal-300 p-2 '} to={''}>Add TOurist Spot</NavLink>
        <NavLink className={'text-teal-300 p-2 '} to={''}>My List</NavLink>

    </>
    return (
        <div className="navbar bg-slate-800">
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
                        {/* <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li> */}

                        {
                            links
                        }

                    </ul>
                </div>
                <a className="btn btn-active text-xl">Travel Friend</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }

                </ul>
            </div>
            <div className="navbar-end">
                {/* {user?email:''} */}
                {user ? <a className="btn" onClick={HandelLogout}>Logout</a> : <Link to={'/login'} className="btn">Login</Link>}
                {/* <a className="btn">Login</a> */}
            </div>
        </div>
    );
};

export default Header;
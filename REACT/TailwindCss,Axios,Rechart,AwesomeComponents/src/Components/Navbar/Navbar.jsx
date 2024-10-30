import { useState } from "react";
import Link from "../NavbarLink/Link";
// import { IoMenuOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {
            id: 1,
            path: "/",
            name: "Home"
        },
        {
            id: 2,
            path: "/about",
            name: "About"
        },
        {
            id: 3,
            path: "/services",
            name: "Services"
        },
        {
            id: 4,
            path: "/contact",
            name: "Contact"
        },
        {
            id: 5,
            path: "/profile",
            name: "Profile"
        }
    ];


    return (
        <nav className="bg-yellow-100">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? < HiMenuAlt3 className="text-2xl " /> : <IoClose className="text-2xl " />
                }
            </div>


            <ul className={`md:flex gap-3 bg-yellow-500 absolute md:static px-6 ${open ? 'top-16' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>

    );
};

export default Navbar;
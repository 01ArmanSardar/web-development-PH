import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div className=""><h1>this is <strong>Header</strong></h1>
            <br />
            <NavLink className="" to="/about">about</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>

        </div>
    );
};

export default Header;
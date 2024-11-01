import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div className=""><h1>this is <strong>Header</strong></h1>
            <br />
            <Link className="" to="/about">about</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">Home</Link>
            <Link to="users">Users</Link>

        </div>
    );
};

export default Header;
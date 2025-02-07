import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponets/Header/Navbar";
import Footer from "../SharedComponets/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;
import { Outlet } from "react-router-dom";
import Header from "../Commoncomponents/Header";
import Footer from "../Commoncomponents/Footer";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
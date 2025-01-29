import { Outlet } from "react-router-dom";
import Header from "../Page/CommonComponents/Header";
import Footer from "../Page/CommonComponents/Footer";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
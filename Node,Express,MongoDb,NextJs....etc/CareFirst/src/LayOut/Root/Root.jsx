import { Outlet } from "react-router-dom";
import Header from "../../CommonComponents/Header/Header";
import Footer from "../../CommonComponents/Footer/Footer";


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
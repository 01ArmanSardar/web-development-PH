import Home from "../Home/Home";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
           {/* <Home></Home> */}
        </div>
    );
};

export default Root;
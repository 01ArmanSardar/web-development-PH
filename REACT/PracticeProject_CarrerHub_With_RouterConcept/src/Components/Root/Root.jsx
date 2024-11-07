
import { Outlet } from "react-router-dom";
import Fotter from "../Footer/Fotter";
import Header from "../Header/Header";
const Root = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>

            <Fotter></Fotter>
        </div>
    );
};

export default Root;
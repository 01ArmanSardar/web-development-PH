import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Fotter from "../Fotter/Fotter";
const Home = () => {

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
            <h2>this is home page</h2>
            <Fotter></Fotter>
        </div>
    );
};

export default Home;
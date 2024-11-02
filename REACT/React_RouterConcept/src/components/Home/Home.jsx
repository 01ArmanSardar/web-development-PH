import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Fotter from "../Fotter/Fotter";
const Home = () => {
    const navigation = useNavigation();
    const location=useLocation()
    console.log(location);
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? <p>Loading....</p> : <Outlet></Outlet>
            }


            <h2>this is home page</h2>
            <Fotter></Fotter>
        </div>
    );
};

export default Home;
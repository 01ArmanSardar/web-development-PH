import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSideNav/LeftSide";
import Navbar from "../Shared/Navbar/Navbar";
import RightSide from "../Shared/RightSideNav/RightSide";
import BrekingNews from "./BrekingNews";
import NewsCard from "./NewsCard";
// import { data } from "react-router-dom";


const Home = () => {
    const [newss, SetNews] = useState([])
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => SetNews(data))

    }, [])
    return (

        <div>
            <Header></Header>
            <BrekingNews></BrekingNews>
            <Navbar></Navbar>

            <div className="grid lg:grid-cols-4">
                <div className="border">
                    <RightSide></RightSide>
                </div>
                <div className="col-span-2 mx-auto">

                    {
                        newss.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
                    }
                </div>
                <div className="border">
                    <LeftSide />
                </div>
            </div>

        </div>
    );
};

export default Home;
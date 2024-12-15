import { useLoaderData, useParams } from "react-router-dom";
import LeftSide from "../Shared/LeftSideNav/LeftSide";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";

const NewsDetails = () => {
    const { id } = useParams()
    const [news, setNews] = useState()
    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            // .then(data => data.map(aNews => (id===aNews.id)? setNews(aNews):'not same id'))
            .then(data=>data.map(anews=>setNews(anews)))

    }, [])
    console.log(news);
    console.log(id);
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">

                <div className="border col-span-3">
                    <h1>newz</h1>
                    {/* <h1>{id}</h1> */}
                    {id}
                    {/* {news.details}
                    <p className="text-orange-900">View {news.total_view
                    }</p> */}

                </div>
                <div className="border col-span-1">
                    <LeftSide></LeftSide>
                </div>

            </div>
        </div>

    );
};

export default NewsDetails;
import { useLoaderData, useParams } from "react-router-dom";
import LeftSide from "../Shared/LeftSideNav/LeftSide";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";


const NewsDetails = () => {
    const news=useLoaderData()
    console.log(news);
    // const { _id } = useParams()
    // console.log(typeof (_id));
    // const [Dnewss, DSetNews] = useState([])
    // const [Sdnews, SdSetNews] = useState({})
    // useEffect(() => {
    //     fetch('/news.json')
    //         .then(res => res.json())

    //         .then(data => DSetNews(data))

    // }, [])
    // console.log(Dnewss);


    // const DetailsNews = Dnewss.find(item => { item._id ===_id  })
    // const isIdHave = (item) => {

    //     return item._id === _id
    // };
    // const DetailsNews = Dnewss.find(isIdHave)
    // console.log('this is detailsnews', Dnewss);
    // SdSetNews(DetailsNews)
    // console.log(DetailsNews);
    // console.log(typeof (DetailsNews));
    // console.log(DetailsNews);


    // const [news, setNews] = useState()
    // useEffect(() => {
    //     fetch('/news.json')
    //         .then(res => res.json())
    //         // .then(data => data.map(aNews => (id===aNews.id)? setNews(aNews):'not same id'))
    //         .then(data => data.map(anews => setNews(anews)))

    // }, [])
    // console.log(news);
    // console.log(_id);

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">

                <div className="border col-span-3">
                    <h1>newz</h1>
                    {/* <h1>{id}</h1> */}
                    {/* {_id} */}
                    {/* {news.details}
                    <p className="text-orange-900">View {news.total_view
                    }</p> */}
                    {/* {
                        DetailsNews ? <p>news not found</p> : <p>{DetailsNews.details}</p>
                    } */}
                    
                        {/* <p>{Sdnews.title}</p> */}
                    
<p>{news.details}</p>
                </div>
                <div className="border col-span-1">
                    <LeftSide></LeftSide>
                </div>

            </div>
        </div>

    );
};

export default NewsDetails;
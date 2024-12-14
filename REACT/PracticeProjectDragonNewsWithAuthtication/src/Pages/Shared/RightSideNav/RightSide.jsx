import { useEffect, useState } from "react";
// import NewsCardDFOrRIghtSide from "./NewsCardDFOrRIghtSide";



const RightSide = () => {
    const [Categories, SetCategories] = useState([])
    // const [news, SetNews] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => SetCategories(data))
        // .catch(err => console.log(err))
        // fetch('news.json')
        //     .then(res => res.json())
        //     .then(data => SetNews(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-xl mx-6 font-semibold">All Categories</h1>
                {
                    Categories.map(Category => <h1 key={Category.id} className="p-3">{Category.name}</h1>)
                }

            </div>
          
        </div>
    );
};

export default RightSide;
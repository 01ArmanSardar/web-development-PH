import Marquee from "react-fast-marquee";
import pic1 from '../../public/5a23a4ef9975b1634766112318e8b062.jpg'
import pic2 from '../../public/5b113540a93649aeda54ce4d35228ec4.jpg'
import pic3 from '../../public/8ca3596b44c4c3049040bec9ec4ae6d2.jpg'
import { useEffect, useState } from "react";
import SingleTOuristSpot from "./SingleTOuristSpot";

const Home = () => {
    const [touristSpot, SetTOuristSpot] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/touristSpot')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetTOuristSpot(data)
            })

    }, [])

    return (
        <div>
            <section className="BannerSlider w-3/4 m-auto">
                <Marquee className=" lg:rounded-3xl  " speed={150} pauseOnHover="true">


                    <img className="w-2/3" src={pic1} alt="" />
                    <img className="w-2/3" src={pic2} alt="" />
                    <img className="w-2/3" src={pic3} alt="" />

                </Marquee>

            </section>
            <section className="TouristSPots">
                <div className="grid grid-cols-3 gap-4">
                {
                    touristSpot.map(OneSpot => <SingleTOuristSpot spot={OneSpot} key={OneSpot._id}></SingleTOuristSpot>)
                }
                </div>

            </section>
            <section className="COuntry"></section>
            <section className="Ex1"></section>
            <section className="Ex2"></section>
        </div>
    );
};

export default Home;
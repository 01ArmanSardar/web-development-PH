import { useEffect, useState } from "react";
import SharedSections from "../../../Components/SharedSections";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
import { VscSymbolNumeric } from "react-icons/vsc";

const Testimonials = () => {
    const [reviews, SetReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                SetReviews(data)
            })

    }, [])
    return (
        <div>
            <SharedSections subHeading={'what our client say'} heading={'TESTIMONIALs'}>
            </SharedSections>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center my-16 mx-24">

                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <VscSymbolNumeric className="text-6xl pt-4"/>
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }


            </Swiper>

        </div>
    );
};

export default Testimonials;
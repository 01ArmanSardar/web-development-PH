
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SharedSections from '../../../Components/SharedSections';
const Category = () => {
    return (
        <div>
            <section>
                <SharedSections
                subHeading={'from 10 am to 11 pm'}
                heading={'Order online'}
                >
                    
                </SharedSections>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
            
                <SwiperSlide><img src={img1} alt=""  />
                <h1 className='text-3xl text-center -mt-16 text-base-300'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide><img src={img2} alt=""  /><h1 className='text-3xl text-center -mt-16 text-base-300'>burger</h1></SwiperSlide>
                <SwiperSlide><img src={img3} alt=""  /><h1 className='text-3xl text-center -mt-16 text-base-300'>desert</h1></SwiperSlide>
                <SwiperSlide><img src={img4} alt=""  /><h1 className='text-3xl text-center -mt-16 text-base-300'>coffe</h1></SwiperSlide>
                <SwiperSlide><img src={img5} alt=""  /><h1 className='text-3xl text-center -mt-16 text-base-300'>etc</h1></SwiperSlide>
                {/* <SwiperSlide><img src={img4} alt=""  /></SwiperSlide>
                <SwiperSlide><img src={img3} alt=""  /></SwiperSlide>
                <SwiperSlide><img src={img2} alt=""  /></SwiperSlide> */}
              
            </Swiper>
            </section>
        </div>
    );
};

export default Category;
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Patient.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Patients = () => {
    return (
        <div>
            <div className="text-center mt-12 p-12">
                <h1 className="text-center text-4xl font-bold ">What our Patient Says</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ut totam perspiciatis iusto quam laudantium illum velit libero? Suscipit, nesciunt.</p>
            </div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-amber-100'>
                    <div className='flex justify-start p-5 '>
                        <div >
                            <div className="avatar mr-3">
                                <div className="w-12 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold'>sakib</h1>
                            <p>softwer enginer</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium. Vero laboriosam illum suscipit culpa labore facilis perspiciatis quod officia laudantium officiis?</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-blue-300'>
                    <div className='flex justify-start p-5 '>
                        <div>
                            <div className="avatar mr-3">
                                <div className="w-12 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold'>rakib</h1>
                            <p>politian</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium. Vero laboriosam illum suscipit culpa labore facilis perspiciatis quod officia laudantium officiis?</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-cyan-400'>
                    <div className='flex justify-start p-5 '>
                        <div>
                            <div className="avatar mr-3">
                                <div className="w-12 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold'>kader</h1>
                            <p>advocate</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium. Vero laboriosam illum suscipit culpa labore facilis perspiciatis quod officia laudantium officiis?</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-yellow-100'>
                    <div className='flex justify-start p-5'>
                        <div>
                            <div className="avatar mr-3">
                                <div className="w-12 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold'>fakhrul</h1>
                            <p>teacher</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium. Vero laboriosam illum suscipit culpa labore facilis perspiciatis quod officia laudantium officiis?</p>
                    </div>
                </SwiperSlide>
               


            </Swiper>


        </div>
    );
};

export default Patients;
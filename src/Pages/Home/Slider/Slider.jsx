
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

import './style.css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import image1 from "../../../assets/banner/w.png";
import image2 from "../../../assets/banner/g.png";
import image3 from "../../../assets/banner/d.png"

import { FaArrowRight } from 'react-icons/Fa';



const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {/* slider-1 */}
                <div className=" relative w-full">
                    <SwiperSlide >
                        <img className='w-full lg:h-[680px] md:h-[500px] h-[300px]' src={image1} alt="" />
                        <div className="absolute lg:h-[680px] md:h-[500px] h-[300px] flex items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                            <div className="text-white  md:space-y-7 space-y-2 lg:pl-[350px] md:pl-[100px] pl-14">
                                <h2 className="lg:text-5xl md:text-4xl text-lg font-bold">We provide the best web services</h2>
                                <p className="lg:text-xl md:text-base text-[10px] ">You can find out about the web development marketplace at our website</p>
                                <div className='text-center '>
                                    <button className="btn btn-active btn-primary text-lg">Read More <FaArrowRight></FaArrowRight></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>

                {/* slider-2 */}
                <div className='w-full h-[680px] '>
                    <SwiperSlide>
                        <img className='w-full lg:h-[680px] md:h-[500px] h-[300px]' src={image2} alt="" />
                        <div className="absolute lg:h-[680px] md:h-[500px] h-[300px] flex items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                            <div className="text-white  md:space-y-7 space-y-2 lg:pl-[220px] md:pl-16">
                                <h2 className="lg:text-5xl md:text-3xl text-xl font-bold">We provide the best Digital Marketing services</h2>
                                <p className="lg:text-xl md:text-base text-[10px] ">You can find out about the Digital Marketing marketplace at our website</p>
                                <div className='text-center '>
                                    <button className="btn btn-active btn-primary text-lg">Read More <FaArrowRight></FaArrowRight></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>


                {/* slider-3 */}
                <div className='w-full h-[680px]'>
                    <SwiperSlide>
                        <img className='w-full lg:h-[680px] md:h-[500px] h-[300px]' src={image3} alt="" />
                        <div className="absolute lg:h-[680px] md:h-[500px] h-[300px] flex items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                            <div className="text-white  md:space-y-7 space-y-2 lg:pl-[250px] md:pl-16">
                                <h2 className="lg:text-5xl md:text-3xl text-xl font-bold">We provide the best Graphic Design services</h2>
                                <p className="lg:text-lg md:text-base text-[10px] ">You can find out about the Graphic Design marketplace at our website</p>
                                <div className='text-center '>
                                    <button className="btn btn-active btn-primary text-lg">Read More <FaArrowRight></FaArrowRight></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>

            </Swiper >
        </div >
    );
};

export default Slider;






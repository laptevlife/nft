



import React from 'react'
import { SliderArrow, Spider2, Variant1, Variant2 } from '../../svg'
import { Pagination, Scrollbar, Autoplay, Mousewheel, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import right from '../../Images/Group 52.png'
import left from '../../Images/Group 53.png'
import Group45 from '../../Images/Group 45.png'
import img1 from '../../Images/Rectangle (4).png'
import img2 from '../../Images/Rectangle (5).png'
import { aboutCollectionArr, round1Arr, round2Arr } from '../../constants/index'
import { Context } from '../../constants/context'

const AboutCollection = () => {
    const { windowWidth } = React.useContext(Context)

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    console.log("Navigation", Navigation);


    return (
        <div className='about__section section'>

            {/* <Spider2 /> */}
            <div className="container">

                <div className="headline headline-center"  >
                    About the collection
                </div>
                <div className="under__headline under__headline-dark" style={{ color: "#fff" }}>
                    Prerequisites for success in the cannabis business
                </div>
            </div>
            <div className="container slider-container">
                <Swiper
                    spaceBetween={50}
                    modules={[Navigation, Pagination, Autoplay, Mousewheel]}
                    slidesPerView={"auto"}
                    // autoplay
                    // mousewheel
                    speed={500}
                    // loopedSlides={banners?.filter(i => windowWidth > 768 ? !i.is_mobile_version : i.is_mobile_version).length - 1}
                    // loop={true}
                    // pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}


                >


                    {
                        aboutCollectionArr.map((i, index) => {
                            return (
                                <SwiperSlide className='collection-slide' key={i + index}>
                                    <img src={i.image} alt="" />
                                    <div className="text2">{i.text}</div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
                {
                    windowWidth > 650 && (
                        <div className="controlls">
                            <div className="toLeft sliderArrow" ref={navigationPrevRef}>
                                <SliderArrow />
                            </div>
                            <div className="toRight sliderArrow" ref={navigationNextRef} onClick={() => console.log("HUy")}>
                                <SliderArrow />
                            </div>
                        </div>
                    )
                }

            </div>



            <div className="container">

                <br /><br />
                <br /><br />

                <div className="headline headline-center headline-smaller">
                    Two rounds of fundraising
                </div>
                <br /><br />
                <br /><br />
                <div className="section__row">
                    <div className="left pay-variant">
                        <img src={left} className='variant' alt="" />
                        {windowWidth > 550 && <img src={img1} className='weedround-left' alt="" />}

                        <div className="content">
                            {
                                round1Arr.map((i, index) => {
                                    return (
                                        <ul key={i.text}>
                                            <li>
                                                <img src={Group45}
                                                    className='card__weed'
                                                    style={index == 3 ? { marginTop: "-12px" } : {}}
                                                    alt="" />
                                                {i.text}
                                            </li>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="right pay-variant">

                        <img src={right} className='variant' alt="" />
                        <img src={img2} className='weedround' alt="" />
                        <div className="content">
                            {
                                round2Arr.map((i, index) => {
                                    return (
                                        <ul key={i.text}>
                                            <li>
                                                <img src={Group45}
                                                    className='card__weed'
                                                    style={index == 3 ? { marginTop: "-12px" } : {}}
                                                    alt="" />
                                                {i.text}
                                            </li>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <br /><br />
                <br /><br />
                {/* <br /><br /> */}


            </div>


        </div>
    )
}

export default AboutCollection
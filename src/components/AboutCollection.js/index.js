



import React from 'react'
import { Spider2, Variant1, Variant2 } from '../../svg'
import { Pagination, Scrollbar, Autoplay, Mousewheel, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import frame2 from '../../Images/frame2.png'
import { aboutCollectionArr } from '../../constants/index'


const AboutCollection = () => {
    return (
        <div className='about__section'>

            <Spider2 />
            <div className="container">
                <br /><br />
                <br /><br />
                <br /><br />


                <div className="headline headline-center"  >
                    About the collection
                </div>
                <div className="under__headline under__headline-dark" style={{ color: "#fff" }}>
                    Prerequisites for success in the cannabis business
                </div>
            </div>
            {/* <div className="container "> */}
                <div className="container slider-container">
                    <Swiper
                        spaceBetween={50}
                        modules={[Pagination, Autoplay, Mousewheel]}
                        slidesPerView={"auto"}
                        // autoplay
                        // mousewheel
                        speed={500}
                        // loopedSlides={banners?.filter(i => windowWidth > 768 ? !i.is_mobile_version : i.is_mobile_version).length - 1}
                        // loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                    >
                        {
                            aboutCollectionArr.map((i) => {
                                return (
                                    <SwiperSlide className='collection-slide'  >
                                        {/* <img src={frame2} className='frame' alt="" /> */}

                                        <img src={i.image} alt="" />
                                        <div className="text2">{i.text}</div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
            {/* </div> */}



            <div className="container">

                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <div className="headline headline-center headline-dark">
                    Two rounds of fundraising
                </div>
                <br /><br />
                <br /><br />
                <br /><br />
                <div className="section__row">
                    <div className="left pay-variant">
                        {/* <Variant1 /> */}
                        {/* <div className="content">
                            <ul>
                                <li>
                                    We will distribute among all the 555 30% of the fund profit from:
                                </li>
                                <li>
                                    Dividends from the main business
                                </li>
                                <li>
                                    The part of NFT resale fee (part of 4% from each resale)
                                </li>
                                <li>
                                    Other future activities
                                </li>
                                <li>
                                    Profit = Income - Operational costs
                                </li>
                                <li>
                                    Chat in Discord + Special support
                                </li>
                                <li>
                                    Individual manager for all owners
                                </li>
                                <li>
                                    Business advice form medical cannabis manufacturing brand founders' upon request

                                </li>
                                <li>
                                    Private room in Discord for the direct communication with founders
                                </li>
                                <li>
                                    Regular online-meetings with founders
                                </li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="right pay-variant">
                        {/* <Variant2 />
                        <div className="content">
                            <ul>
                                <li>
                                    We will distribute among all the 33 333 70% of the fund profit from:
                                </li>
                                <li>
                                    Dividends from the main business
                                </li>
                                <li>
                                    The part of NFT resale fee (part of 4% from each resale)
                                </li>
                                <li>
                                    Other future activities
                                </li>
                                <li>
                                    Profit = Income - Operational costs
                                </li>
                                <li>
                                    Chat in Discord general acivities
                                </li>

                            </ul>
                        </div> */}
                    </div>
                </div>
                <br /><br />
                <br /><br />
                <br /><br />










            </div>


        </div>
    )
}

export default AboutCollection
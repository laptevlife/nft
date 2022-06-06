import React from 'react'
import Weed1 from '../../Images/weed1.png'
import weed2 from '../../Images/weed2.png'
import image8 from '../../Images/image8.png'
import image7 from '../../Images/image7.png'
import image6 from '../../Images/image6.png'
import Group from '../../Images/Group.png'
import { CircleGreen, Weed2 } from '../../svg'



const DigitalSide = () => {
    return (
        <div className="digital__side">
            <div className="container">
                <div className="headline">
                    Digital side of the Project
                </div>
                <div className="under__headline">
                    why do we need the DAO/digital side of the Project?
                </div>
                <div className="digital__side-content">
                    <div className="watermark1">
                        <img src={Weed1} alt="" />
                    </div>
                    <div className="row column">
                        <div className="circle circle1">
                            <CircleGreen />
                        </div>
                        <div className="left">
                            <img src={image8} alt="" className="image" />
                        </div>
                        <div className="right">
                            <div className="text-container tx-m">
                                <div className="text">
                                    To reflect the interests of collectors and contirbutors that are part our business in one place. This place could be a digital community only, but because we offer more than regular benefits, for example investment benefits, we will accumulate and operate this side officially on behalf of a special purpose vehicle (SPV). This SPV will become a collective image of all Medican project participants.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row reverse column ">
                        <div className="weed2">
                            <Weed2 />
                        </div>
                        <div className="circle circle2">
                            <CircleGreen />
                        </div>
                        <div className="left">
                            <img src={image7} alt="" className="image" />
                        </div>
                        <div className="right">
                            <div className="text-container text-container2 tx-m">
                                <div className="text">
                                    In terms of legitimacy of cryptocurrencies transactions and in order to implement our idea of paying the benefits from medical cannabis manufacturing we need to have a legal entity/special purpose vehicle in a jurisdcition that is crypto friendly. We believe that Georgia could be one of these jurisdictions
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row column">
                        <div className="watermark1 weed22">
                            <img src={weed2} alt="" />
                        </div>
                        <div className="circle circle3">
                            <CircleGreen />
                        </div>
                        <div className="left">
                            <img src={image6} alt="" className="image" />
                        </div>
                        <div className="right">
                            <div className="text-container">
                                <div className="text">
                                    The SPV can be involved into additional activities beyond its initial goals. It can further develop and extend the Digital collection.                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <br /><br />
                <br /><br />

                <div className="headline">
                    What's next?
                </div>
                <br /><br />
                <p className="text">
                    Within our case not only will we raise funds for the business, with NFT technology we will be able to deliver additional benefits to its owners.
                    We intend:
                </p>
                <br /><br />
                <br /><br />

                <div className="next__content">
                    <div className="next__content-row">
                        <div className="card card-mb">
                            <div className="wrap">
                                <img src={Group} alt="" className="picture" />
                                <div className="text">
                                    to create NFT- <br />based avatars <br /> for Metaverses
                                </div>
                            </div>
                        </div>
                        <div className="card card-mt">
                            <div className="wrap">
                                <img src={Group} alt="" className="picture" />
                                <div className="text">
                                    to create <br /> additional <br />attributes for <br />Metaverse
                                </div>
                            </div>
                        </div>
                        {/* <br /> */}
                        <div className="card card-mb">
                            <div className="wrap">
                                <img src={Group} alt="" className="picture" />
                                <div className="text">
                                    to create <br /> representation <br />of our business <br />in Metaverse
                                </div>
                            </div>
                        </div>
                        <div className="card card-mt">
                            <div className="wrap">
                                <img src={Group} alt="" className="picture" />
                                <div className="text">
                                    to cooperate <br />with other <br />collections
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="next__content-row">
                        <div className="card card-mb">
                            <div className="wrap">
                                <img src={Group} alt="" className="picture" />
                                <div className="text">
                                    to whitelist our <br />
                                    NFT owners for <br />
                                    exclusive offers<br />
                                    in upcoming <br />
                                    projects
                                </div>
                            </div>
                        </div>
                        <div className="card card-mt">
                            <div className="wrap">
                                <img src={Group} alt="" className="picture" />
                                <div className="text">
                                    to build-up the <br />
                                    biggest medical <br /> 
                                    cannabis <br />
                                    community in the <br />
                                    world
                                </div>
                            </div>
                        </div>
                        <div className="card card-mb">
                            <div className="wrap">
                                <img src={Group} alt="" className="picture" />
                                <div className="text">
                                    to explore and <br />
                                    research the <br />
                                    effects of<br />
                                    cannabis and<br />
                                    focus on the <br />
                                    improvement of<br />
                                    quality of life
                                </div>
                            </div>
                        </div>
                        <div className="card card-mt">
                            <div className="wrap">
                                <img src={Group} alt="" className="picture" />
                                <div className="text">
                                    to participate in  <br />
                                    charity projects <br />
                                    (not only CSR <br />
                                    but also  <br />
                                    personal social <br />
                                    responsibility)
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <br /><br /> */}
                {/* <br /><br /> */}
                <br /><br />
                <p className="text">
                    And this is not the end of the list. Together with our NFT owners we will define other business projects for the SPV.
                </p>
                <br /><br />

            </div>
            <div className="hide-spider"></div>



        </div>
    )
}

export default DigitalSide
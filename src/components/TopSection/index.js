import React from 'react'
import { Approve, Mint, SpiderWeb, ReadMore, MintMb, ApproveMb } from '../../svg'
import counter from '../../Images/Counter.png'
import img1 from '../../Images/photo5341685083150596649 1.png'
import img2 from '../../Images/Group 6.png'
import img3 from '../../Images/Group 7.png'

const TopSection = () => {
    return (
        <div className='top__section'>

            <SpiderWeb />
            <div className="container">
                <h1 className="top__section-headline">
                    Medican
                </h1>
                <h2 className="top__section-description under__headline">
                    A unique crypto asset (NFT Art collection) with real life value
                </h2>
                <div className="top__section-content ">
                    <div className="top__section-column tsc-dt">
                        <div className="title">
                            Minted Epic NFT <br />000/555
                        </div>
                        <div className="counter">
                            <div className="counter-box">
                                <div className="number-block">
                                    <div className="number">5</div>
                                    <div className="number">5</div>
                                    <div className="number">5</div>
                                    <div className="number">$</div>
                                </div>

                            </div>
                            <img src={counter} alt="" />
                        </div>
                        <div className="mint btn">
                            <Mint />
                        </div>
                        <div className="approve btn">
                            <Approve />
                        </div>
                    </div>

                    <div className="top__section-column top__section-column-center">
                        <div className="top-slider">
                            <img src={img1} className='top-image' alt="" />
                        </div>
                        <div className="approve btn">
                            <ReadMore />
                        </div>
                    </div>

                    <div className="top__section-column tsc-dt">
                        <div className="title">
                            Minted Legendary NFT <br /> 000/33333

                        </div>
                        <div className="counter">
                            <div className="counter-box">
                                <div className="number-block">
                                    <div className="number">3</div>
                                    <div className="number">3</div>
                                    <div className="number">3</div>
                                    <div className="number">$</div>
                                </div>

                            </div>
                            <img src={counter} alt="" />

                        </div>
                        <div className="mint btn">
                            <Mint />
                        </div>
                        <div className="approve btn">
                            <Approve />
                        </div>
                    </div>

                    <div className="top__section-mobil-content">
                        <div className="title">
                            Minted Epic NFT 000/555
                        </div>
                        <br />
                        <div className="top__section-column-mobil ">
                            <div className="counter">
                                <div className="counter-box counter-box-5">
                                    <div className="number-block">
                                        <div className="number">5</div>
                                        <div className="number">5</div>
                                        <div className="number">5</div>
                                        <div className="number">$</div>
                                    </div>

                                </div>
                                <img src={img2} className='top-image' alt="" />

                            </div>
                            <div className="buttons">

                                <MintMb />
                                <ApproveMb />
                            </div>
                        </div>
                        <br />
                        <div className="title">
                            Minted Epic NFT 000/33333
                        </div>
                        <br />
                        <div className="top__section-column-mobil reverse">
                            <div className="counter counter-20px">
                                <div className="counter-box counter-box-3">
                                    <div className="number-block">
                                        <div className="number">3</div>
                                        <div className="number">3</div>
                                        <div className="number">3</div>
                                        <div className="number">$</div>
                                    </div>

                                </div>
                                <img src={img3} className='top-image' alt="" />

                            </div>
                            <div className="buttons buttons-mt20">
                                <MintMb />
                                <ApproveMb />
                            </div>
                        </div>
                    </div>


                </div>

            </div>


        </div>
    )
}

export default TopSection
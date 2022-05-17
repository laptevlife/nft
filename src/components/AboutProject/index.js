import React from 'react'
import img1 from '../../Images/image1.png'
import img2 from '../../Images/image2.png'
import img3 from '../../Images/image3.png'
import img4 from '../../Images/image4.png'
import img5 from '../../Images/image5.png'




const AboutProject = () => {
    return (
        <div className="about__project">
            <div className="container">
                <div className="headline">
                    About the project
                </div>
                <br /><br />
                <p className="text">
                    You are here because this is the first fundraising case in the world for a future medical cannabis project from the region known to the Motherland of Cannabis. The first written reference of cannabis in the history of mankind appeared on the territory of The Great Silk Road. Nowadays this the territory of China, Kazakhstan, Uzbekistan, part of Afghanistan and part of Iran.
                </p>
                <br /><br />
                <p className="text">
                    The idea came to our mind to produce cannabis derived products in Kazakhstan where we have managed to obtain a unique license for cannabis production (cultivation) as for manufacturing of the final product from its derivatives. The base for this business is the production of cannabinoids such as CBD, CBG, CBC, CNB, CBDA, CBGA, even THC and other
                </p>
                <br /><br />
                <p className="text">
                    We are passionate about this business industry because we believe in cannabinoids' (cannabis derivatives) beneficial properties and we are confident about the prospects of their wide dissemination due to proven therapeutic properties.
                </p>
                <br /><br /> <br /><br />
                <div className="about__project-content">
                    <div className="row">
                        <div className="left">
                            <img src={img4} className="image" alt="" />
                        </div>
                        <div className="right">
                            <p className="text">
                                We decided to empower the physical production with latest trends and technologies. This is how the project got quickly connected to the real blockchain technologies.
                            </p>
                        </div>
                    </div>
                    <div className="row row-reverse">
                        <div className="left">
                            <p className="text">
                                Today we offer up to 30% of our company's assets to the legal entity that will operate and run the MediCan NFT and Crypto Coin Project. With this, we would to offer you to become a member of our our team.
                            </p>
                        </div>
                        <div className="right">
                            <img src={img2} className="image" alt="" />
                        </div>
                    </div>

                    <div className="row ">
                        <div className="left">
                            <img src={img5} className="image" alt="" />
                        </div>
                        <div className="right">
                            <p className="text">
                                The business is very simple - an NFT collection is sold as a main fundraising tool for the Cannabis production and Crypto mining. It is the base for everything.
                            </p>
                        </div>
                    </div>
                    <div className="row row-reverse">
                        <div className="left">
                            <p className="text">
                                The business interests of our collectors and contirbutors will be handled by the same team from a special legal entity that will develop the digital and DAO side of the business. So you in the end apart from owning the NFT art you will also gain different benefits and profits from the cannabis business and from the tokenization (crypto mining of our own MediCan coin)
                            </p>
                        </div>
                        <div className="right">
                            <img src={img3} className="image" alt="" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="left">
                            <img src={img1} className="image" alt="" />
                        </div>
                        <div className="right">
                            <p className="text">
                                As a cherry on a pie, we would like you know that owning the MediCan NFTs will autimatically make you a contributor to the specially created research team (MediCan Lab) that will invest it's resources in exploring new benefits of cannabinoids and potential therapeutical effects on human bodies. Who knows, maybe we will be the ones to find some cancer treatment?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutProject



// The idea came to our mind to produce cannabis derived products in Kazakhstan where we have managed to obtain a unique license for cannabis production (cultivation) as for manufacturing of the final product from its derivatives. The base for this business is the production of cannabinoids such as CBD, CBG, CBC, CNB, CBDA, CBGA, even THC and other




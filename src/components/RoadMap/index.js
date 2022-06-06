import React from 'react'
import { SpiderWeb, TwitterSvg, InSvg, FbSvg } from '../../svg'
import BigWeed from '../../Images/Group 55 (2).png'
import MobilWeed from '../../Images/Group 55 (5).png'
import gr2 from '../../Images/Group (2).png'

import { Context } from '../../constants/context'
import { teamArr, businessTeamArr, cultivationTeamArr } from '../../constants/index'
import clsx from 'clsx';
import WeedMobil from '../../svg/WeedMobil2'





const TopSection = () => {

    const { windowWidth } = React.useContext(Context)


    return (
        <>
            <div className='roadmap__section Roadmap'>
                {windowWidth > 768 && <SpiderWeb />}
                <div className="container">
                    <div className="headline headline-center "  >
                        Roadmap
                    </div>
                    <br />
                    <br />
                    <br className="br-moboiol" />
                    <br className="br-moboiol" />
                    {
                        windowWidth > 992 && (
                            <>
                                <RoadMapText />
                                <img src={BigWeed} className={clsx('bigWeed', {})} />
                            </>

                        )
                    }

                </div>
                <div className={clsx('', 'displayBlock', {
                    "displayNone": windowWidth > 992
                })}>
                    <WeedMobil />
                    <RoadMapText />

                </div>
            </div>
            <div className="team__section section">
                <div className="container">
                    <div className="headline headline-center "  >
                        Team
                    </div>
                    <br />
                    <br />
                    <div className="headline headline-center headline-black"  >
                        Digital team
                    </div>
                    <div className="team__cards-wrapper">
                        {
                            teamArr.map((i, index) => {
                                return (
                                    <React.Fragment key={i + index}>
                                        <TeamCard i={i} index={index} />
                                    </React.Fragment>
                                )
                            })
                        }

                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="headline headline-center headline-black"  >
                        business management team
                    </div>
                    <div className="team__cards-wrapper">
                    <img src={gr2} className="gr2" alt="" />
                        {
                            businessTeamArr.map((i, index) => {
                                return (
                                    <React.Fragment key={i + index}>
                                        <TeamCard i={i} index={index} />
                                    </React.Fragment>
                                )
                            })
                        }

                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="headline headline-center headline-black"  >
                        cultivation & extraction team
                    </div>
                    <div className="team__cards-wrapper">
                        {
                            cultivationTeamArr.map((i, index) => {
                                return (
                                    <React.Fragment key={i + index}>
                                        <TeamCard i={i} index={index} />
                                    </React.Fragment>
                                )
                            })
                        }

                    </div>
                </div>

            </div>

        </>
    )
}

export default TopSection

const TeamCard = ({ i, index }) => {
    return (
        <div className="team-card" key={index}>
            <div className="wrap">
                <img src={i.img} alt="" className="picture" />
                <div className="title text">{i.title}</div>
                <div className="text">
                    {i.position}
                </div>
                <div className="icons">
                    {i.links?.fb && <span><FbSvg /></span>}
                    {i.links?.tw && <span><TwitterSvg /></span>}
                    {i.links?.in && <span><InSvg /></span>}
                </div>
            </div>
        </div>
    )
}


const RoadMapText = () => {
    return (
        <div className="roadmap__container">

            <div className="roadmap-text roadmap1">
                The launch of NFT collection. <br className='roadmap__br-dt ' /><br className=' roadmap__br-mob' />
                Private round.
            </div>
            <div className="roadmap-text roadmap2">
                Registration of a legal <br className='roadmap__br-mob' /> entity <br className='roadmap__br-dt' />
                following the <br className='roadmap__br-mob' /> first round <br className='roadmap__br-dt' />
                closure at <br className='roadmap__br-mob' /> 1 000 000 $
            </div>
            <div className="roadmap-text roadmap3">
                Initial farm <br className='roadmap__br-mob' /> construction<br className='roadmap__br-dt' />
                phase <br className='roadmap__br-mob' /> (land purchasing,<br className='roadmap__br-dt ' /><br className=' roadmap__br-mob' />
                satellite imagery of <br className='roadmap__br-mob' /> the<br className='roadmap__br-dt' /> land, farm <br className='roadmap__br-mob' /> delineation)
            </div>
            <div className="roadmap-text roadmap4">
                Project working<br className='roadmap__br-dt ' /><br className=' roadmap__br-mob' /> documents <br className='roadmap__br-dt ' /><br className=' roadmap__br-mob' />
                development <br className='roadmap__br-dt ' /><br className=' roadmap__br-mob' />
                including project <br className='roadmap__br-dt ' /><br className=' roadmap__br-mob' />
                design, concept <br className='roadmap__br-dt ' /><br className=' roadmap__br-mob' />
                design, technical <br className='roadmap__br-dt ' /><br className=' roadmap__br-mob' />
                layouts
            </div>
            <div className="roadmap-text roadmap5">
                CCI <br className='roadmap__br-mob' /> DELOITTE <br className='roadmap__br-dt ' /><br className=' roadmap__br-mob' />
                business & <br className='roadmap__br-mob' /> financial <br className='roadmap__br-dt ' /><br className=' roadmap__br-mob' />
                assessment
            </div>
            <div className="roadmap-text roadmap6">
                Sold Out collection <br className='roadmap__br-mob' /> marketing and <br className='roadmap__br-dt' />
                promotion. <br className='roadmap__br-mob' />Launching the 2nd <br className='roadmap__br-dt' />
                public <br className='roadmap__br-mob' /> round of fundraising
            </div>
            <div className="roadmap-text roadmap7">
                Closing the second <br className='roadmap__br-mob' /> round and <br className='roadmap__br-dt' />
                starting <br className='roadmap__br-mob' /> the implementation <br className='roadmap__br-mob' /> of <br className='roadmap__br-dt' />
                business project <br className='roadmap__br-mob' /> on the <br className='roadmap__br-dt' />
                cannabinoids <br className='roadmap__br-mob' /> extraction plant <br className='roadmap__br-dt ' /><br className=' roadmap__br-mob' />
                construction
            </div>
            <div className="roadmap-text roadmap8">
                Ordering and pre-ordering <br className='roadmap__br-dt ' /><br className=' roadmap__br-mob' />
                of the equipment, plant <br className='roadmap__br-dt ' /><br className=' roadmap__br-mob' />
                construction
            </div>
            <div className="roadmap-text roadmap9">
                Cultivation at the farm.<br className='roadmap__br-dt ' /><br className=' roadmap__br-mob' />
                Obtaining the first official crop
            </div>
            <div className="roadmap-text roadmap10">
                EU GMP <br className='roadmap__br-dt' /> certification of <br className='roadmap__br-dt' />
                the plant
            </div>
            <div className="roadmap-text roadmap11">
                Project marketing <br className='roadmap__br-dt' />
                and <br className='roadmap__br-mob' /> finding partners<br className='roadmap__br-dt' />
                for <br className='roadmap__br-mob' /> selling the <br className='roadmap__br-dt' />
                product
            </div>
            <div className="roadmap-text roadmap12">
                Annual public <br className='roadmap__br-mob' /> reporting<br className='roadmap__br-dt' />
                on <br className='roadmap__br-mob' /> the project
            </div>
            <div className="roadmap-text roadmap13">
                Paying dividends to the<br className='roadmap__br-dt' />
                sharefolders following the<br className='roadmap__br-dt' />
                results of the second year<br className='roadmap__br-dt' />
                of project implementation<br className='roadmap__br-dt' />
                (the first year after the plant<br className='roadmap__br-dt' />
                construction)
            </div>
        </div>
    )
}
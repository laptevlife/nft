import React from 'react'
import DropDownItem from '../common/dropDownItem'
import { risks, faqArr } from '../../constants/index'
import { Spider2 } from '../../svg'
import Group11 from '../../Images/Group 11.png'


const Risks = () => {
    const [openItem, setOpenItem] = React.useState(false)
    return (
        <div className='risks__section'>
            <div className="container">
                <h5 className="section__headline">Risks</h5>
                {
                    risks.map((i, index) => {
                        return (
                            <DropDownItem key={i.text + index} content={i} index={index} setOpenItem={setOpenItem} openItem={openItem} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Risks


export const Faq = () => {
    const [openItem, setOpenItem] = React.useState(false)
    return (
        <div className='risks__section faq__sec Faq'>
            <Spider2 />
            <div className="container">
                <h5 className="section__headline">F.A.Q.</h5>
                {
                    faqArr.map((i, index) => {
                        return (
                            <DropDownItem key={i.text + index} content={i} index={index} setOpenItem={setOpenItem} openItem={openItem} faq />
                        )
                    })
                }
            </div>
            <img src={Group11} alt="" className="gr11" />

        </div>
    )
}


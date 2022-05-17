import React from 'react'
import DropDownItem from '../common/dropDownItem'
import {risks} from '../../constants/index'


const Risks = () => {
    const [openItem, setOpenItem] = React.useState(false)
    return (
        <div className='risks__section'>
            <div className="container">
                <h5 className="section__headline">Risks</h5>
                {
                    risks.map((i, index)=>{
                        return(
                            <DropDownItem key={i.text+index} content={i} index={index} setOpenItem={setOpenItem} openItem={openItem} />

                        )
                    })
                }
            </div>

        </div>
    )
}

export default Risks
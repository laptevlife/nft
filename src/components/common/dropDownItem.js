import React from 'react'
import clsx from 'clsx';
import { ArrowDown } from '../../svg';



const DropDownItem = ({ content, setOpenItem, openItem, index }) => {


    return (
        <div className={clsx('drop__down__item',)} >
            <div className="drop__down__item-title" onClick={() => setOpenItem(openItem === index ? false : index)}>
                {content.title}
                <span className="arrow__pointer" style={openItem === index ? {transform: "rotate(180deg)"} : null}>
                    <ArrowDown />
                </span>
            </div>
            <div className={clsx("drop__down__item-content ", { "drop__down__item-active": openItem === index })}>
                {content.text}
            </div>
        </div>
    )
}

export default DropDownItem
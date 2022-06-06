import React from 'react'
import clsx from 'clsx';
import { ArrowDown } from '../../svg';



const DropDownItem = ({ content, setOpenItem, openItem, index, faq }) => {


    return (
        <div className={clsx('drop__down__item',
            { "drop__down__item-faq": faq }
        ,)} >
            <div className="drop__down__item-title" onClick={() => setOpenItem(openItem === index ? false : index)}>
                {content.title}
                <span className="arrow__pointer" style={openItem === index ? { transform: "rotate(180deg)", top: "15px" } : null}>
                    <ArrowDown />
                </span>
            </div>
            <div className={clsx("drop__down__item-content ", { "drop__down__item-active": openItem === index })}
                dangerouslySetInnerHTML={{ __html: content.text }}
            >
                {/* {content.text} */}
                {/* {content.text.includes("&-&") ? } */}
            </div>
        </div>
    )
}

export default DropDownItem
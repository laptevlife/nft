import React from 'react'
import Metamask from '../../Images/Metamask.png'
import clsx from 'clsx';
import { Context } from '../../constants/context'

const Header = () => {


    const [nav, navControl] = React.useState(false)
    const { windowWidth } = React.useContext(Context)

    return (
        <div className='header'>
            {windowWidth < 992 && <NavItems nav={nav} navControl={navControl} />}

            <div className="container header-container">
                {windowWidth > 992 && <NavItems />}

                <div onClick={() => navControl(value => !value)}
                    className={clsx(
                        'burger',
                        { "burger-active": nav }
                    )}>
                    <div className='burger-top'></div>
                    <div className='burger-center'></div>
                    <div className='burger-bottom'></div>
                </div>
                <div className="metamaskButton">
                    <img src={Metamask} alt="" />
                    <div className="metamaskButton-text">
                        Personal account
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Header

const NavItems = ({ nav, navControl }) => {
    const { windowWidth } = React.useContext(Context)
    const top = 200

    const navArr = ['Home', 'About', 'Story', 'Roadmap', 'Faq']

    const scrollTo = (selector) => {
        const block = document.querySelector(`.${selector}`)
        console.log("selector", selector);
        console.log("HI", block);
        block.scrollIntoView({ behavior: 'smooth' })
        navControl(false)
    }

    return (
        <nav className={clsx(
            "Home",
            { "nav": windowWidth > 992 },
            { 'nav-mobil': windowWidth < 992 },
            { "nav-mobil-active": nav }
        )}>
            {
                navArr.map((i, index) => {
                    console.log("navArr[index]", navArr[index])
                    return (
                        <div className="navItem"
                            onClick={() => scrollTo( navArr[index])}
                            style={windowWidth < 992
                                ? {
                                    top: `${top + (index * 70)}px`,
                                    // transitionDelay: `${0.3 + (index * 0.05)}s`,
                                    opacity: "1"
                                }
                                : {}}
                        >
                            {i}</div>
                    )
                })
            }

        </nav>
    )
}
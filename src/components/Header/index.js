import React from 'react'
import Metamask from '../../Images/Metamask.png'
import clsx from 'clsx';
import {context} from '../../constants/context'

const Header = () => {

    // const { } = React.useContext(Context)

    const [nav, navControl] = React.useState(false)
    return (
        <div className='header'>
            <div className="container header-container">
                <nav className='nav'>
                    <div className="navItem">Home</div>
                    <div className="navItem">About</div>
                    <div className="navItem">Story</div>
                    <div className="navItem">Roadmap</div>
                    <div className="navItem">Faq</div>
                </nav>

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
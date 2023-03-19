import './Body.css'
import backgroundImageLightThemeDesktop from '../images/bg-desktop-light.jpg'
import backgroundImageLightThemeMobile from '../images/bg-mobile-light.jpg'
import backgroundImageDarkTheme from '../images/bg-desktop-dark.jpg'
import iconSun from '../images/icon-sun.svg'
import iconMoon from '../images/icon-moon.svg'
import iconChecked from '../images/icon-check.svg'
import iconCross from '../images/icon-cross.svg'
import {useState} from "react";


const Body = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        !isDarkMode ? document.body.style.backgroundColor = '#171823' : document.body.style.backgroundColor = '#FFF'
    }
    
    const toggleCheckmark = () => {
        setIsChecked(!isChecked)
    }
    
    const classes = `check ${isChecked ? 'check active-check' : 'check'}`;
    
    const imageBackgroundChange = {
        backgroundImage: !isDarkMode ? `url(${backgroundImageLightThemeDesktop})` : `url(${backgroundImageDarkTheme})`,
    };
    
    return (
        <main>
            <section className='todo-list-section' style={imageBackgroundChange}>
                <div className="content-wrapper">
                    <div className="content-container">
                        <div className="content-header">
                            <h1>TODO</h1>
                            <img onClick={toggleDarkMode} src={isDarkMode ? iconSun : iconMoon} alt=""/>
                        </div>
                        <div className="content-body">
                            <div className="main-input">
                                <div className={!isDarkMode ? 'item-input-li-lightmode' : 'item-input-li-darkmode'}>
                                    <input className='input-cool' type="text" placeholder='type any todo'/>
                                </div>
                            </div>
                            <div className={!isDarkMode ? 'secondary-tasks secondary-tasks-darkmode' : 'secondary-tasks secondary-tasks-lightmode'}>
                                <div className={!isDarkMode ? 'item-input-li-lightmode' : 'item-input-li-darkmode'}>
                                    <div className={classes} onClick={toggleCheckmark}> <img src={iconChecked} alt=""/></div>
                                    <div className="task-container">
                                        <p>some task todo</p>
                                        <button className='close'><img src={iconCross} alt=""/></button>
                                    </div>
                                </div>
                            </div>
                            <div className={!isDarkMode ? 'item-input-li-lightmode status' : 'item-input-li-darkmode status'}>
                                <div className="items-left">
                                    <p>5 items left</p>
                                </div>
                                <div className="items-main">
                                    <p>All</p>
                                    <p>Active</p>
                                    <p>Completed</p>
                                </div>
                                <div className="clear">
                                    <p>Clear Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className='footer'>
                            <p>Drag and drop to reoder list</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Body
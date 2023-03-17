import './Body.css'
import backgroundImageLightThemeDesktop from '../images/bg-desktop-light.jpg'
import backgroundImageLightThemeMobile from '../images/bg-mobile-light.jpg'
import backgroundImageDarkTheme from '../images/bg-desktop-dark.jpg'
import iconSun from '../images/icon-sun.svg'
import iconMoon from '../images/icon-moon.svg'


const Body = () => {
    return (
        <main>
            <section className='todo-list-section'>
                <div className="content-wrapper">
                    <div className="content-container">
                        <div className="content-header">
                            <h1>TODO</h1>
                            <img src={iconMoon} alt=""/>
                        </div>
                        <div className="content-body">
                            <div className="main-input">
                                <div className="item-input-li">
                                    <label className='custom-radio'>
                                        <input className='radio-button' type="radio" name="example" value="option1"/>
                                    </label>
                                    <input className='input-cool' type="text" placeholder='type any todo'/>
                                </div>
                            </div>
                            <div className="secondary-tasks">
                                <div className="item-input-li">
                                    <label className='custom-radio'>
                                        <input className='radio-button' type="radio" name="example" value="option1"/>
                                    </label>
                                    <p>some task todo</p>
                                </div>
                                <div className="item-input-li">
                                    <label className='custom-radio'>
                                        <input className='radio-button' type="radio" name="example" value="option1"/>
                                    </label>
                                    <p>some task todo</p>
                                </div>
                                <div className="item-input-li">
                                    <label className='custom-radio'>
                                        <input className='radio-button' type="radio" name="example" value="option1"/>
                                    </label>
                                    <p>some task todo</p>
                                </div>
                            </div>
                            <div className="item-input-li status">
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
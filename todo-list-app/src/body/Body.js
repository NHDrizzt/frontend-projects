import './Body.css'
import backgroundImageLightThemeDesktop from '../images/bg-desktop-light.jpg'
import backgroundImageLightThemeMobile from '../images/bg-mobile-light.jpg'
import backgroundImageDarkTheme from '../images/bg-desktop-dark.jpg'
import iconSun from '../images/icon-sun.svg'


const Body = () => {
    return (
        <main>
            <section className='todo-list-section'>
                <div className="content-wrapper">
                    <div className="content-header">
                        <h1>TODO</h1>
                        <img src={iconSun} alt=""/>
                    </div>
                    <div className="item-input-li">
                        <div className="check">check</div>
                        <input type="text" placeholder='type any todo'/>
                    </div>
                    <div className="item-input-li">
                        <div className="check">check</div>
                        <input type="text" placeholder='type any todo'/>
                    </div>
                    
                    <div className="status">
                        <h3>All</h3>
                        <h3>Active</h3>
                        <h3>Completed</h3>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Body
import '../componentsCSS/Body.css'
import backgroundImageLightThemeDesktop from '../images/bg-desktop-light.jpg'
import backgroundImageDarkTheme from '../images/bg-desktop-dark.jpg'
import iconSun from '../images/icon-sun.svg'
import iconMoon from '../images/icon-moon.svg'
import iconChecked from '../images/icon-check.svg'
import iconCross from '../images/icon-cross.svg'
import {useState} from "react";
import TodoInput from "./TodoInput";
import HeaderTheme from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";


const Body = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [todos, setTodos] = useState([]);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        !isDarkMode ? document.body.style.backgroundColor = '#171823' : document.body.style.backgroundColor = '#FFF'
    }
    
    const toggleCheckmark = (index) => {
        const newTodos = [...todos];
        newTodos[index].isChecked = !newTodos[index].isChecked;
        setTodos(newTodos);
    }
    
    
    
    const imageBackgroundChange = {
        backgroundImage: !isDarkMode ? `url(${backgroundImageLightThemeDesktop})` : `url(${backgroundImageDarkTheme})`,
    };
    
    const handleInputChange = (event) => {
        if (event.key === "Enter") {
            let newArray = []
            newArray.push({
                text:event.target.value,
                isChecked:false
            })
            setTodos([...todos, newArray]);
        }
    };
    
    return (
        <main>
            <section className='todo-list-section' style={imageBackgroundChange}>
                <div className="content-wrapper">
                    <div className="content-container">
                        <HeaderTheme isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
                        <div className="content-body">
                            <TodoInput isDarkMode={isDarkMode} onAddTodo={handleInputChange}/>
                            <TodoList isDarkMode={isDarkMode} isChecked={isChecked} toggleCheckmark={toggleCheckmark} todos={todos}/>
                            <Footer isDarkMode={isDarkMode}/>
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
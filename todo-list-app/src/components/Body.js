import '../componentsCSS/Body.css'
import backgroundImageLightThemeDesktop from '../images/bg-desktop-light.jpg'
import backgroundImageDarkTheme from '../images/bg-desktop-dark.jpg'
import {useState} from "react";
import TodoInput from "./TodoInput";
import HeaderTheme from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";


const Body = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [todos, setTodos] = useState([]);
    
    const toggleActive = () => {
        const newTodos = [...todos]
        const newTho = newTodos.filter((item) => item.isChecked)
        setTodos(newTho)
    }
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
            newArray.push(event.target.value)
            event.target.value = ''
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
                            <TodoList isDarkMode={isDarkMode} toggleCheckmark={toggleCheckmark} todos={todos} setTodos={setTodos}/>
                            <Footer isDarkMode={isDarkMode} toggleActive={toggleActive}/>
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
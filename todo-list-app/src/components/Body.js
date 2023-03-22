import '../componentsCSS/Body.css'
import backgroundImageLightThemeDesktop from '../images/bg-desktop-light.jpg'
import backgroundImageDarkTheme from '../images/bg-desktop-dark.jpg'
import React, {useContext} from "react";
import {useState} from "react";
import TodoInput from "./TodoInput";
import HeaderTheme from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";
import {DataContext} from "./DataList";



const Body = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [selectedListType, setSelectedListType] = useState("all");
    const [todos, setTodos] = useContext(DataContext);
    const [activeTodos, setActiveTodos] = useState([])
    const [completedTodos, setCompletedTodos] = useState([])
    
    const handleAllClick = () => {
        setSelectedListType("all");
    };
    
    const handleActiveClick = () => {
        const allTodos = [...todos]
        const active = allTodos.filter(todo => !todo.isChecked);
        setSelectedListType("active");
        setActiveTodos(active)
    };
    
    const handleCompletedClick = () => {
        const allTodos = [...todos]
        const completed = allTodos.filter(todo => todo.isChecked);
        setSelectedListType("completed");
        setCompletedTodos(completed)
    };
    
    const handleClearCompletedClick = () => {
        const allTodos = [...todos]
        const clearCompleted = allTodos.filter((todo => !todo.isChecked));
        setTodos(clearCompleted)
    }
    
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        !isDarkMode ? document.body.style.backgroundColor = '#171823' : document.body.style.backgroundColor = '#FFF'
    }
    
    
    
    const imageBackgroundChange = {
        backgroundImage: !isDarkMode ? `url(${backgroundImageLightThemeDesktop})` : `url(${backgroundImageDarkTheme})`,
    };
    
    return (
        <main>
            <section className='todo-list-section' style={imageBackgroundChange}>
                <div className="content-wrapper">
                    <div className="content-container">
                        <HeaderTheme isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
                        <div className="content-body">
                                <TodoInput isDarkMode={isDarkMode} todos={todos} setTodos={setTodos}/>
                                {selectedListType === "all" && (
                                    <TodoList isDarkMode={isDarkMode} todos={todos} setTodos={setTodos}/>
                                )}
        
                                {selectedListType === "active" && (
                                    <TodoList isDarkMode={isDarkMode} todos={activeTodos} setTodos={setTodos}/>
                                )}
        
                                {selectedListType === "completed" && (
                                    <TodoList isDarkMode={isDarkMode} todos={completedTodos} setTodos={setTodos}/>
                                )}
                                <Footer isDarkMode={isDarkMode}
                                        handleAllClick={handleAllClick}
                                        handleActiveClick={handleActiveClick}
                                        handleCompletedClick={handleCompletedClick}
                                        selectedListType={selectedListType}
                                        handleClearCompletedClick={handleClearCompletedClick}
                                        todos={todos}
                                />
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
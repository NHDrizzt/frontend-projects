import iconChecked from "../images/icon-check.svg";
import iconCross from "../images/icon-cross.svg";


const TodoList = ({ isDarkMode, toggleCheckmark, todos, setTodos }) => {
    
    const handleDeleteButton = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }
    
    const handleAll = () => {
    
    }
    
    const handleActive = () => {
    
    }
    
    const handleCompleted = () => {
    
    }
    
    return (
        <div className={!isDarkMode ? 'secondary-tasks secondary-tasks-darkmode' : 'secondary-tasks secondary-tasks-lightmode'}>
            {todos.map((todo, index) => (
                <div key={index} className={!isDarkMode ? 'item-input-li-lightmode' : 'item-input-li-darkmode'}>
                    <div className={todo.isChecked ? 'check active-check' : 'check'} onClick={() => toggleCheckmark(index)}> <img src={iconChecked} alt=""/></div>
                    <div className="task-container">
                        <p>{todo}</p>
                        <button className='close' onClick={() => handleDeleteButton(index)}><img src={iconCross} alt=""/></button>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default TodoList
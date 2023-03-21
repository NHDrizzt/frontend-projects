import iconChecked from "../images/icon-check.svg";
import iconCross from "../images/icon-cross.svg";


const TodoList = ({ isDarkMode, isChecked, toggleCheckmark, todos }) => {
    const classes = `check ${isChecked ? 'check active-check' : 'check'}`;
    
    return (
        <div className={!isDarkMode ? 'secondary-tasks secondary-tasks-darkmode' : 'secondary-tasks secondary-tasks-lightmode'}>
            {todos.map((todo, index) => (
                <div key={index} className={!isDarkMode ? 'item-input-li-lightmode' : 'item-input-li-darkmode'}>
                    <div className={todo.isChecked ? 'check active-check' : 'check'} onClick={() => toggleCheckmark(index)}> <img src={iconChecked} alt=""/></div>
                    <div className="task-container">
                        <p>{todo[0].text}</p>
                        <button className='close'><img src={iconCross} alt=""/></button>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default TodoList
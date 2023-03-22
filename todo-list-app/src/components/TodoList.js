import iconChecked from "../images/icon-check.svg";
import iconCross from "../images/icon-cross.svg";


const TodoList = ({ isDarkMode, todos, setTodos }) => {
    
    const toggleCheckmark = (index) => {
        const newTodos = [...todos];
        newTodos[index].isChecked = !newTodos[index].isChecked;
        setTodos(newTodos);
    }
    
    const handleDeleteButton = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    }
    
    return (
        <div className={!isDarkMode ? 'secondary-tasks secondary-tasks-darkmode' : 'secondary-tasks secondary-tasks-lightmode'}>
            {todos.map((todo, index) => (
                <div key={todo.id} className={!isDarkMode ? 'item-input-li-lightmode' : 'item-input-li-darkmode'}>
                    <div className={todo.isChecked ? 'check active-check' : 'check'} onClick={() => toggleCheckmark(index)}> <img src={iconChecked} alt=""/></div>
                    <div className="task-container">
                        <p>{todo.name}</p>
                        <button className='close' onClick={() => handleDeleteButton(todo.id)}><img src={iconCross} alt=""/></button>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default TodoList
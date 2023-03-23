import iconChecked from "../images/icon-check.svg";
import iconCross from "../images/icon-cross.svg";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";


const TodoList = ({ isDarkMode, todos, setTodos }) => {
    const onDragEnd = (result) => {
        if (!result.destination) return;
        
        const items = Array.from(todos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setTodos(items);
    };
    
    const toggleCheckmark = (index) => {
        const newTodos = [...todos];
        newTodos[index].isChecked = !newTodos[index].isChecked;

        setTodos(newTodos);
    }
    
    const handleDeleteButton = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    }
    
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="to-dos">
                {(provided) => (
                    <div
                        className={!isDarkMode ? 'secondary-tasks secondary-tasks-darkmode' : 'secondary-tasks secondary-tasks-lightmode'}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {todos.map((todo, index) => (
                            <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                                {(provided, snapshot) => (
                                    <div className={snapshot.isDragging ? 'selected' : ''}>
                                        {console.log(snapshot.isDragging)}
                                   
                                    <div
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                        className={!isDarkMode ? 'item-input-li-lightmode' : 'item-input-li-darkmode'}
                                    >
                                        
                                        <div
                                            className={todo.isChecked ? 'check active-check' : 'check'}
                                            onClick={() => toggleCheckmark(index)}
                                        >
                                            <img src={iconChecked} alt="" />
                                        </div>
                                        <div className={`${todo.isChecked ? 'task-container crossline-check' : 'task-container'} `}>
                                            <p>{todo.name}</p>
                                            <button className="close" onClick={() => handleDeleteButton(todo.id)}>
                                                <img src={iconCross} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}


export default TodoList

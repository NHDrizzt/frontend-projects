import '../componentsCSS/Body.css'
import {useContext} from "react";
import {DataContext} from "./DataList";
import {nanoid} from "nanoid";

const TodoInput = ({ isDarkMode }) => {
    
    const [todos, setTodos] = useContext(DataContext);
    
    const handleInputChange = (event) => {
        if (event.key === "Enter") {
            const id = nanoid()
            setTodos([...todos, {id, name: event.target.value, isChecked: false}]);
            event.target.value = "";
        }
    };
    
    return (
        <div className="main-input">
            <div
                className={!isDarkMode ? "item-input-li-lightmode" : "item-input-li-darkmode"}>
                <input className="input-cool" onKeyDown={handleInputChange} type="text" placeholder="type any todo" />
            </div>
        </div>
    );
};

export default TodoInput;

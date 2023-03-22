import '../componentsCSS/Body.css'

const TodoInput = ({ isDarkMode, onAddTodo }) => {
    return (
        <div className="main-input">
            <div
                className={!isDarkMode ? "item-input-li-lightmode" : "item-input-li-darkmode"}>
                <input className="input-cool" onKeyDown={onAddTodo} type="text" placeholder="type any todo" />
            </div>
        </div>
    );
};

export default TodoInput;

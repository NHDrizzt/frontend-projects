import '../componentsCSS/Footer.css'

const Footer = ({ isDarkMode, handleAllClick, handleActiveClick, handleCompletedClick, selectedListType, handleClearCompletedClick, todos }) => {
    
    
    return (
        <div className={!isDarkMode ? 'item-input-li-lightmode status status-lightmode' : 'item-input-li-darkmode status status-darkmode'}>
            <div className="items-left">
                <p>{todos.length} items left</p>
            </div>
            <div className="items-main">
                <p className={selectedListType === 'all' ? 'all-todos' : ''} onClick={handleAllClick}>All</p>
                <p className={selectedListType === 'active' ? 'active-todos' : ''} onClick={handleActiveClick}>Active</p>
                <p className={selectedListType === 'completed' ? 'completed-todos' : ''} onClick={handleCompletedClick}>Completed</p>
            </div>
            <div className="clear">
                <p onClick={handleClearCompletedClick}>Clear Completed</p>
            </div>
        </div>
    )
}

export default Footer
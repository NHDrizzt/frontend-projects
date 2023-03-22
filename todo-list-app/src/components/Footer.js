import '../componentsCSS/Footer.css'

const Footer = ({ isDarkMode, handleAllClick, handleActiveClick, handleCompletedClick }) => {
    return (
        <div className={!isDarkMode ? 'item-input-li-lightmode status' : 'item-input-li-darkmode status'}>
            <div className="items-left">
                <p>5 items left</p>
            </div>
            <div className="items-main">
                <p onClick={handleAllClick}>All</p>
                <p onClick={handleActiveClick}>Active</p>
                <p onClick={handleCompletedClick}>Completed</p>
            </div>
            <div className="clear">
                <p>Clear Completed</p>
            </div>
        </div>
    )
}

export default Footer
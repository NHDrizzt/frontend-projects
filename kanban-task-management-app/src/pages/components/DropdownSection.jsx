import React, {useContext, useRef, useState} from 'react';
import iconDropdown from '../../assets/icon-board.svg';
import ToggleDarkMode from './ToggleDarkMode.jsx';
import PropTypes from 'prop-types';
import {BoardContext} from '../../context/BoardContext.jsx';
import crossMark from '../../assets/icon-cross.svg';
import {nanoid} from 'nanoid';
import {ColumnContext} from '../../context/ColumnContext.jsx';
import '../../input.css';

const DropdownSection = () => {
    const [clickedIndex, setClickedIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const { boards, currentBoard,
        setCurrentBoard, setBoards,
        pendingCreateColumns, setPendingCreateColumns,
        boardName, setBoardName, colors
    } = useContext(BoardContext);
    const { setSelectedOption } = useContext(ColumnContext);
    const dropdownAllBoardRef = useRef(null);
    const [createBoardButtonIsEnabled, setCreateBoardButtonIsEnabled] = useState(true);
    
    const handleBoardChange = (id) => {
        const newBoard = boards.find(board => board.id === id);
        setBoards(prevBoards =>
            prevBoards.map(board =>
                board.name === currentBoard.name ? currentBoard : board
            )
        );
        setCurrentBoard(newBoard);
    };
    
    const handleButtonFocus = (index) => {
        setClickedIndex(index);
    };
    
    
   
    const handleChangeInputValue = ({target: {value}}, index) => {
        setPendingCreateColumns(prevPendingCreateColumns =>
            prevPendingCreateColumns.map((el, i) => i === index ? {...el, column: value} : el)
        );
    };
    
    const handleDeleteInputField = (index) => {
        setPendingCreateColumns(prevPendingCreateColumns =>
            prevPendingCreateColumns.filter((_, i) => i !== index)
        );
    };
    
    const handleCreateColumn = () => {
        setPendingCreateColumns(prevColumns => [
            ...prevColumns,
            { id: nanoid(), color: colors[Math.floor(Math.random() * colors.length)], column: '', tasks: [] }
        ]);
    };
    
    const handleCreateNewBoard = () => {
        setBoards(prevBoards => [
            ...prevBoards,
            {
                id: nanoid(),
                name: boardName,
                columns: pendingCreateColumns
            }
        ]);
        setSelectedOption(pendingCreateColumns[0]?.column);
        setPendingCreateColumns([{ id: nanoid(), color: colors[Math.floor(Math.random() * colors.length)], column: '', tasks: []}]);
        setBoardName('');
        setShowModal(false);
    };
    
    const isButtonEnabled = pendingCreateColumns.every(col => col.column.trim() !== '') && boardName.trim() !== '';
    
    
    return (
        <div ref={dropdownAllBoardRef}>
            <div className="ml-6 py-4 text-veryLightGray font-bold font-plus-jakarta text-xs">
                <p>ALL BOARDS ({boards.length})</p>
            </div>
            <nav className="py-1 font-plus-jakarta text-veryLightGray" role="none">
                {
                    boards.map((el, index) => (
                        <div key={ index } className={`flex gap-x-2 ml-[-12px] pl-8 items-center  ${index === clickedIndex ? 'selected-parent-hover h-12 w-[240px] text-white bg-darkPurple rounded-tr-[100px] rounded-br-[100px]' : ' parent-hover hover:h-12 hover:w-[240px] hover:text-darkPurple hover:bg-lightPurple hover:bg-opacity-20 hover:dark:bg-white hover:rounded-tr-[100px] hover:rounded-br-[100px]'}`}>
                            <svg className='svg-hover' width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="#828FA3"/></svg>
                            <button className="block py-3.5 text-sm font-bold " role="menuitem" tabIndex="-1" onFocus={ () => handleButtonFocus(index)}
                                onClick={() => handleBoardChange(el.id)}
                                id="menu-item-0">{el.name}</button>
                        </div>
                    ))
                }
                <div className="flex gap-x-2 ml-5 items-center">
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="#635FC7"/></svg>
                    <button className="py-3.5 text-sm font-bold text-darkPurple before:content-['+']" role="menuitem" tabIndex="-1" id="menu-item-0"
                        onClick={ () => setShowModal(true)}
                    >
                            Create New Board
                    </button>
                </div>
                <div className="pb-3">
                    <ToggleDarkMode />
                </div>
        
            </nav>
            {
                showModal ? (
                    <div>
                        <div
                            className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none outline-none focus:outline-none"
                            // onClick={() => setShowModal(false)}
                        >
                            <div className="relative container mx-auto w-11/12 md:w-[480px]">
                                {/*content*/}
                                <div className="p-8 rounded-lg flex flex-col pointer-events-auto bg-white outline-none focus:outline-none dark:bg-mediumGray">
                                    {/*header*/}
                                    <div className="flex">
                                        <p className="text-lg text-gray-950 font-bold dark:text-white">
                                                Add New Board
                                        </p>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                                        </button>
                                    </div>
                                    {/*board name*/}
                                    <div className="flex flex-col items-start justify-start">
                                        <label htmlFor="nameColumn" className="text-slate-400 text-[12px] py-2 "><b>Name</b> (Required)</label>
                                        <input id="nameColumn"
                                            className="input-standard"
                                            type="text"
                                            maxLength="25"
                                            value={boardName}
                                            onChange={(e) => setBoardName(e.target.value)}
                                            autoFocus/>
                                    </div>
                                    {/*columns input*/}
                                    <div className="flex flex-col items-start justify-start">
                                        <p className="text-slate-400 text-[12px] py-2"><b>Columns</b> (Required)</p>
                                        {
                                            pendingCreateColumns.map((el, index) => (
                                                <div key={index} className="flex items-center w-full space-x-4 mb-2">
                                                    <input
                                                        className={`${pendingCreateColumns.length > 1 ? 'input-standard-delete' : 'input-standard'}`}
                                                        value={el.column}
                                                        onChange={(e) => handleChangeInputValue(e, index)}
                                                        type="text"
                                                        maxLength="25"
                                                        autoFocus={pendingCreateColumns.length > 1}/>
                                                    <button className={`${pendingCreateColumns.length > 1 ? '' : 'hidden'}`}  onClick={() => handleDeleteInputField(index)}>
                                                        <img src={crossMark} alt=""/>
                                                    </button>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    {/*Add column and save button*/}
                                    <div className="flex flex-col items-center justify-center">
                                        <button
                                            className="bg-indigo-500 bg-opacity-10 mt-3 rounded-full w-full mb-8 text-darkPurple background-transparent font-bold mt-2 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 before:content-['+'] dark:bg-white"
                                            type="button"
                                            onClick={() => handleCreateColumn()}
                                        >
                                                Add New Column
                                        </button>
                                        <button
                                            className={`${isButtonEnabled ? 'text-white' : 'text-white bg-lightMediumGray dark:bg-lightPurple dark:text-darkPurple dark:bg-indigo-500 dark:bg-opacity-10 background-transparent'} bg-darkPurple w-full rounded-full font-plus-jakarta active:bg-lightPurple font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                                            type="button"
                                            onClick={handleCreateNewBoard}
                                            disabled={!isButtonEnabled}
                                        >
                                                Create New Board
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*overlay*/}
                        <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
                    </div>
                ) : null}
        </div>
        
    );
};

DropdownSection.propTypes = {
    dropdownRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
};

export default DropdownSection;

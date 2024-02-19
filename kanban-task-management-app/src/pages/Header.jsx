import React, {useContext, useEffect, useRef, useState} from 'react';
import ButtonAddNewTask from './components/ButtonAddNewTask.jsx';
import threeDots from '../assets/icon-vertical-ellipsis.svg';
import logoDark675 from '../assets/logo-dark.svg';
import logoDark375 from '../assets/logo-mobile.svg';
import logoLight675 from '../assets/logo-light.svg';
import chevronDown from '../assets/icon-chevron-down.svg';
import DropdownSection from './components/DropdownSection.jsx';
import useScreenSize from '../hooks/useScreenSize.jsx';
import {DarkModeContext} from '../context/DarkModeContext.jsx';
import GenericModal from './components/GenericModal.jsx';
import crossMark from '../assets/icon-cross.svg';
import {BoardContext} from '../context/BoardContext.jsx';
import '../input.css';
import useOutsideClick from '../hooks/useOutsideClick.jsx';

const Header = () => {
    const dropdownRef = useRef(null);
    const { darkMode } = useContext(DarkModeContext);
    const isScreenLarge = useScreenSize();
    const [showEditAndDeleteDropdown, setShowEditAndDeleteDropdown] = useState(false);
    const [showEditBoard, setShowEditBoard] = useState(false);
    const {currentBoard, setCurrentBoard} = useContext(BoardContext);
    const [tempEditBoardChanges, setTempEditBoardChanges] = useState(currentBoard);
    const { boards, setBoards } = useContext(BoardContext);
    const dropdownOptionsBoardRef = useRef(null);
    const colors = [
        'bg-red-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-indigo-500',
        'bg-pink-500',
        'bg-teal-500',
    ];
    const [showDropdownAllBoards,setShowDropdownAllBoards] = useState(false);
    
    const handleDropdown = () => {
        setShowDropdownAllBoards(!showDropdownAllBoards);
    };
    
    const closeModal = () => {
        setShowEditBoard(false);
    };
    
    const handleChangeBoardName = ({target: {value}}) => {
        setTempEditBoardChanges(prevState => ({
            ...prevState,
            name: value
        }));
    };
    
    
    const handleBoardSaveChanges = () => {
        setCurrentBoard(tempEditBoardChanges);
    };
    
    const handleChange = (index, {target: {value}}) => {
        const newValue = [...currentBoard.columns];
        newValue[index].column = value;
        setTempEditBoardChanges(prevState => ({
            ...prevState,
            columns: newValue
        }));
    };

    
    const handleInputCreation = () => {
        setCurrentBoard(prevState => ({
            ...prevState,
            columns: [
                ...prevState.columns,
                {
                    column: '',
                    tasks: prevState.columns.tasks || [],
                    color: colors[Math.floor(Math.random() * colors.length)]
                }]
        }));
    };
    
    const handleDeleteInputField = (id) => {
        setCurrentBoard(prevState => ({
            ...prevState,
            columns: currentBoard.columns.filter((column) => column.id !== id)
        }));
    };
    
    useEffect(() => {
        setTempEditBoardChanges(currentBoard);
    }, [currentBoard]);
    
    const handleDeleteCurrentBoard = () => {
        if(boards.length > 0) {
            setBoards(prevState => prevState.filter(board => board.id !== currentBoard.id));
            setCurrentBoard(boards[0]);
        }
    };
    
    const closeDropdown = () => setShowEditAndDeleteDropdown(false);
    useOutsideClick(dropdownOptionsBoardRef, closeDropdown);
    
    const closeAllBoardsDropdown = () => setShowDropdownAllBoards(false);
    useOutsideClick(dropdownRef, closeAllBoardsDropdown);
    
    return (
        <>
            <header className="flex border-b border-solid border-lightBlueish dark:border-b-lightGray">
                <div className="flex py-5 px-4 md:px-[34px] md:w-[301px] md:items-center md:h-[97px] md:border-r md:border-solid md:border-lightBlueish md:dark:border-lightGray">
                    <picture>
                        <source media='(min-width: 768px)' srcSet={`${darkMode ? logoLight675 : logoDark675}`}/>
                        <img className="" src={logoDark375} alt=""/>
                    </picture>
                </div>
                <div className="flex flex-auto min-w-[50%] md:px-6 items-center justify-between">
                    <div className="relative" ref={dropdownRef}>
                        <button className="flex gap-x-1 items-center text-lg w-fit font-plus-jakarta font-bold md:text-xl dark:text-white"
                            aria-expanded="true"
                            aria-haspopup="true"
                            onClick={ handleDropdown }
                            disabled={ isScreenLarge }>
                            {currentBoard.name}
                            {
                                !isScreenLarge ?  <img className="w-3 h-2 mt-1 md:hidden" src={chevronDown} alt=""/> : <></>
                            }
                        </button>
                        <div
                            className={`${showDropdownAllBoards ? 'absolute right-0 left-0 z-10 mt-7 mx-auto w-64 h-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-mediumGray' : 'hidden'}`}
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex="-1"
                        >
                            {
                                showDropdownAllBoards && (
                                    <DropdownSection/>
                                )
                            }
                        </div>
                        
                    </div>
                    <div className="flex items-center">
                        <ButtonAddNewTask />
                        <div className="relative" ref={dropdownOptionsBoardRef}>
                            <button onClick={() => setShowEditAndDeleteDropdown(!showEditAndDeleteDropdown)}>
                                <img className="px-3 h-4 md:pl-6 md:pr-7 md:h-6 cursor-pointer" src={threeDots} alt=""/>
                            </button>
                            <div className={`${!showEditAndDeleteDropdown ? 'hidden': ''} flex flex-col items-start absolute z-50 text-[13px] leading-snug font-plus-jakarta px-4 py-5 space-y-5 -translate-x-[80%] translate-y-6 mx-auto w-48 h-[94px] bg-white dark:bg-darkGray rounded-lg shadow`}>
                                <button className="text-veryLightGray"
                                    onClick={() => setShowEditBoard(true)}
                                >Edit Board</button>
                                <button className="text-tomatoRed" onClick={handleDeleteCurrentBoard}>Delete Board</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {
                showEditBoard ? (
                    <GenericModal
                        type="Edit Board"
                        handleInputCreation={handleInputCreation}
                        handleSaveChanges={handleBoardSaveChanges}
                        closeModal={closeModal}
                    >
                        <>
                            <div className="flex flex-col items-start justify-start">
                                <label className="text-slate-400 text-[12px] py-2 font-bold" htmlFor="">Title</label>
                                <input
                                    name="title"
                                    value={tempEditBoardChanges.name}
                                    onChange={handleChangeBoardName}
                                    className="input-standard"
                                    maxLength="20"
                                    type="text"/>
                            </div>
                            <div className="flex flex-col items-start justify-start">
                                <label htmlFor="nameColumn" className="text-slate-400 text-[12px] py-2 font-bold">Board Columns</label>
                                {
                                    currentBoard.columns.map((input, index) => (
                                        <div key={index} className="flex items-center w-full space-x-4 mb-2">
                                            <input
                                                id={`nameColumns${index}`}
                                                name={`nameColumn${index}`}
                                                className="input-standard-delete"
                                                type="text"
                                                maxLength="25"
                                                placeholder="Todo"
                                                value={input.column || ''}
                                                onChange={(e) => handleChange(index, e)}
                                            />
                                            <button onClick={() => handleDeleteInputField(input.id)}>
                                                <img src={crossMark} alt=""/>
                                            </button>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    </GenericModal>
                ) : null
            }
        </>
        
    );
};

export default Header;

import React, {useContext, useState} from 'react';
import iconAdd from '../assets/icon-add-task-mobile.svg';
import crossMark from '../assets/icon-cross.svg';
import {ColumnContext} from '../context/ColumnContext.jsx';
import GenericModal from './components/GenericModal.jsx';
import {BoardContext} from '../context/BoardContext.jsx';
import {nanoid} from 'nanoid';
import ComboBox from './components/ComboBox.jsx';
import iconCheck from '../assets/icon-check.svg';
import useUpdateBoards from '../hooks/useUpdateBoards.jsx';

const ColumnField = () => {
    const [showModal, setShowModal] = useState(false);
    const { inputColumn, setInputColumn } = useContext(ColumnContext);
    const {boards: initBoard, setBoards, currentBoard: curBoard, setCurrentBoard} = useContext(BoardContext);
    const [closeModalInfo, setCloseModalInfo] = useState(false);
    const [showTaskInfo, setShowTaskInfo] = useState({});
    const [boards, currentBoard, updateBoards] = useUpdateBoards(initBoard, curBoard);
    // const showTaskInfoName = currentBoard.columns.find((column) => {
    //     const hi = column.tasks.find((task) => task.id === showTaskInfo);
    // });
    const colors = [
        'bg-red-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-indigo-500',
        'bg-pink-500',
        'bg-teal-500',
    ];
    const {
        selectedOption,
        setSelectedOption,
    } = useContext(ColumnContext);
    

    
    const handleSaveChanges = () => {
        // setShowModal(false);
        //
        // const columnValues = inputColumn.map((value) => {
        //     return {
        //         id: nanoid(),
        //         column: value,
        //         tasks: [],
        //         color: colors[Math.floor(Math.random() * colors.length)]
        //     };
        // });
        //
        // setCurrentBoard(prevState => ({
        //     ...prevState,
        //     columns: columnValues
        // }));
    };

    const closeModal = () => {
        setShowModal(false);
    };
    
    const closeShowInfoModal = () => {
        setCloseModalInfo(false);
    };
    
    const handleChange = (index, {target: {value}}) => {
        updateBoards(board => {
            const newColumns = [...board.columns];
            newColumns[index].column = value;
            return { ...board, columns: newColumns };
        });
    };
    
    const handleInputSaveCreation = () => {
        const newColumn = {
            id: nanoid(),
            column: '',
            tasks: [],
            color: colors[Math.floor(Math.random() * colors.length)]
        };
    
        updateBoards(board => {
            const newColumns = [...board.columns, newColumn];
            return { ...board, columns: newColumns };
        });
    };
    
    const handleDelete = (id) => {
        updateBoards(board => {
            const newColumns = board.columns.filter(column => column.id !== id);
            return { ...board, columns: newColumns };
        });
    };
    
    const handleOpenTaskInfo = (task) => {
        setCloseModalInfo(true);
        setShowTaskInfo(task);
    };
    
    const toggleCheckmark = (subtasks, index) => {
        const newSubtasks = showTaskInfo.subtasks.map((subtask, i) => {
            if (i !== index) return subtask;
            return { ...subtask, isCompleted: !subtask.isCompleted };
        });
        
        setShowTaskInfo(prevState => ({
            ...prevState,
            subtasks: newSubtasks
        }));
    };
    
    
    return (
        <div className={`${currentBoard.columns.length === 0 ? 'relative w-full flex-grow justify-center items-center flex bg-almostWhite dark:bg-darkGray' : 'relative overflow-y-auto max-w-full w-full  justify-start p-4 flex bg-almostWhite dark:bg-darkGray'}`}>
            {
                currentBoard.columns.length === 0 ? (
                    <div className="w-72 md:w-80 flex items-center justify-center flex-col gap-y-2 text-center">
                        <p className="font-lg font-bold text-veryLightGray font-plus-jakarta-sans">
                            This board is empty. Create a new column to get started.
                        </p>
                        <button
                            className="py-3 px-5 text-white text-plus-jakarta-sans font-bold text-base bg-darkPurple rounded-full flex gap-x-1 items-center hover:bg-lightPurple"
                            onClick={() => setShowModal(true)}
                        >
                            <img className="h-2 mt-1" src={iconAdd} alt="" />
                            Add New Column
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-start">
                        {
                            currentBoard.columns.map((column, index) => (
                                <div key={index} className="flex flex-col  w-[280px] mr-4">
                                    {/*tile*/}
                                    <div className="flex py-4 space-x-2 items-center">
                                        <div className={`${column.color} w-[15px] h-[15px] rounded-full`}></div>
                                        <p className="uppercase text-slate-400 text-[12px] font-bold tracking-widest">{column.column}{' '}{`(${column.tasks?.length})`}</p>
                                    </div>
                                    {/*card*/}
                                    {
                                        column.tasks?.map((task) => (
                                            <div key={task.title} className="flex flex-col justify-center px-4 py-[23px] w-[280px] mb-4 bg-white rounded-lg shadow cursor-pointer"
                                                onClick={() => handleOpenTaskInfo(task)}
                                            >
                                                <p className="text-gray-950 text-[15px] font-bold">{task.title}</p>
                                                <p className="text-slate-400 text-[12px] font-bold">0 of {task.subtasks.length} subtasks</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                        
                        <div className="w-[280px] grid place-items-center bg-gradient-to-b from-indigo-50 to-indigo-50 rounded-md" onClick={() => setShowModal(true)}>
                            <p className="before:content-['+'] text-center text-slate-400 text-[24px] font-bold">New Column</p>
                        </div>
                    </div>
                    
                )
            }
            {
                showModal ? (
                    <GenericModal
                        type={'Add New Columns'}
                        handleSaveChanges={handleSaveChanges}
                        handleInputCreation={handleInputSaveCreation}
                        closeModal={closeModal}
                    >
                        <div className="flex flex-col items-start justify-start">
                            <label htmlFor="nameColumn" className="text-slate-400 text-[12px] py-2 font-bold">Columns</label>
                            {
                                currentBoard.columns.map((input, index) => (
                                    <div key={index} className="flex items-center w-full space-x-4 mb-2">
                                        <input
                                            id={`nameColumns${index}`}
                                            name={`nameColumn${index}`}
                                            className="w-11/12  pl-3  h-10 border border-lightGray border-opacity-25 rounded-sm text-gray-950 focus:outline-none"
                                            type="text"
                                            maxLength="25"
                                            placeholder="Todo"
                                            value={input.column || ''}
                                            onChange={(e) => handleChange(index, e)}
                                        />
                                        <button onClick={() => handleDelete(input.id)}>
                                            <img src={crossMark} alt=""/>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </GenericModal>
                ) : null
            }
            {
                closeModalInfo ? (
                    <div>
                        <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none outline-none focus:outline-none">
                            <div className="container mx-auto w-11/12 md:w-[480px]">
                                {/*content*/}
                                <div className="p-8 rounded-lg flex flex-col pointer-events-auto bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <p className="text-lg text-gray-950 font-bold">
                                        {
                                            showTaskInfo.title
                                        }
                                    </p>
                                    <p className="text-slate-400 py-6 text-[13px] font-medium leading-[23px]">
                                        {
                                            showTaskInfo.description
                                        }
                                    </p>
                                    {/*body*/}
                                    <div>
                                        <p className="pb-2 text-xs font-bold text-veryLightGray">Subtasks ({showTaskInfo.subtasks.filter(subtask => subtask.isCompleted === true).length} of {showTaskInfo.subtasks.length})</p>
                                        <div>
                                            {
                                                showTaskInfo.subtasks.map((subtasks, i) => (
                                                    <div key={i} className="flex items-center gap-x-4 bg-almostWhite py-3 mt-2">
                                                        <div
                                                            className={`ml-3 grid place-items-center w-[16px] h-[16px] border outline-none focus:none rounded-sm ${subtasks.isCompleted ? ' bg-darkPurple' : 'bg-white'}`}
                                                            onClick={() => toggleCheckmark(subtasks, i)}
                                                        >
                                                            <img src={iconCheck} alt=""/>
                                                        </div>
                                                        <p className={`mb-1 font-[25px] text-darkBlue ${subtasks.isCompleted ? 'line-through opacity-50' : ''}`}>
                                                            {subtasks.title}
                                                        </p>

                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="relative flex flex-col w-full items-start justify-start mb-6">
                                        <label className="text-slate-400 text-[12px] py-2 font-bold" htmlFor="">Status</label>
                                        <ComboBox selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*overlay*/}
                        <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={closeShowInfoModal}></div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default ColumnField;

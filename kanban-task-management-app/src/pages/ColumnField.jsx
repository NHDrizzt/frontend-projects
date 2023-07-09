import React, {useContext, useState} from 'react';
import iconAdd from '../assets/icon-add-task-mobile.svg';
import crossMark from '../assets/icon-cross.svg';
import {ColumnContext} from '../context/ColumnContext.jsx';
import GenericModal from './components/GenericModal.jsx';
import {BoardContext} from '../context/BoardContext.jsx';


const ColumnField = () => {
    const [showModal, setShowModal] = useState(false);
    const { inputColumn, setInputColumn } = useContext(ColumnContext);
    const {currentBoard, setCurrentBoard} = useContext(BoardContext);
    const colors = [
        'bg-red-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-indigo-500',
        'bg-pink-500',
        'bg-teal-500',
    ];
    
    
    const handleChange = (index, {target: {value}}) => {
        const newValue = [...inputColumn];
        newValue[index] = value;
        setInputColumn(newValue);
    };
    
    const handleSaveChanges = () => {
        setShowModal(false);
        const columnValues = inputColumn.map((value) => {
            return {
                column: value,
                tasks: [],
                color: colors[Math.floor(Math.random() * colors.length)]
            };
        });
        setCurrentBoard(prevState => ({
            ...prevState,
            columns: columnValues
        }));
    };
    
    const closeModal = () => {
        setShowModal(false);
    };
    
    const handleInputSaveCreation = () => {
        setInputColumn([...inputColumn, '']);
    };
    
    const handleDelete = (index) => {
        setInputColumn(inputColumn.filter((_, i) => i !== index ));
    };
    
    
    return (
        <div className={`${currentBoard.columns.length === 0 ? 'relative w-full flex-grow justify-center items-center flex bg-almostWhite dark:bg-darkGray' : 'relative overflow-y-auto max-w-full w-full  justify-start p-4 flex bg-almostWhite dark:bg-darkGray'}`}>
            {
                inputColumn.length === 0 ? (
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
                                        <p className="uppercase text-slate-400 text-[12px] font-bold tracking-widest">{column.column}{' '}{`(${column.tasks.length})`}</p>
                                    </div>
                                    {/*card*/}
                                    {
                                        column.tasks.map((task) => (
                                            <div key={task.title} className="flex flex-col justify-center px-4 py-[23px] w-[280px] mb-4 bg-white rounded-lg shadow">
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
                                inputColumn.map((input, index) => (
                                    <div key={index} className="flex items-center w-full space-x-4 mb-2">
                                        <input
                                            id={`nameColumns${index}`}
                                            name={`nameColumn${index}`}
                                            className="w-11/12  pl-3  h-10 border border-lightGray border-opacity-25 rounded-sm text-gray-950 focus:outline-none"
                                            type="text"
                                            maxLength="25"
                                            placeholder="Todo"
                                            value={input || ''}
                                            onChange={(e) => handleChange(index, e)}
                                        />
                                        <button onClick={() => handleDelete(index)}>
                                            <img src={crossMark} alt=""/>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </GenericModal>
                ) : null
            }
        </div>
    );
};

export default ColumnField;

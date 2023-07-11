import React, {useContext, useState} from 'react';
import iconAdd from '../../assets/icon-add-task-mobile.svg';
import {ColumnContext} from '../../context/ColumnContext.jsx';
import GenericModal from './GenericModal.jsx';
import crossMark from '../../assets/icon-cross.svg';
import {BoardContext} from '../../context/BoardContext.jsx';

const ButtonAddNewTask = () => {
    const { columnTasksInput, handleChangeInputValue, handleInputCreation, handleDeleteInputField, handleCreateTask } = useContext(ColumnContext);
    const { currentBoard } = useContext(BoardContext);
    const [showModal, setShowModal] = useState(false);
    
    const placeholderExample = ['e.g. Make coffe', 'e.g. Drink cofee & smile', 'e.g. Be happy'];
    
    const closeModal = () => {
        setShowModal(false);
    };
    
    return (
        <>
            <button className={`${'px-4 py-2 md:py-3 md:px-6 text-white rounded-full md:flex gap-x-1 md:items-center'} ${currentBoard.columns.length > 0 ? 'bg-darkPurple pointer-events-auto' : 'bg-lightPurple pointer-events-none'}`}
                onClick={() => setShowModal(true)}>
                <img className="md:h-2 md:mt-1" src={iconAdd} alt=""/>
                <div className="hidden md:block">
                    Add New Task
                </div>
            </button>
            {
                showModal ? (
                    <GenericModal
                        type={'Add New Task'}
                        handleInputCreation={handleInputCreation}
                        handleSaveChanges={handleCreateTask}
                        closeModal={closeModal}
                    >
                        <div className="flex flex-col items-start justify-start">
                            <label htmlFor="nameColumn" className="text-slate-400 text-[12px] py-2 font-bold">Subtasks</label>
                            {
                                columnTasksInput.map((input, index) => (
                                    <div key={index} className="flex items-center w-full space-x-4 mb-2">
                                        <input
                                            id={`nameColumns${index}`}
                                            name={`nameColumn${index}`}
                                            className="w-11/12  pl-3  h-10 border border-lightGray border-opacity-25 rounded-sm text-gray-950 focus:outline-none"
                                            type="text"
                                            maxLength="25"
                                            placeholder={placeholderExample[index] || 'Any...'}
                                            value={input || ''}
                                            onChange={(e) => handleChangeInputValue(e, index)}
                                        />
                                        <button onClick={() => handleDeleteInputField(index)}>
                                            <img src={crossMark} alt=""/>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </GenericModal>
                ) : null
            }
        </>
  
    );
};

export default ButtonAddNewTask;

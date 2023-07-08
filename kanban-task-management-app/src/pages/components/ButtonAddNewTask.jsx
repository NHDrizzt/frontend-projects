import React, {useContext, useState} from 'react';
import iconAdd from '../../assets/icon-add-task-mobile.svg';
import {ColumnContext} from '../../context/ColumnContext.jsx';
import GenericModal from './GenericModal.jsx';
import crossMark from '../../assets/icon-cross.svg';

const ButtonAddNewTask = () => {
    const { columnFields, columnTasksInput, setColumnTasksInput, handleCreateTask } = useContext(ColumnContext);
    const [showModal, setShowModal] = useState(false);
    
    const placeholderExample = ['e.g. Make coffe', 'e.g. Drink cofee & smile', 'e.g. Be happy'];
    
    const handleChange = ({target: {value}}, index) => {
        const newValue = [...columnTasksInput];
        newValue[index] = value;
        setColumnTasksInput(newValue);
    };
    
    const closeModal = () => {
        setShowModal(false);
    };
    
    const handleInputCreation = () => {
        setColumnTasksInput([...columnTasksInput, '']);
    };
    
    const handleDelete = (index) => {
        setColumnTasksInput(columnTasksInput.filter((_, i) => i !== index));
    };
    
    
    
    return (
        <>
            <button className={`${'px-4 py-2 md:py-3 md:px-6 text-white rounded-full md:flex gap-x-1 md:items-center'} ${columnFields.length > 0 ? 'bg-darkPurple pointer-events-auto' : 'bg-lightPurple pointer-events-none'}`}
                onClick={() => setShowModal(true)}>
                <img className="md:h-2 md:mt-1" src={iconAdd} alt=""/>
                <div className="hidden md:block">
                    Add New Task
                </div>
            </button>
            {
                showModal ? (
                    <GenericModal
                        mainTitle={'Add New Task'}
                        addInputName={'Add New Subtask'}
                        saveButton={'Create Task'}
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
                                            onChange={(e) => handleChange(e, index)}
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
        </>
  
    );
};

export default ButtonAddNewTask;

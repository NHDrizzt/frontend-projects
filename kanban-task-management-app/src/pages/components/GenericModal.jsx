import React, {useContext, useMemo} from 'react';
import ComboBox from './ComboBox.jsx';
import {ColumnContext} from '../../context/ColumnContext.jsx';

const GenericModal = ({type, handleSaveChanges, handleInputCreation, closeModal, children}) => {
    
    const {
        title,
        description,
        setTitle,
        setDescription,
        selectedOption,
        setSelectedOption,
    } = useContext(ColumnContext);
    
    const memoizedValues = useMemo(() => {
        let mainTitle = '';
        let addInputName = '';
        let saveButton = '';
        
        switch (type) {
        case 'Add New Task':
            mainTitle = 'Add New Task';
            addInputName = 'Add New Subtask';
            saveButton = 'Create Task';
            break;
        case 'Add New Columns':
            mainTitle = 'Add New Column';
            addInputName = 'Add New Column';
            saveButton = 'Save Changes';
            break;
        case 'Edit Task':
            mainTitle = 'Edit Task';
            addInputName = 'Add New Subtask';
            saveButton = 'Save Changes';
            break;
        case 'Edit Board':
            mainTitle = 'Edit Board';
            addInputName = 'Add New Column';
            saveButton = 'Save Changes';
            break;
        default:
            break;
        }
        
        return { mainTitle, addInputName, saveButton };
    }, [type]);
    
    const handleSaveAll = () => {
        closeModal();
        handleSaveChanges();
    };
    
    const handleTitleChange = (event) => {
        console.log(event.target.value);
        setTitle(event.target.value);
    };
    
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    
    return (
        <div>
            <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none outline-none focus:outline-none">
                <div className="container mx-auto w-11/12 md:w-[480px]">
                    {/*content*/}
                    <div className="p-8 rounded-lg flex flex-col pointer-events-auto bg-white outline-none focus:outline-none dark:bg-mediumGray">
                        {/*header*/}
                        <p className="text-lg text-gray-950 font-bold dark:text-white">
                            {memoizedValues.mainTitle}
                        </p>
                        {
                            type === 'Edit Task' || type === 'Add New Task' ? (
                                <>
                                    <div className="flex flex-col items-start justify-start">
                                        <label className="text-slate-400 text-[12px] py-2 font-bold" htmlFor="">Title</label>
                                        <input
                                            name="title"
                                            value={title}
                                            onChange={handleTitleChange}
                                            className="w-full pl-3 mb-4 h-10 border border-lightGray border-opacity-25 rounded-sm text-gray-950 focus:outline-none dark:bg-mediumGray dark:border-lightMediumGray dark:border-opacity-25 dark:caret-white dark:text-white"
                                            type="text"/>
                                    </div>
                                    <div className="flex flex-col items-start justify-start rounded-md">
                                        <label className="text-slate-400 text-[12px] py-2 font-bold" htmlFor="">Description</label>
                                        <textarea
                                            name="description"
                                            value={description}
                                            onChange={handleDescriptionChange}
                                            className="w-full border border-lightGray border-opacity-25 rounded-sm text-gray-950 focus:outline-none dark:bg-mediumGray dark:border-lightMediumGray dark:border-opacity-25 dark:caret-white dark:text-white"
                                            id=""
                                            cols="20"
                                            rows="4"></textarea>
                                    </div>
                                </>
                            ) : null
                        }
                        {/*body*/}
                        {children}
                        {/*footer*/}
                        <div className="flex flex-col items-center justify-center">
                            <button
                                className="bg-indigo-500 bg-opacity-10 mt-3 rounded-full w-full mb-8 text-darkPurple background-transparent font-bold mt-2 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 before:content-['+']"
                                type="button"
                                onClick={handleInputCreation}
                            >
                                { memoizedValues.addInputName }
                            </button>
                            {
                                type === 'Edit Task' || type === 'Add New Task' ? (
                                    <div className="relative flex flex-col w-full items-start justify-start mb-6">
                                        <label className="text-slate-400 text-[12px] py-2 font-bold" htmlFor="">Status</label>
                                        <ComboBox selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                                    </div>
                                ) : null
                            }
                            <button
                                className="bg-darkPurple w-full rounded-full font-plus-jakarta mb-6 text-white active:bg-lightPurple font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={handleSaveAll}
                            >
                                { memoizedValues.saveButton }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*overlay*/}
            <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={closeModal}></div>
        </div>
    );
};

export default GenericModal;

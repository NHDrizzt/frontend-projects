import React, {useContext, useEffect, useState} from 'react';
import iconAdd from '../assets/icon-add-task-mobile.svg';
import crossMark from '../assets/icon-cross.svg';
import {ColumnContext} from '../context/ColumnContext.jsx';
import GenericModal from './components/GenericModal.jsx';
import {BoardContext} from '../context/BoardContext.jsx';
import {nanoid} from 'nanoid';
import ComboBox from './components/ComboBox.jsx';
import iconCheck from '../assets/icon-check.svg';
import threeDots from '../assets/icon-vertical-ellipsis.svg';
import showSideBar from '../assets/icon-show-sidebar.svg';
import {SideBarContext} from '../context/SidebarContext.jsx';


const ColumnField = () => {
    const [showModal, setShowModal] = useState(false);
    const { pendingInputField, selectedOption,
        setSelectedOption, setPendingInputField,
    } = useContext(ColumnContext);
    const placeholderExample = ['e.g. Make coffe', 'e.g. Drink cofee & smile', 'e.g. Be happy'];
    const {currentBoard, setCurrentBoard} = useContext(BoardContext);
    const [checkmarkToggle, setCheckmarkToggle] = useState(false);
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
    const [previoustTaskInfo, setPreviousTaskInfo] = useState({});
    const [currentTaskInfo, setCurrentTaskInfo] = useState({});
    const [pendingCurrentTaskInfo, setPendingCurrentTaskInfo] = useState({});
    const [pendingEditSelectedOption, setPendingEditSelectedOption] = useState('');
    const [showEditAndDeleteDropdown, setShowEditAndDeleteDropdown] = useState(false);
    const [isConfirmDeleteTaskModalOpen, setIsConfirmDeleteTaskModalOpen ] = useState(false);
    const colors = [
        'bg-red-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-indigo-500',
        'bg-pink-500',
        'bg-teal-500',
    ];
    
    const handleSaveChanges = () => {
        setSelectedOption(pendingInputField.columns[0].column);
        setCurrentBoard(pendingInputField);
    };

    const closeModal = () => {
        setShowModal(false);
        setShowEditAndDeleteDropdown(false);
    };
    
    const closeShowInfoModal = () => {
        setIsTaskModalOpen(false);
        setPendingInputField(currentBoard);
        setShowEditAndDeleteDropdown(false);
    };
    
    const closeEditTaskModal = () => {
        setIsEditTaskModalOpen(false);
        setIsConfirmDeleteTaskModalOpen(false);
    };
    
    const handleChange = (index, {target: {value}}) => {
        setPendingInputField(prevState => {
            const columns = [...pendingInputField.columns];
            columns[index].column = value;
            return { ...prevState, columns };
        });
    };
    
    const handleInputSaveCreation = () => {
        const newColumn = {
            id: nanoid(),
            column: '',
            tasks: [],
            color: colors[Math.floor(Math.random() * colors.length)]
        };
    
        setPendingInputField(prevState => {
            const newColumns = prevState.columns.concat(newColumn);
            return {...prevState, columns: newColumns};
        });
    };
    
    const handleDelete = (id) => {
        setPendingInputField(prevState => {
            const newColumns = prevState.columns.filter(column => column.id === id);
            return  { ...prevState, columns: newColumns };
        });
    };
    
    const handleOpenTaskInfo = (task) => {
        setIsTaskModalOpen(true);
        setPreviousTaskInfo(task);
        setCurrentTaskInfo(task);
    };
    
    const toggleCheckmark = (subtasks, index) => {
        const newSubtasks = currentTaskInfo.subtasks.map((subtask, i) => {
            if (i !== index) return subtask;
            return { ...subtask, isCompleted: !subtask.isCompleted };
        });
        
        setCurrentTaskInfo(prevState => ({
            ...prevState,
            subtasks: newSubtasks
        }));
        setCheckmarkToggle(prevState => !prevState);
    };
    
    useEffect(() => {
        setPendingInputField(prevInputState => {
            let newColumns = [...prevInputState.columns];
            newColumns.forEach(column => {
                column.tasks.forEach(task => {
                    if (task.id === currentTaskInfo.id) {
                        task.subtasks = currentTaskInfo.subtasks;
                    }
                });
            });
            return { ...prevInputState, columns: newColumns };
        });
        setCurrentBoard(pendingInputField);
    }, [checkmarkToggle]);
    
    const handleSelectionChange = (selectedValue) => {
        setCurrentTaskInfo(prevState => ({
            ...prevState,
            selectedOption: selectedValue,
        }));
        setPendingInputField(prevInputState => {
            let prevInputColumns = [...prevInputState.columns];
            
            let columnToIterate = prevInputColumns.findIndex(c => c.column === previoustTaskInfo.selectedOption);
            
            let taskToIterate = prevInputColumns[columnToIterate]?.tasks.findIndex(t => t.id === currentTaskInfo.id);
    
            if (taskToIterate !== -1) {
                let removedObject = prevInputColumns[columnToIterate]?.tasks.splice(taskToIterate, 1)[0];
                let addedObject = prevInputColumns.find(c => c.column === selectedValue);
                addedObject.tasks.push({...removedObject, selectedOption: selectedValue});
                setPreviousTaskInfo(prevState => ({...prevState, selectedOption: selectedValue}));
            } else {
                console.log('Object with ID', currentTaskInfo.id, 'not found.');
            }
            return prevInputState;
        });
    };
    
    const handleEditTaskDetails = () => {
        closeShowInfoModal();
        setIsEditTaskModalOpen(true);
        setPendingCurrentTaskInfo(currentTaskInfo);
    };
    
    const handleEditAddSubtasksInput = () => {
        setPendingCurrentTaskInfo(prevState => ({
            ...prevState,
            subtasks: [...prevState.subtasks, {id: nanoid(), title: '', isCompleted: false}]
        }));
    };
    
    const handleEditDeleteSubtask = (index) => {
        setPendingCurrentTaskInfo(prevState => ({
            ...prevState,
            subtasks: prevState.subtasks.filter((subtask, i) => i !== index)
        }));
    };
    
    const handleEditSubtaskChange = (index, {target: {value}}) => {
        setPendingCurrentTaskInfo(prevState => {
            const subtasks = [...prevState.subtasks];
            subtasks[index].title = value;
            return { ...prevState, subtasks };
        });
    };
    
    const handleEditTitleChange = ({target: {value}}) => {
        setPendingCurrentTaskInfo(prevState => ({
            ...prevState,
            title: value
        }));
    };
    
    const handleEditDescriptionChange = ({target: {value}}) => {
        setPendingCurrentTaskInfo(prevState => ({
            ...prevState,
            description: value
        }));
    };
    
    const handleUpdateTask = () => {
        setPendingInputField(prevState =>{
            const columns = [...prevState.columns];
            const columnToIterate = columns.findIndex(c => c.column === currentTaskInfo.selectedOption);
            const taskToIterate = columns[columnToIterate]?.tasks.findIndex(t => t.id === currentTaskInfo.id);
    
            if (columnToIterate !== -1 && taskToIterate !== -1) {
                const taskArray = columns[columnToIterate].tasks;
                taskArray[taskToIterate] = pendingCurrentTaskInfo;
                if (currentTaskInfo.selectedOption !== pendingEditSelectedOption) {
                    const removedObject = taskArray.splice(taskToIterate, 1)[0];
                    console.log(removedObject);
                    const addedObject = columns.find(c => c.column === pendingEditSelectedOption);
                    addedObject.tasks.push({...pendingCurrentTaskInfo, selectedOption: pendingEditSelectedOption});
                }
            } else {
                console.log('Object with ID', currentTaskInfo.id, 'not found.');
            }
    
            return prevState;
        });
        setCurrentTaskInfo(pendingCurrentTaskInfo);
        setIsEditTaskModalOpen(false);
    };
    
    const handleDeleteCurrentTask = () => {
        setPendingInputField(prevState => {
            const columns = [...prevState.columns];
            const columnToIterate = columns.findIndex(c => c.column === currentTaskInfo.selectedOption);
            const taskToIterate = columns[columnToIterate]?.tasks.findIndex(t => t.id === currentTaskInfo.id);

            if (columnToIterate !== -1 && taskToIterate !== -1) {
                columns[columnToIterate].tasks.splice(taskToIterate, 1);
            } else {
                console.log('Object with ID', currentTaskInfo.id, 'not found.');
            }
            return prevState;
        });
        setIsTaskModalOpen(false);
        setIsConfirmDeleteTaskModalOpen(false);
    };
    
    const handleConfirmDeleteCurrentTask = () => {
        setIsConfirmDeleteTaskModalOpen(true);
        setIsTaskModalOpen(false);
    };
    
    const handleCloseDeleteTaskModal = () => {
        setIsConfirmDeleteTaskModalOpen(false);
        setIsTaskModalOpen(true);
    };
    
    const { toggle, setToggle } = useContext(SideBarContext);
    
    
    return (
        <div className={`${currentBoard.columns.length === 0 ? 'relative w-full flex-grow justify-center items-center flex bg-almostWhite dark:bg-darkGray' : 'relative overflow-y-auto max-w-full w-full  justify-start p-4 flex bg-almostWhite dark:bg-darkGray'}`}>
            <div className={`${toggle ? 'left-0 bottom-0 mb-8 block' : 'left-[301px] hidden'} ${'absolute flex items-center pl-[15px] h-12 w-[56px] bg-darkPurple rounded-tr-[100px] rounded-br-[100px] cursor-pointer'}`} onClick={() => { setToggle(!toggle); }}>
                <img src={showSideBar} alt=""/>
            </div>
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
                                            <div key={task.id} className="flex flex-col justify-center px-4 py-[23px] w-[280px] mb-4 bg-white rounded-lg shadow cursor-pointer"
                                                onClick={() => handleOpenTaskInfo(task)}
                                            >
                                                <p className="text-gray-950 text-[15px] font-bolthred">{task.title}</p>
                                                <p className="text-slate-400 text-[12px] font-bold">{task.subtasks.filter(subtask => subtask.isCompleted).length} of {task.subtasks.length} subtasks</p>
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
                                pendingInputField.columns.map((input, index) => (
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
                                            autoFocus
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
                isTaskModalOpen ? (
                    <div>
                        <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none outline-none focus:outline-none">
                            <div className="container mx-auto w-11/12 md:w-[480px]">
                                {/*content*/}
                                <div className="p-8 rounded-lg flex flex-col pointer-events-auto bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex justify-between">
                                        <p className="text-lg text-gray-950 font-bold">
                                            {
                                                currentTaskInfo.title
                                            }
                                        </p>
                                        <div className="relative">
                                            <button onClick={() => setShowEditAndDeleteDropdown(!showEditAndDeleteDropdown)}>
                                                <img className=" h-4 md:h-6 cursor-pointer" src={threeDots} alt=""/>
                                            </button>
    
                                            <div className={`${!showEditAndDeleteDropdown ? 'hidden': ''} flex flex-col items-start border -left-3 top-1 absolute z-50 text-[13px] leading-snug font-plus-jakarta px-4 py-5 space-y-5 -translate-x-[80%] translate-y-6 mx-auto w-48 h-[94px] bg-white dark:bg-darkGray rounded-lg shadow`}>
                                                <button className="text-veryLightGray"
                                                    onClick={() => handleEditTaskDetails(true)}
                                                >Edit Task</button>
                                                <button className="text-tomatoRed" onClick={handleConfirmDeleteCurrentTask}>Delete Task</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-400 py-6 text-[13px] font-medium leading-[23px]">
                                        {
                                            currentTaskInfo.description
                                        }
                                    </p>
                                    {/*body*/}
                                    <div>
                                        <p className="pb-2 text-xs font-bold text-veryLightGray">Subtasks ({currentTaskInfo.subtasks.filter(subtask => subtask.isCompleted === true).length} of {currentTaskInfo.subtasks.length})</p>
                                        <div>
                                            {
                                                currentTaskInfo.subtasks.map((subtasks, i) => (
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
                                        <label className="text-slate-400 text-[12px] py-2 pt-3 font-bold" htmlFor="">Current status</label>
                                        <ComboBox
                                            selectedOption={selectedOption}
                                            setSelectedOption={setSelectedOption}
                                            onSelectionChange={handleSelectionChange}
                                            currentSelectedValue={currentTaskInfo.selectedOption}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*overlay*/}
                        <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={closeShowInfoModal}></div>
                    </div>
                ) : null
            }
    
            {
                isEditTaskModalOpen ? (
                    <div>
                        <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none outline-none focus:outline-none">
                            <div className="container mx-auto w-11/12 md:w-[480px]">
                                {/*content*/}
                                <div className="p-8 rounded-lg flex flex-col pointer-events-auto bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <p className="text-lg text-gray-950 font-bold">
                                        Edit Task
                                    </p>
                                    {
                                        <>
                                            <div className="flex flex-col items-start justify-start">
                                                <label className="text-slate-400 text-[12px] py-2 font-bold" htmlFor="">Title</label>
                                                <input
                                                    name="title"
                                                    value={pendingCurrentTaskInfo.title || ''}
                                                    onChange={(e) => handleEditTitleChange(e)}
                                                    className="w-full pl-3 mb-4 h-10 border border-lightGray border-opacity-25 rounded-sm text-gray-950 focus:outline-none"
                                                    type="text"/>
                                            </div>
                                            <div className="flex flex-col items-start justify-start">
                                                <label className="text-slate-400 text-[12px] py-2 font-bold" htmlFor="">Description</label>
                                                <textarea
                                                    name="description"
                                                    value={pendingCurrentTaskInfo.description || ''}
                                                    onChange={(e) => handleEditDescriptionChange(e)}
                                                    className="w-full border border-lightGray border-opacity-25 rounded-sm text-gray-950 focus:outline-none"
                                                    id=""
                                                    cols="20"
                                                    rows="4"></textarea>
                                            </div>
                                        </>
                                    }
                                    {/*body*/}
                                    <div className="flex flex-col items-start justify-start">
                                        <label htmlFor="nameColumn" className="text-slate-400 text-[12px] py-2 font-bold">Subtasks</label>
                                        {
                                            pendingCurrentTaskInfo.subtasks?.map((input, index) => (
                                                <div key={index} className="flex items-center w-full space-x-4 mb-2">
                                                    <input
                                                        id={`nameColumns${index}`}
                                                        name={`nameColumn${index}`}
                                                        className="w-11/12  pl-3  h-10 border border-lightGray border-opacity-25 rounded-sm text-gray-950 focus:outline-none"
                                                        type="text"
                                                        maxLength="25"
                                                        placeholder={placeholderExample[index] || 'Any...'}
                                                        value={input.title || ''}
                                                        onChange={(e) => handleEditSubtaskChange(index, e)}
                                                    />
                                                    <button onClick={() => handleEditDeleteSubtask(index)}>
                                                        <img src={crossMark} alt=""/>
                                                    </button>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    {/*footer*/}
                                    <div className="flex flex-col items-center justify-center">
                                        <button
                                            className="bg-indigo-500 bg-opacity-10 mt-3 rounded-full w-full mb-8 text-darkPurple background-transparent font-bold mt-2 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 before:content-['+']"
                                            type="button"
                                            onClick={handleEditAddSubtasksInput}
                                        >
                                            Add Subtask
                                        </button>
                                        {
                                            <div className="relative flex flex-col w-full items-start justify-start mb-6">
                                                <label className="text-slate-400 text-[12px] py-2 font-bold" htmlFor="">Status</label>
                                                <ComboBox
                                                    selectedOption={selectedOption}
                                                    setSelectedOption={setSelectedOption}
                                                    onSelectionChange={setPendingEditSelectedOption}
                                                />
                                            </div>
                                        }
                                        <button
                                            className="bg-darkPurple w-full rounded-full font-plus-jakarta mb-6 text-white active:bg-lightPurple font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleUpdateTask}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*overlay*/}
                        <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={closeEditTaskModal}></div>
                    </div>
                ) : null
            }
    
            {
                isConfirmDeleteTaskModalOpen ? (
                    <div>
                        <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none outline-none focus:outline-none">
                            <div className="container mx-auto w-11/12 md:w-[480px]">
                                {/*content*/}
                                <div className="p-8 rounded-lg flex flex-col pointer-events-auto bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <p className="text-lg text-tomatoRed font-bold font-plus-jakarta mb-6">
                                        Delete this task?
                                    </p>
                                    {/*body*/}
                                    <div className="flex flex-col items-start justify-start mb-6">
                                        <p className="font-plus-jakarta text-veryLightGray text-sm">
                                            Are you sure you want to delete &lsquo;{ currentTaskInfo.title }&rsquo; and its subtasks? This action cannot be undone.
                                        </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center gap-x-2 justify-center">
                                        <button
                                            className="bg-tomatoRed rounded-full w-full text-white font-bold px-6 py-2.5 text-sm outline-none shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleDeleteCurrentTask}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="bg-lightPurple bg-opacity-10 w-full rounded-full font-plus-jakarta text-darkPurple active:text-lightPurple active:bg-darkPurple font-bold text-sm px-6 py-2.5 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleCloseDeleteTaskModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={closeEditTaskModal}></div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default ColumnField;

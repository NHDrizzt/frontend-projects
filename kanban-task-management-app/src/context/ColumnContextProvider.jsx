import React, {useContext, useEffect, useState} from 'react';
import {ColumnContext} from './ColumnContext.jsx';
import PropTypes from 'prop-types';
import {BoardContext} from './BoardContext.jsx';
import {nanoid} from 'nanoid';

const ColumnContextProvider = ({children}) => {
    
    const [newSubtaskAddInput, setNewSubtaskAddInput] = useState([]);
    const { currentBoard, setCurrentBoard } = useContext(BoardContext);
    const [inputColumn, setInputColumn] = useState([]);
    const [pendingInputField, setPendingInputField] = useState(currentBoard);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
  
    

    const handleCreateTask = () => {
        const newTask = {
            id: nanoid(),
            title,
            description,
            subtasks: [...newSubtaskAddInput],
            selectedOption
        };
        setCurrentBoard(prevBoard => {
            const updatedColumns = prevBoard.columns.map(column => {
                if (newTask.selectedOption === column.column) {
                    return {
                        ...column,
                        tasks: [...column.tasks, newTask]
                    };
                } else {
                    return column;
                }
            });
            return {...prevBoard, columns: updatedColumns};
        });
        setNewSubtaskAddInput(prevState => prevState.map(subtask => ({ ...subtask, title: ''})));
    };
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    
    useEffect(() => {
        setPendingInputField(currentBoard);
    }, [currentBoard, setCurrentBoard]);
    
    const handleChangeSubtaskInputValue = ({target: {value}}, index) => {
        const newValue = [...newSubtaskAddInput];
        newValue[index].title = value;
        setNewSubtaskAddInput(newValue);
    };
    
    const handleInputCreation = () => {
        setNewSubtaskAddInput([...newSubtaskAddInput, { isCompleted: false, title: ''}]);
    };
    
    const handleDeleteInputField = (index) => {
        setNewSubtaskAddInput(newSubtaskAddInput.filter((_, i) => i !== index));
    };
    
    
    

    const values = {
        columnTasksInput: newSubtaskAddInput,
        setColumnTasksInput: setNewSubtaskAddInput,
        inputColumn,
        setInputColumn,
        title,
        setTitle,
        setDescription,
        selectedOption,
        setSelectedOption,
        handleTitleChange,
        handleDescriptionChange,
        handleCreateTask,
        handleChangeSubtaskInputValue,
        handleInputCreation,
        handleDeleteInputField,
        pendingInputField,
        setPendingInputField
    };
    
    return (
        <ColumnContext.Provider value={values}>
            {children}
        </ColumnContext.Provider>
    );
};

ColumnContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ColumnContextProvider;

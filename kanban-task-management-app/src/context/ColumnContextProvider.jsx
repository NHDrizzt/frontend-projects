import React, {useContext, useEffect, useState} from 'react';
import {ColumnContext} from './ColumnContext.jsx';
import PropTypes from 'prop-types';
import {BoardContext} from './BoardContext.jsx';
import {nanoid} from 'nanoid';

const ColumnContextProvider = ({children}) => {
    
    const [newSubtaskAddInput, setNewSubtaskAddInput] = useState([{ isCompleted: false, title: ''}]);
    const { currentBoard, setCurrentBoard } = useContext(BoardContext);
    const [inputColumn, setInputColumn] = useState([]);
    const [pendingInputField, setPendingInputField] = useState(currentBoard);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOption, setSelectedOption] = useState(currentBoard.columns[0].column);
  
    

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
        setTitle,
        setDescription,
        selectedOption,
        setSelectedOption,
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

import React, {useContext, useState} from 'react';
import {ColumnContext} from './ColumnContext.jsx';
import PropTypes from 'prop-types';
import {BoardContext} from './BoardContext.jsx';
import {nanoid} from 'nanoid';

const ColumnContextProvider = ({children}) => {
    
    const [columnTasksInput, setColumnTasksInput] = useState([]);
    const [inputColumn, setInputColumn] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const { currentBoard, setCurrentBoard } = useContext(BoardContext);
    const handleCreateTask = () => {
        const newTask = {
            id: nanoid(),
            title,
            description,
            subtasks: [...columnTasksInput],
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
    };
    
    // const handleEditTask = (currentTask) => {
    //     const getTask = currentBoard.columns.tasks.find()
    // }
    
    const handleChangeInputValue = ({target: {value}}, index) => {
        const newValue = [...columnTasksInput];
        newValue[index] = value;
        setColumnTasksInput(newValue);
    };
    

    const handleInputCreation = () => {
        console.log(columnTasksInput);
        setColumnTasksInput([...columnTasksInput, '']);
    };
    
    const handleDeleteInputField = (index) => {
        setColumnTasksInput(columnTasksInput.filter((_, i) => i !== index));
    };
    
    const values = {
        columnTasksInput,
        setColumnTasksInput,
        inputColumn,
        setInputColumn,
        setTitle,
        setDescription,
        setSelectedOption,
        handleCreateTask,
        handleChangeInputValue,
        handleInputCreation,
        handleDeleteInputField
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

import React, {useContext, useEffect, useState} from 'react';
import {ColumnContext} from './ColumnContext.jsx';
import PropTypes from 'prop-types';
import {BoardContext} from './BoardContext.jsx';

const ColumnContextProvider = ({children}) => {
    
    const [columnTasksInput, setColumnTasksInput] = useState([]);
    const [inputColumn, setInputColumn] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [tasks, setTasks] = useState([]);
    const { currentBoard, setCurrentBoard } = useContext(BoardContext);
    const handleCreateTask = () => {
        const newTask = {
            title,
            description,
            subtasks: [...columnTasksInput],
            selectedOption
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
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
    
    const values = {
        columnTasksInput,
        setColumnTasksInput,
        inputColumn,
        setInputColumn,
        setTitle,
        setDescription,
        setSelectedOption,
        handleCreateTask,
        tasks,
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

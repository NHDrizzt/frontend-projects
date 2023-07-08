import React, {useEffect, useState} from 'react';
import {ColumnContext} from './ColumnContext.jsx';
import PropTypes from 'prop-types';

const ColumnContextProvider = ({children}) => {
    
    const [columnFields, setColumnFields] = useState([]);
    const [columnTasksInput, setColumnTasksInput] = useState([]);
    const [inputColumn, setInputColumn] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [tasks, setTasks] = useState([]);
    const [columnWithTasksJSON, setColumnWithTasksJSON] = useState({});
    const [board, setBoard] = useState({
        platformLaunch: {},
        marketingPlan: {}
    });

    const handleCreateTask = () => {
        const newTask = {
            title,
            description,
            subtasks: [...columnTasksInput],
            selectedOption
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
        setColumnFields(prevFields => prevFields.map((value) => {
            if (newTask.selectedOption === value.column) {
                return {...value, tasks: [...value.tasks, newTask]};
            } else {
                return value;
            }
        })
        );
    };
    
    const values = {
        columnFields,
        setColumnFields,
        columnTasksInput,
        setColumnTasksInput,
        inputColumn,
        setInputColumn,
        setTitle,
        setDescription,
        setSelectedOption,
        handleCreateTask,
        tasks,
        columnWithTasksJSON,
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

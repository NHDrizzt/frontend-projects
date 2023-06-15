import React from 'react';
import iconAdd from '../../assets/icon-add-task-mobile.svg';

const ButtonAddNewTask = () => {
    return (
        <button className="px-4 py-2 opacity-50 md:py-4 md:px-6 text-white bg-lightPurple rounded-full md:flex gap-x-1 md:items-center">
            <img className="md:h-2" src={iconAdd} alt=""/>
            <div className="hidden md:block">
                Add New Task
            </div>
            
        </button>
    );
};

export default ButtonAddNewTask;

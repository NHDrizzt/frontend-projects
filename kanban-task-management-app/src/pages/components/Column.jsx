import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task'; // Update the import path according to your file structure

const Column = ({ column, handleOpenTaskInfo }) => {
    return (
        <div className="flex flex-col w-[280px] mr-4">
            <div className="flex py-4 space-x-2 items-center">
                <div className={`${column.color} w-[15px] h-[15px] rounded-full`}></div>
                <p className="uppercase text-slate-400 text-[12px] font-bold tracking-widest">
                    {column.column}{' '}{`(${column.tasks?.length})`}
                </p>
            </div>
            {column.tasks?.map((task) => (
                <Task key={task.id} task={task} handleOpenTaskInfo={handleOpenTaskInfo} />
            ))}
        </div>
    );
};




Column.propTypes = {
    column: PropTypes.shape({
        color: PropTypes.string.isRequired,
        column: PropTypes.string.isRequired,
        tasks: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                subtasks: PropTypes.arrayOf(
                    PropTypes.shape({
                        isCompleted: PropTypes.bool.isRequired,
                        title: PropTypes.string.isRequired
                    })
                ).isRequired
            })
        ).isRequired
    }).isRequired,
    handleOpenTaskInfo: PropTypes.func.isRequired
};

export default Column;

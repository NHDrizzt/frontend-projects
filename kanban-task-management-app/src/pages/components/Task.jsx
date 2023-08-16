import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, handleOpenTaskInfo }) => {
    return (
        <div className="flex flex-col justify-center px-4 py-[23px] w-[280px] mb-4 bg-white rounded-lg shadow cursor-pointer" onClick={() => handleOpenTaskInfo(task)}>
            <p className="text-gray-950 text-[15px] font-bold">{task.title}</p>
            <p className="text-slate-400 text-[12px] font-bold">{task.subtasks.filter(subtask => subtask.isCompleted).length} of {task.subtasks.length} subtasks</p>
        </div>
    );
};


Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtasks: PropTypes.arrayOf(
            PropTypes.shape({
                isCompleted: PropTypes.bool.isRequired
            })
        ).isRequired
    }).isRequired,
    handleOpenTaskInfo: PropTypes.func.isRequired
};

export default Task;

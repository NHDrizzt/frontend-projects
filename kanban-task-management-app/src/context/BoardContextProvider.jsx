import React, {useEffect, useState} from 'react';
import {BoardContext} from './BoardContext.jsx';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';

const BoardContextProvider = ({children}) => {
    const colors = [
        'bg-red-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-indigo-500',
        'bg-pink-500',
        'bg-teal-500',
    ];
    const [boards, setBoards] = useState([
        { id: nanoid(), name: 'Platform Launch', columns: []},
        { id: nanoid(), name: 'Marketing Plan', columns: []},
        { id: nanoid(), name: 'Roadmap', columns: []}
    ]);
    const [boardName, setBoardName] = useState('');
    const [pendingCreateColumns, setPendingCreateColumns] = useState([{ id: nanoid(), color: colors[Math.floor(Math.random() * colors.length)] ,column: '', tasks: []}]);
    const [currentBoard, setCurrentBoard] = useState(boards[0]);
    useEffect(() => {
        if (currentBoard) {
            setBoards(boards => boards.map(board => board.id === currentBoard.id
                ? currentBoard : board));
        }
    }, [currentBoard]);
    
    const values = {
        boardName, setBoardName,
        boards, setBoards,
        currentBoard, setCurrentBoard,
        pendingCreateColumns, setPendingCreateColumns,
        colors
    };
    
    return (
        <BoardContext.Provider value={values}>
            {children}
        </BoardContext.Provider>
    );
};

BoardContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


export default BoardContextProvider;

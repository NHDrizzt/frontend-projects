import React, {useState} from 'react';
import {BoardContext} from './BoardContext.jsx';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';

const BoardContextProvider = ({children}) => {
    const [boards, setBoards] = useState([
        { id: nanoid(), name: 'Platform Launch', columns: []},
        { id: nanoid(), name: 'Marketing Plan', columns: []},
        { id: nanoid(), name: 'Roadmap', columns: []}
    ]);
    const [currentBoard, setCurrentBoard] = useState(boards[0]);
    return (
        <BoardContext.Provider value={{ boards, setBoards, currentBoard, setCurrentBoard }}>
            {children}
        </BoardContext.Provider>
    );
};

BoardContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


export default BoardContextProvider;

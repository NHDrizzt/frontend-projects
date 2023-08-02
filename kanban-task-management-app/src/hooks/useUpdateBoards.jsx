import { useState } from 'react';

const useUpdateBoards = (initialBoards, initialCurrentBoard) => {
    const [boards, setBoards] = useState(initialBoards);
    const [pendingBoards, setPendingBoards] = useState(initialBoards);
    const [currentBoard, setCurrentBoard] = useState(initialCurrentBoard);
    const [pendingCurrentBoard, setPendingCurrentBoard] = useState(initialCurrentBoard);
    
    const updateBoards = (updateFunc) => {
        const newPendingBoards = pendingBoards.map(board =>
            board.id === currentBoard.id ? updateFunc(board) : board
        );
        const newPendingCurrentBoard = newPendingBoards.find(board => board.id === currentBoard.id);
        setPendingBoards(newPendingBoards);
        setPendingCurrentBoard(newPendingCurrentBoard);
    };
    
    const saveChanges = () => {
        setBoards(pendingBoards);
        setCurrentBoard(pendingCurrentBoard);
    };
    
    return [boards, currentBoard, updateBoards, saveChanges];
};

export default useUpdateBoards;

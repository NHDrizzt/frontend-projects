import { useState } from 'react';

const useUpdateBoards = (initialBoards, initialCurrentBoard) => {
    const [boards, setBoards] = useState(initialBoards);
    const [pendingBoards, setPendingBoards] = useState(initialBoards);
    const [currentBoard, setCurrentBoard] = useState(initialCurrentBoard);
    
    const updateBoards = (updateFunc) => {
        const newPendingBoards = pendingBoards.map(board =>
            board.id === currentBoard.id ? updateFunc(board) : board
        );
        const newCurrentBoard = newPendingBoards.find(board => board.id === currentBoard.id);
        setPendingBoards(newPendingBoards);
        setCurrentBoard(newCurrentBoard);
    };
    
    const saveChanges = () => {
        setBoards(pendingBoards);
        setPendingBoards(boards);
    };
    
    return [boards, currentBoard, updateBoards, saveChanges];
};

export default useUpdateBoards;

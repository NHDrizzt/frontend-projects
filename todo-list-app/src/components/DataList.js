import React from "react";
import { useState, useEffect } from "react";

export const DataContext = React.createContext([]);

export function DataList(props) {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        localStorage.setItem('myTodos', JSON.stringify(todos))
    }, [todos]);
    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    );
}

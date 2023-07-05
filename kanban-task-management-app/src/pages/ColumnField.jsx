import React, {useEffect, useState} from 'react';
import iconAdd from '../assets/icon-add-task-mobile.svg';
import crossMark from '../assets/icon-cross.svg';





const ColumnField = () => {
    const [showModal, setShowModal] = useState(false);
    const [inputColumn, setInputColumn] = useState([]);
    const [saveChanges, setSaveChanges] = useState([]);
    const [randomColor, setRandomColor] = useState('');
    const colors = [
        'bg-red-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-teal-500',
    ];
    
    
    const handleChange = (index, {target: {value}}) => {
        const newValue = [...inputColumn];
        if (!newValue[index].color) {
            newValue[index] = {value, color: colors[Math.floor(Math.random() * colors.length)]};
        } else {
            newValue[index] = {value};
        }
        
        setInputColumn(newValue);
    };
    
    const handleSaveChanges = () => {
        setShowModal(false);
        setSaveChanges(inputColumn);
    };
    
    const handleDelete = (index) => {
        setInputColumn(inputColumn.filter((_, i) => i !== index ));
    };
    
    
    return (
        <div className={`${saveChanges.length === 0 ? 'relative w-full flex-grow justify-center items-center flex bg-almostWhite dark:bg-darkGray' : 'relative overflow-y-auto max-w-full w-full  justify-start p-4 flex bg-almostWhite dark:bg-darkGray'}`}>
            {
                inputColumn.length === 0 ? (
                    <div className="w-72 md:w-80 flex items-center justify-center flex-col gap-y-2 text-center">
                        <p className="font-lg font-bold text-veryLightGray font-plus-jakarta-sans">
                            This board is empty. Create a new column to get started.
                        </p>
                        <button
                            className="py-3 px-5 text-white text-plus-jakarta-sans font-bold text-base bg-darkPurple rounded-full flex gap-x-1 items-center hover:bg-lightPurple"
                            onClick={() => setShowModal(true)}
                        >
                            <img className="h-2 mt-1" src={iconAdd} alt="" />
                            Add New Column
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-start">
                        {
                            saveChanges.map((columnName, index) => (
                                <div key={index} className="flex flex-col  w-[280px] mr-4">
                                    {/*tile*/}
                                    <div className="flex py-4 space-x-2 items-center">
                                        <div className={`${columnName.color} w-[15px] h-[15px] rounded-full`}></div>
                                        <p className="uppercase text-slate-400 text-[12px] font-bold tracking-widest">{columnName.value}{' '}{'(4)'}</p>
                                    </div>
                                    {/*card*/}
                                    <div className="w-[280px] h-[88px] mb-4 bg-white rounded-lg shadow">
                                        <p>Build UI for onboarding flow</p>
                                        <p>0 of 6 subtasks</p>
                                    </div>
                                    <div className="w-[280px] h-[88px] mb-4 bg-white rounded-lg shadow">
                                        <p>some</p>
                                    </div>
                                    <div className="w-[280px] h-[88px] mb-4 bg-white rounded-lg shadow">
                                        <p>some</p>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="w-[280px] grid place-items-center bg-gradient-to-b from-indigo-50 to-indigo-50 rounded-md" onClick={() => setShowModal(true)}>
                            <p className="before:content-['+'] text-center text-slate-400 text-[24px] font-bold">New Column</p>
                        </div>
                    </div>
                    
                )
            }
            {
                showModal ? (
                    <div>
                        <div
                            className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none outline-none focus:outline-none"
                            // onClick={() => setShowModal(false)}
                        >
                            <div className="container mx-auto w-11/12 md:w-[480px]">
                                {/*content*/}
                                <div className="p-8 rounded-lg flex flex-col pointer-events-auto bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex">
                                        <p className="text-lg text-gray-950 font-bold">
                                            Add New Columns
                                        </p>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="flex flex-col items-start justify-start">
                                        <label htmlFor="nameColumn" className="text-slate-400 text-[12px] py-2 font-bold">Columns</label>
                                        {
                                            inputColumn.map((input, index) => (
                                                <div key={index} className="flex items-center w-full space-x-4 mb-2">
                                                    <input id={`nameColumns${index}`} name={`nameColumn${index}`} className="w-11/12  pl-3  h-10 border border-lightGray border-opacity-25 rounded-sm text-gray-950 focus:outline-none" type="text" maxLength="25" placeholder="Todo"
                                                        value={input.value}
                                                        onChange={(e) => handleChange(index, e)}
                                                    />
                                                    <button onClick={() => handleDelete(index)}>
                                                        <img src={crossMark} alt=""/>
                                                    </button>
                                                </div>
                                            ))
                                        }
                                       
                                        
                                        {/*<input id="nameColumn" className="w-11/12 pl-3 mt-3  h-10 border border-lightGray border-opacity-25 rounded-sm text-gray-950 focus:outline-none" type="text" maxLength="25"/>*/}
                                        
                                    </div>
                                    {/*footer*/}
                                    <div className="flex flex-col items-center justify-center">
                                        <button
                                            className="bg-indigo-500 bg-opacity-10 mt-3 rounded-full w-full mb-8 text-darkPurple background-transparent font-bold mt-2 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 before:content-['+']"
                                            type="button"
                                            onClick={() => setInputColumn([...inputColumn, ''])}
                                        >
                                            Add New Column
                                        </button>
                                        <button
                                            className="bg-darkPurple w-full rounded-full font-plus-jakarta mb-6 text-white active:bg-lightPurple font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleSaveChanges}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*overlay*/}
                        <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
                    </div>
                ) : null}
        </div>
    );
};

export default ColumnField;

import React, {useState} from 'react';
import iconAdd from '../assets/icon-add-task-mobile.svg';
import plusIcon from '../assets/icon-add-task-mobile.svg';

const ColumnField = () => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div className={`${'relative w-full flex-grow grid place-items-center bg-almostWhite dark:bg-darkGray'}`}>
            <div className="w-72 md:w-80 flex items-center justify-center flex-col gap-y-2 text-center">
                <p className="font-lg font-bold text-veryLightGray font-plus-jakarta-sans">
                This board is empty. Create a new column to get started.
                </p>
                <button
                    className="py-3 px-5 text-white text-plus-jakarta-sans font-bold text-base bg-darkPurple rounded-full flex gap-x-1 items-center hover:bg-lightPurple"
                >
                    <img className="h-2 mt-1" src={iconAdd} alt="" />
                Add New Column
                </button>
            </div>
        </div>
    );
};

export default ColumnField;

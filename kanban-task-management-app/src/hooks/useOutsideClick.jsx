import { useEffect } from 'react';

/**
 * Custom hook that listens for clicks outside of the referenced element and executes the provided handler.
 * @param {React.RefObject} ref - The ref object attached to the DOM element you want to monitor for outside clicks.
 * @param {Function} handler - The function to execute when an outside click is detected.
 */
const useOutsideClick = (ref, handler) => {
    useEffect(() => {
        // Function to be called when clicking outside of the ref element
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        };
        
        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);
        
        // Clean up
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, handler]); // Ensure the effect runs again if the ref or handler changes
};

export default useOutsideClick;

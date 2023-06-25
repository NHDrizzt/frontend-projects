import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [isScreenLarge, setIsScreenLarge] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsScreenLarge(window.innerWidth > 768);
        };
        
        window.addEventListener('resize', handleResize);
        handleResize();
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return isScreenLarge;
};

export default useScreenSize;

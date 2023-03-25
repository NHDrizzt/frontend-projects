import React, {useEffect, useState} from 'react';


export const ThemeContext = React.createContext([]);

const ThemeProvider = (props) => {
    const [Theme, setTheme] = useState(false);
    useEffect(() => {
    
    }, [setTheme]);

    return (
        <ThemeContext.Provider value={[Theme, setTheme]}>
            <div className={Theme ? 'dark' : ''}>
                {props.children}
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

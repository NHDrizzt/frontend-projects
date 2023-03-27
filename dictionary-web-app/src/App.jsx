import React, {useEffect, useState} from "react"
import "./index.css"
import HeaderComponent from "./components/header.component";
import InputComponent from "./components/input.component";
import TitleComponent from "./components/title.component";
import DescriptionComponent from "./components/description.component";
import FooterComponent from "./components/footer.component";
import {BiLoaderAlt} from "react-icons/bi";
import ThemeProvider from "./components/theme.provider";


const App = () => {
    
    const [Theme, setTheme] = useState('dark');
    const [Loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(false);
    }, []);
    
    const changeTheme = (newTheme) => setTheme(newTheme);
    return (
        <>
            <div className="content">
                <ThemeProvider >
                    <HeaderComponent />
                    <InputComponent />
                    <TitleComponent />
                    {
                        Loading ?
                            <div className="loading">
                                <h2>Loading... </h2>
                                <BiLoaderAlt className='icon-loading'/>
                            </div>
                            : null
                    }
                    <DescriptionComponent />
                    
                    <FooterComponent />
                </ThemeProvider>
            </div>
        </>
    )
}

export default App

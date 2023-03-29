import React, {useEffect, useState} from "react"
import "./index.css"
import HeaderComponent from "./components/header.component";
import InputComponent from "./components/input.component";
import TitleComponent from "./components/title.component";
import DescriptionComponent from "./components/description.component";
import FooterComponent from "./components/footer.component";
import {BiLoaderAlt} from "react-icons/bi";
import ThemeProvider from "./components/theme.provider";
import NoDataComponent from "./components/nodata.component";


const App = () => {
    const [Loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const inputFetch = async (value) => {
        console.log(value)
            try {
                const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
                const fetchResult = await fetch(URL).then((response) => response.json())
                setData(fetchResult)
            } catch (e) {
                console.log(e.message)
            }
    }
    
    const findWord = () => data.find((item) => item.hasOwnProperty('word')).word
    const findPhonetic = () => {
        const hasPhonetic = data.find(item => item.hasOwnProperty('phonetic'))
        if (hasPhonetic) {
            return hasPhonetic.phonetic;
        } else {
            const hasPhonetics = data.find(item => item.hasOwnProperty('phonetics'))
            if (hasPhonetics) {
                const hasText = hasPhonetics.phonetics.find(item => item.hasOwnProperty('text'))
                if (hasText) {
                    return hasText.text
                }
            }
        }
        return '';
    }
    
    const findUrl = () =>  {
        const hasData = data.find((item) => item.hasOwnProperty('sourceUrls'))
        if (hasData) return hasData
        return ''
    }
    
    const findPhonetics = () => data.find((item) => item.hasOwnProperty('phonetics'))
    
    useEffect(() => {
        setLoading(false);
    }, []);
    
    return (
        <>
            <div className="content">
                <ThemeProvider>
                    <HeaderComponent />
                    <InputComponent inputFetch={inputFetch}/>
                    {data.length > 0 ? (
                        <div>
                            <TitleComponent word={findWord()} phonetic={findPhonetic()} phonetics={findPhonetics()}/>
                            {Loading && (
                                <div className="loading">
                                    <h2>Loading... </h2>
                                    <BiLoaderAlt className='icon-loading'/>
                                </div>
                            )}
                            {data.map((data, index) => (
                                <DescriptionComponent key={index} data={data}/>
                            ))}
                            <FooterComponent findUrl={findUrl()}/>
                        </div>
                    ) : (
                        <NoDataComponent data={data}/>
                    )}
                </ThemeProvider>
            </div>
        </>
    )
}

export default App

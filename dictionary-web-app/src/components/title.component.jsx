import React, {useContext, useEffect, useRef} from "react";
import "../css/TitleComponent.css";
import {ThemeContext} from "./theme.provider";

const TitleComponent = ({ word, phonetic, phonetics }) => {
    const [Theme] = useContext(ThemeContext)
    
    function readWordMp3() {
        return phonetics.phonetics.find((item) => item.hasOwnProperty("audio"))
            .audio;
    }
    
    function useAudio(src) {
        const audioRef = useRef();
        
        useEffect(() => {
            audioRef.current = new Audio(src);
        }, [src]);
        
        function play() {
            audioRef.current.play();
        }
        
        return play;
    }
    
    function SVGWithAudio({ onClick }) {
        const playAudio = useAudio(readWordMp3());
        
        function handleClickAudio() {
            playAudio();
            onClick();
        }
        
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                viewBox="0 0 75 75"
                onClick={handleClickAudio}
            >
                <g fill="#A445ED" fillRule="evenodd">
                    <circle cx="37.5" cy="37.5" r="37.5" opacity="0.25" />
                    <path d="M29 27v21l21-10.5z" fill="" />
                </g>
            </svg>
        );
    }
    
    return (
        <div className="title-container">
            <div className={!Theme ? 'main-text-dark' : 'main-text'}>
                <h1 >{word}</h1>
                <h3>{phonetic}</h3>
            </div>
            <div className="image-button">
                <SVGWithAudio onClick={() => {}} />
            </div>
        </div>
    );
};

export default TitleComponent;

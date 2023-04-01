import React, {useEffect, useState} from 'react'
import {LogoMobile} from "./LogoMobile";
import {LogoDesktop} from "./LogoDesktop";

export const Header = () => {
    const [shouldRender, setShouldRender] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setShouldRender(window.innerWidth > 600);
        };
        
        window.addEventListener('resize', handleResize);
        handleResize();
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <header>
            {
                !shouldRender ? <LogoMobile /> : <LogoDesktop />
            }
        </header>
    )
}


import React from "react";
import {Link} from "react-router-dom";

export const Sidebar = ({ showSideBar, setShowSideBar }) => {
    function toggleCloseSideBar() {
        setShowSideBar(!showSideBar);
    }
    
    
    
    return (
        <aside className={`sidebar ${showSideBar ? "open" : "close"}`}>
            <div className="wrap-sidebar">
                <div className="close-sidebar">
                    <svg
                        onClick={toggleCloseSideBar}
                        width="22"
                        height="23"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19.839.54L21.96 2.66 13.12 11.5l8.84 8.839-2.121 2.121-8.84-8.84-8.838 8.84L.04 20.34l8.838-8.84L.04 2.662 2.16.54 11 9.378 19.839.54z"
                            fill="#FBFCFE"
                            fillRule="evenodd"
                        />
                    </svg>
                </div>
                <nav className="nav-sidebar">
                    <Link style={{ color: "inherit", textDecoration: 'none' }} to="/pricing"><a>Pricing</a></Link>
                    <Link style={{ color: "inherit", textDecoration: 'none' }} to="/about"><a>About</a></Link>
                    <Link style={{ color: "inherit", textDecoration: 'none' }} to="/contact" ><a>Contact</a></Link>
                </nav>
                <Link style={{ textDecoration: 'none' }} to="/contact" ><button>Schedule a demo</button></Link>
            </div>
        </aside>
    );
};

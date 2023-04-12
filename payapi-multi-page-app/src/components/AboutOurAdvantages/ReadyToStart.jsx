import React from 'react';

function ReadyToStart(props) {
    return (
        <div className="wrapper ready-to-start-section">
            <div className="ready-text">
                <h2>Ready to start?</h2>
            </div>
            <div className="fields">
                <input type="text" placeholder="Enter email address"/>
                <button>Schedule a Demo</button>
            </div>
        </div>
    );
}

export default ReadyToStart;

import React from 'react';
import './sass/index.scss'
import {Header} from "./components/Header/Header";
import {ScheduleDemo} from "./components/ScheduleDemo/ScheduleDemo";
const App = () => {
    return (
        <div>
            <Header />
            <ScheduleDemo />
        </div>
    );
};

export default App;

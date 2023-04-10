import React from 'react';
import './sass/index.scss'
import {Header} from "./components/Header/Header";
import {ScheduleDemo} from "./components/ScheduleDemo/ScheduleDemo";
import {WorkWith} from "./components/WorkWith/WorkWith";
const App = () => {
    return (
        <div>
            <Header />
            <ScheduleDemo />
            <WorkWith />
        </div>
    );
};

export default App;

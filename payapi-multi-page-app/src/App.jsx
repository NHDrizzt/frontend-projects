import React from 'react';
import './sass/index.scss'
import {Header} from "./components/Header/Header";
import {ScheduleDemo} from "./components/ScheduleDemo/ScheduleDemo";
import {WorkWith} from "./components/WorkWith/WorkWith";
import {Advantages} from "./components/AboutOurAdvantages/Advantages";
const App = () => {
    return (
        <div>
            <Header />
            <ScheduleDemo />
            <WorkWith />
            <Advantages />
        </div>
    );
};

export default App;

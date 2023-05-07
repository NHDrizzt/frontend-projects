import React from 'react';
import './sass/index.scss'
import {Header} from "./components/MainPage/Header/Header";
import {ScheduleDemo} from "./components/MainPage/ScheduleDemo/ScheduleDemo";
import {WorkWith} from "./components/MainPage/WorkWith/WorkWith";
import {Advantages} from "./components/MainPage/AboutOurAdvantages/Advantages";
import Footer from "./components/MainPage/Footer/Footer";


const App = () => {
    return (
        <div>
            <Header />
            <ScheduleDemo />
            <WorkWith />
            <Advantages />
            <Footer />
        </div>
    );
};

export default App;

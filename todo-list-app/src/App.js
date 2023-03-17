import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import Body from "./body/Body";
import {useState} from "react";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;

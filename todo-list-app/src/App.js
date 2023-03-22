import './App.css';
import Body from "./components/Body";
import {DataList} from "./components/DataList";

function App() {
  return (
    <div className="App">
        <DataList>
          <Body/>
        </DataList>
    </div>
  );
}

export default App;

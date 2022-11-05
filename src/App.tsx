import React from 'react';
import './App.css';
import {ScoreboardWithCounter} from "./Components/ScoreboardWithCounter";
import {Settings} from "./Components/Settings";

function App() {
    return (
        <React.StrictMode>
            <div className={"App"}>
                <ScoreboardWithCounter/>
                <Settings/>
            </div>
        </React.StrictMode>
    )
}

export default App;

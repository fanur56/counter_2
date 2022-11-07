import React from 'react';
import './App.css';
import {ScoreboardWithCounter} from "./Components/ScoreboardWithCounter";
import {Settings} from "./Components/Settings";
import {Provider} from "react-redux";
import {store} from "./Components/store";

function App() {
    return (
        <Provider store={store}>
            <div className={"App"}>
                <ScoreboardWithCounter/>
                <Settings/>
            </div>
        </Provider>
    )
}

export default App;

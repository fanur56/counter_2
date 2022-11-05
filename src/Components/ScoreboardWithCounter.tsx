import React, {useState} from "react";
import {Scoreboard} from "./Scoreboard";
import {IncResetButton} from "./IncResetButton";

export const ScoreboardWithCounter = () => {

    const [count, setCount] = useState<number>(0)

    const incCounter = () => {
        setCount(count + 1)
    }

    const resetCounter = () => {
        setCount(0)
    }

    return (
        <div>
            <Scoreboard count={count}/>
            <IncResetButton incCounter={incCounter}
                    resetCounter={resetCounter}
                    count={count}/>
        </div>
    )
}
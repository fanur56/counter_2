import React from 'react';
import s from './IncResetButton.module.css'

type ButtonPropsType = {
    incCounter: () => void
    resetCounter: () => void
    count: number
}

export const IncResetButton = (props: ButtonPropsType) => {

    const incCounterHandler = () => {
        props.incCounter()
    }

    const resetCounterHandler = () => {
        props.resetCounter()
    }

    return (
        <>
            <div className={s.container}>
                <button className={s.button}
                        disabled={props.count >= 5}
                        onClick={incCounterHandler}>inc
                </button>
                <button className={s.button}
                        disabled={props.count === 0}
                        onClick={resetCounterHandler}>reset
                </button>
            </div>
        </>
    )
}

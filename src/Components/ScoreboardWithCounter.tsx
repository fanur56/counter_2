import React from "react";
import s from "./ScoreboardWithCounter.module.css";
import {AppRootStateType} from "./store";
import {useDispatch, useSelector} from "react-redux";
import {incCounterAC, resetCounterAC, StateType} from "./settings-reducer";

export const ScoreboardWithCounter = () => {

    let values = useSelector<AppRootStateType, StateType>(state => state.values)
    const dispatch = useDispatch()

    const incCounter = () => {
        dispatch(incCounterAC())
    }

    const resetCounter = () => {
        dispatch(resetCounterAC())
    }

    return (
        <div>
            <div className={s.board}>
                <h3 className={values.count === values.maxValue ? s.h3 : ''}>
                    {(values.maxValue - values.startValue) > 0 ? values.count : "Incorrect values"}
                </h3>
            </div>
            <div className={s.container}>
                <button className={s.button}
                        disabled={values.count >= values.maxValue}
                        onClick={incCounter}>inc
                </button>
                <button className={s.button}
                        disabled={values.count === values.startValue}
                        onClick={resetCounter}>reset
                </button>
            </div>
        </div>
    )
}
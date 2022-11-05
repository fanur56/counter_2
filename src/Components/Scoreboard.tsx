import React from 'react';
import s from './ScoreboardWithCounter.module.css'

type ScoreboardPropsType = {
    count: number
}

export const Scoreboard = (props: ScoreboardPropsType) => {
    return (
        <div className={s.board}>
            <h3 className={props.count === 5 ? s.h3 : ''}>{props.count}</h3>
        </div>

    )
}

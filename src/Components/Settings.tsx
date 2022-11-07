import s from "./Settings.module.css";
import {useDispatch} from "react-redux";
import {setSettingAC} from "./settings-reducer";
import {ChangeEvent, useState} from "react";


export const Settings = () => {

    let dispatch = useDispatch()

    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)

    const onMaxValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+event.currentTarget.value)
    }
    const onStartValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+event.currentTarget.value)
    }

    const setValuesToStore = () => {
        dispatch(setSettingAC(maxValue, startValue))
    }
    return (
        <div className={s.container}>
            <div className={s.container_input}>
                <div className={s.item}>
                    <span>max value:</span> <input type={"number"}
                                                   value={maxValue}
                                                   onChange={onMaxValueChangeHandler}/>
                </div>
                <div className={s.item}>
                    <span>start value:</span> <input type={"number"}
                                                     value={startValue}
                                                     onChange={onStartValueChangeHandler}/>
                </div>
            </div>
            <button className={s.button} onClick={setValuesToStore}>set</button>
        </div>
    )
}
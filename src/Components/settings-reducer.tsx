type setSettingAT = ReturnType<typeof setSettingAC>
type incCounterAT = ReturnType<typeof incCounterAC>
type resetCounterAT = ReturnType<typeof resetCounterAC>
type ActionsType = setSettingAT & incCounterAT & resetCounterAT

export type StateType = {
    maxValue: number
    startValue: number
    count: number
}

const initialState: StateType = {
    maxValue: 5,
    startValue: 0,
    count: 0
}

export const settingsReducer = (state = initialState, action: ActionsType ): StateType => {
    switch (action.type) {
        case "SET_SETTING":
            return {
                ...state,
                maxValue: action.maxValue,
                startValue: action.startValue,
                count: action.startValue
            }
        case "INC_COUNTER":
            return {
                ...state,
                count: state.count + 1
            }
        case "RESET_COUNTER":
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}

export const setSettingAC = (maxValue: number, startValue: number) => {
    return {type: "SET_SETTING", maxValue, startValue}
}
export const incCounterAC = () => {
    return {type: "INC_COUNTER"}
}
export const resetCounterAC = () => {
    return {type: "RESET_COUNTER"}
}


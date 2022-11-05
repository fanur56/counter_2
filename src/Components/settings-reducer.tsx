type setSettingAT = ReturnType<typeof setSettingAC>
type ActionsType = setSettingAT

export type StateType = {
    maxValue: number
    startValue: number
}

const initialState: StateType = {
    maxValue: 5,
    startValue: 0
}

export const settingsReducer = (state = initialState, action: ActionsType):any => {
    switch (action.type) {
        case "SET-SETTING":
            return {
                ...state,
                maxValue: action.maxValue,
                startValue: action.startValue
            }
    }
}

export const setSettingAC = (maxValue:number, startValue:number) => {
    return {type: "SET-SETTING", maxValue, startValue}
}
import {settingsReducer} from "./settings-reducer";
import {combineReducers, legacy_createStore} from "redux";

const rootReducer = combineReducers({
    values: settingsReducer
})

export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
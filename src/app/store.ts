import {applyMiddleware, combineReducers, createStore} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {TasksReducer} from "../features/TodolistsList/TasksReducer";
import {todolistReducer} from "../features/TodolistsList/todolistReducer";
import {AppReducer} from "../features/TodolistsList/AppReducer";
import thunk from "redux-thunk";


let rootReducer = combineReducers({
    tasks: TasksReducer,
    todolists: todolistReducer,
    app: AppReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<rootReducerType> = useSelector

// this is, to get store from console in browser
// @ts-ignore
window.store = store

//creating store and put inside of it rootReducer
export const store=createStore(rootReducer, applyMiddleware(thunk))

// there was in old times
// let isError = useSelector<AppRootStateType, string | null>(state => state.app.isError)
// but now we are using useAppSelector - no need to use typing AppRootStateType

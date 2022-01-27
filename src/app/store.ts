import {applyMiddleware, combineReducers, createStore} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {TasksReducer} from "../features/TodolistsList/tasks-reducer";
import {todolistReducer} from "../features/TodolistsList/todolist-reducer";
import {AppReducer} from "../features/TodolistsList/app-reducer";
import thunk from "redux-thunk";
import {authReducer} from "../features/Login/auth-reducer";


let rootReducer = combineReducers({
    tasks: TasksReducer,
    todolists: todolistReducer,
    app: AppReducer,
    auth: authReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<RootReducerType> = useSelector

// this is, to get store from console in browser
// @ts-ignore
window.store = store

//creating store and put inside of it rootReducer
export const store=createStore(rootReducer, applyMiddleware(thunk))

// there was in old times
// let isError = useSelector<AppRootStateType, string | null>(state => state.app.isError)
// but now we are using useAppSelector - no need to use typing AppRootStateType

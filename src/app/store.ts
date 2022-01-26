import {applyMiddleware, combineReducers, createStore} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {TasksReducer} from "../features/TodolistsList/TasksReducer";


// here we put our reducers
let rootReducer = combineReducers({
    //nickname: name of reducer
    tasks: TasksReducer,
    //insert: NextReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<rootReducerType> = useSelector

// component
// there was in old times
// let isError = useSelector<AppRootStateType, string | null>(state => state.app.isError)
// but now we are using useAppSelector - no need to use typing AppRootStateType

//@ts-ignore
window.store = store

//creating store and put inside of it rootReducer
export const store=createStore(rootReducer)
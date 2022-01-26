// how mush states - count of reducers = each of the separate page
//                   (state: this is our tasks, bundle key-action)

import {TaskType, TodoType} from "../../types/types";
import {getTodolistsType, todolistsAPI} from "../../api/todolists-api";
import {Dispatch} from "redux";

export const todolistReducer = (state: Array<TodoType>, action: generalType) => {

    switch (action.type) {
        case "SET-TODOS": {
            return action.todos.map(m => {
                return ({...m, filter: 'all'})
            })
        }
        default:
            return state
    }
}


export const setTodosAC = (todos: Array<getTodolistsType>) => {
    return {
        type: 'SET-TODOS', todos
    } as const
}


export const setTodosThunk = () => (dispatch: Dispatch) => {
    todolistsAPI.getTodolists()
        .then((res) => {
            console.log(res.data)
            dispatch(setTodosAC(res.data))
        })
}



// bundle key-type for actions
type generalType =
    | SetTodosActionType

type SetTodosActionType = ReturnType<typeof setTodosAC>
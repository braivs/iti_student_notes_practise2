import {resultCodes, TodoType} from "../../types/types";
import {getTodolistsType, todolistsAPI} from "../../api/todolists-api";
import {Dispatch} from "redux";
import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./app-reducer";
import {AxiosError} from "axios";
import {handleServerAppError} from "../../utils/error-utils";

export const todolistReducer = (state: Array<TodoType>, action: ActionType) => {
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
export const addTodolistAC = (todolist: TodolistType) =>
    ({type: 'ADD-TODOLIST', todolist} as const)

export const setTodosThunk = () => (dispatch: Dispatch) => {
    todolistsAPI.getTodolists()
        .then((res) => {
            console.log(res.data)
            dispatch(setTodosAC(res.data))
        })
}

export const addTodolistTC = (title: string) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(setAppStatusAC('loading'))
        todolistsAPI.createTodolist(title)
            .then((res) => {
                if (res.data.resultCode === resultCodes.success) {
                    dispatch(addTodolistAC(res.data.data.item))
                    dispatch(setAppStatusAC('succeeded'))
                } else {
                    handleServerAppError(res.data, dispatch)
                }
            })
            .catch((error) => {
                handleServerAppError(error, dispatch)
            })
    }
}

type SetTodosActionType = ReturnType<typeof setTodosAC>
type AddTodoListActionType = ReturnType<typeof addTodolistAC>
type ActionType =
    | SetTodosActionType
    | AddTodoListActionType
    | SetAppStatusActionType
    | SetAppErrorActionType
type ThunkDispatch = Dispatch<ActionType>
export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
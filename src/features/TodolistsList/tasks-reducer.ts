// how mush states - count of reducers = each of the separate page
//                   (state: this is our tasks, bundle key-action)

import {TaskType} from "../../types/types";
import {Dispatch} from "redux";
import {todolistsAPI} from "../../api/todolists-api";
import {RootReducerType} from "../../app/store";
import {AxiosError} from "axios";

// creating initial state - that is necessary
// putting data inside, to draw something
let initialState: Array<TaskType> = [
    {id: '1', title: 'HTML&СSS', isDone: false},
    {id: '2', title: 'JS', isDone: false},
    {id: '3', title: 'ReactJS', isDone: false},
    {id: '4', title: 'Rest API', isDone: false},
    {id: '5', title: 'GraphQL', isDone: false},
]

//                          state=initialState
export const TasksReducer = (state: Array<TaskType> = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "REMOVE-TASK":
            // [...destructuring state.filter(id come to us from actionCreator)
            return [...state.filter(t => t.id !== action.id)]
        default:
            return state
    }
}

export const fetchTasksAC = (tasks: Array<TaskType>, todolistId: string) => {
    return {
        type: 'SET-TASKS', tasks, todolistId
    } as const
}

export const removeTaskAC = (id: string, todolistId: string) => {
    // get id from dispatch
    return {
        type: 'REMOVE-TASK', // necessary field-key for switch
        id: id // id - that we get from dispatch
    } as const //'REMOVE TASK' - is not a string! - this is 'REMOVE-TASK'
}

export const setErrorAC = (err: string) => {
    return {
        type: 'SET-ERROR', err
    } as const
}

//creating our thunk
export const removeTaskACThunk = (id: string, todolistId: string) => (dispatch: Dispatch) => {
    dispatch(removeTaskAC(id, todolistId))
}

export const fetchTasksThunk = (todolistId: string) => (dispatch: Dispatch) => {
    todolistsAPI.getTasks(todolistId)
        .then((res) => {
            dispatch(fetchTasksAC(res.data.items, todolistId))
        })
}

export const updateTaskTC = (todolistId: string, taskId: string) =>
    (dispatch: Dispatch, getState: () => RootReducerType) => {
        // getStata() - that way we can get access to the state, that may be usefully while updating
        let model: any = getState()
        console.log(getState())
        todolistsAPI.updateTask(todolistId, taskId, model)
            .then((res) => {
            })
    }

// new thunkCreator
export const removeTaskThunk = (payload: { todolistId: string, taskId: string }) => (dispatch: Dispatch) => {
    todolistsAPI.deleteTask(payload)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(removeTaskAC(payload.taskId, payload.todolistId))
            }
        })

}

export const addTaskTC = (title: string, todoListID: string) => (dispatch: Dispatch<ActionTypes>) => {
    todolistsAPI.createTask(todoListID, title)
        .then(res => {
            // if (res.data.resultCode === 0) { // there was a problem that does not understand: 0 - this good or bad
            if (res.data.resultCode === resultCodes.success) { // become

            } else {

            }
        })
        .catch((err: AxiosError) => { // typing will tell what to write
            debugger // in debugger mode we can see what field to show
            dispatch(setErrorAC(err.message)) //dispatching incoming error
        })
}

//for each action need type-here we get type automatically
//note: ACTION, not the function returned ACTION
type removeTaskActionType = ReturnType<typeof removeTaskAC>
type setErrorActionType = ReturnType<typeof setErrorAC>

// bundle key-type for actions
type ActionTypes =
    | removeTaskActionType
    | setErrorActionType



enum resultCodes {
    success = 0,
    error = 1,
    captcha = 10
}


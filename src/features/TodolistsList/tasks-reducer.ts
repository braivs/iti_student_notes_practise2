// how mush states - count of reducers = each of the separate page
//                   (state: this is our tasks, bundle key-action)

import {TaskType} from "../../types/types";
import {Dispatch} from "redux";
import {todolistsAPI} from "../../api/todolists-api";
import {RootReducerType} from "../../app/store";

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
export const removeTaskThunk = (payload: {todolistId: string, taskId: string}) => (dispatch: Dispatch) => {
    todolistsAPI.deleteTask(payload)
        .then((res)=>{
            if (res.data.resultCode === 0) {
                dispatch(removeTaskAC(payload.taskId, payload.todolistId))
            }
        })

}

// bundle key-type for actions
type ActionTypes =
    | removeTaskActionType
//for each action need type-here we get type automatically
//note: ACTION, not the function returned ACTION
type removeTaskActionType = ReturnType<typeof removeTaskAC>


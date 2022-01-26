// how mush states - count of reducers = each of the separate page
//                   (state: this is our tasks, bundle key-action)

import {TaskType} from "../../types/types";
import {Dispatch} from "redux";

// creating initial state - that is necessary
// putting data inside, to draw something
let initialState: Array<TaskType> = [
    { id: '1', title: 'HTML&СSS', isDone: false},
    { id: '2', title: 'JS', isDone: false},
    { id: '3', title: 'ReactJS', isDone: false},
    { id: '4', title: 'Rest API', isDone: false},
    { id: '5', title: 'GraphQL', isDone: false},
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

export const removeTaskAC = (id: string) => {
    // get id from dispatch
    return {
        type: 'REMOVE-TASK', // necessary field-key for switch
        id: id // id - that we get from dispatch
    } as const //'REMOVE TASK' - is not a string! - this is 'REMOVE-TASK'
}

//creating our thunk
export const removeTaskACThunk = (id: string) => (dispatch: Dispatch) => {
    dispatch(removeTaskAC(id))
}


// bundle key-type for actions
type ActionTypes =
    | removeTaskActionType
//for each action need type-here we get type automatically
//note: ACTION, not the function returned ACTION
type removeTaskActionType = ReturnType<typeof removeTaskAC>


// how mush states - count of reducers = each of the separate page
//                   (state: this is our tasks, bundle key-action)

import {TodoType} from "../../types/types";

export const todolistReducer = (state: Array<TodoType>, action: generalType) => {
    switch (action.type) {
        case "REMOVE-TODO":
        case "REMOVE-TODO2":
        case "REMOVE-TODO3":
            // [...destructuring state.filter(id come to us from actionCreator)
            return [...state.filter(t => t.id !== action.id)]

        default:
            return state
    }
}

// bundle key-type for actions
type generalType =
    | removeTaskActionType
    | ReturnType<typeof removeTodolistAC2>
    | ReturnType<typeof removeTodolistAC3>
//for each action need type-here we get type automatically
//note: ACTION, not the function returned ACTION
type removeTaskActionType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (id: number) => {
    // get id from dispatch
    return {
        type: 'REMOVE-TODO', // necessary field-key for switch
        id: id // id - that we get from dispatch
    } as const //'REMOVE TASK' - is not a string! - this is 'REMOVE-TASK'
}

export const removeTodolistAC2 = (id: number) => {
    // get id from dispatch
    return {
        type: 'REMOVE-TODO2', // necessary field-key for switch
        id: id // id - that we get from dispatch
    } as const //'REMOVE TASK' - is not a string! - this is 'REMOVE-TASK2'
}

export const removeTodolistAC3 = (id: number) => {
    // get id from dispatch
    return {
        type: 'REMOVE-TODO3', // necessary field-key for switch
        id: id // id - that we get from dispatch
    } as const //'REMOVE TASK' - is not a string! - this is 'REMOVE-TASK3'
}

export const addTodolistAC = (todolist: string) =>
    ({type: 'ADD-TODOLIST', todolist} as const)







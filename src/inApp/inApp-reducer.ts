import {TaskType} from "../types/types";
import {getTodolistsType} from "../api/todolists-api";

const initialState = {}

export const inAppReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        default:
            return state
    }
}

export const ActionCreatorForFunction1 = (value: string) => {
    return {
        type: 'AC-FOR-FUNC1', value
    } as const
}

export const ActionCreatorForFunction2 = (value: string) => {
    return {
        type: 'AC-FOR-FUNC2', value
    } as const
}

type ActionTypes = any
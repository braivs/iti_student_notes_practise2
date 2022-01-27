import {RequestStatusType} from "../../types/types";

const initialState: InitialStateType = {
    isError: null,
}

export const AppReducer = (state: any = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'APP/SET-ERROR':
            return {...state, isError: action.isError}
        default:
            return state
    }
}

export const setAppErrorAC = (isError: string | null) => ({type: 'APP/SET-ERROR', isError} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>;
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>;
type ActionTypes =
    | ReturnType<typeof setAppErrorAC>
    | SetAppErrorActionType
export type InitialStateType = {
    isError: string | null
}
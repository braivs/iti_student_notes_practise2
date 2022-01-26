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

type ActionTypes = ReturnType<typeof setAppErrorAC>

export type InitialStateType = {
    isError: string | null
}
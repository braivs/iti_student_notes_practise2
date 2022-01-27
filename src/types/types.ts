export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TodoType = {
    id: number
    title: string
    filter: boolean
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed' | string

export enum resultCodes {
    success = 0,
    error = 1,
    captcha = 10
}
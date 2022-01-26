//"Classic typing" - as need to do
export function TodolistClassicTipisation(props: PropsType) {}
//"fast typing" - no NEED to so this :) but need to understand
export function TodolistFastTipisation(props: { title: string, tasks: Array<TaskType>}) {}

type PropsType = {
    title: string
    tasks: Array<TaskType>
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
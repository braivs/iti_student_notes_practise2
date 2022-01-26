import axios from "axios";

// we need instance for base settings and avoid us from
// useless cloning of base settings in each response
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/', //we take it from API docs
    withCredentials: true, // it is connected with setting of security this current API
    // here speaking about using cookies is requests our Todolist and this API
    headers: {
        'api-key': '36c47461-cd5e-48a2-a6d3-2dd87b11456f'
        // the key we do not created by ourselves, about using it is written in API docs
    }
})

// api
export const todolistsAPI = {
    getTodolists() {
        return instance.get<Array<getTodolistsType>>('todo-lists');
        // those we get https://social-network.samuraijs.com/api/1.1/todo-lists
    },
    // we transfer here todolistID,
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`);
    },
}

// types
export type getTodolistsType = {
    id: string
    title: string
    addedDate: string
    order: number
}

type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}

export type TaskType = {
    description: string
    title: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
    isDone: boolean
}

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}
export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}
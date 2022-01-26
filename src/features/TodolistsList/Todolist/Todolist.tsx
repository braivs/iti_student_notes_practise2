import React, {useCallback} from 'react';
//import from regular style
import './Todolist.css'
//import from encapsulated style
import styles from './Todolist.module.css'
import {TaskType} from "../../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../../app/store";

export function Todolist(props: PropsType) {
    // we paste here useSelector, and later we are drawing state without any props
    let tasks = useSelector<rootReducerType, Array<TaskType>>(state => state.tasks)
    const dispatch = useDispatch()

    // props dependency
    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id)
    }, [props])

    return(
        <div>

        </div>
    )
}

type PropsType = {
    addTask: (title: string, id: number) => void
    id: number
}
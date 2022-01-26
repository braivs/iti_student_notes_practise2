import React from 'react';
//import from regular style
import './Todolist.css'
//import from encapsulated style
import styles from './Todolist.module.css'
import {TaskType} from "../../../types/types";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../../app/store";

export function Todolist(props: PropsType) {
    // we paste here useSelector and at 28 line drawing state without any props
    let tasks = useSelector<rootReducerType, Array<TaskType>>(state => state.tasks)
    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {
                    tasks.map(t => <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={() => {
                            props.removeTask(t.id)
                        }}>x
                        </button>
                    </li>)
                }
            </ul>

        </div>
    )
}

type PropsType = {
    title: string
    removeTask: (id: number) => void
}
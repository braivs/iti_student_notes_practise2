import React from 'react';
//import from regular style
import './Todolist.css'
//import from encapsulated style
import styles from './Todolist.module.css'
import {TaskType} from "../../../types/types";

export function Todolist(props: PropsType) {
    // drawing props
    return(
        <div>
            {/*applying from regular style*/}
            <div className={'MyStyle'}>{props.title}</div>
            {/*applying from encapsulated style*/}
            <div className={styles.MyStyle}>{props.title}</div>
            {/*applying TWO style throw template strings (Ё button) */}
            <div className={`${styles.MyStyle1} ${styles.MyStyle2}`}>{props.title}</div>
        </div>
    )
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
}
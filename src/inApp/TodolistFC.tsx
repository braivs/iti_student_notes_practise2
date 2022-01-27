import React from 'react';
import './TodolistFC.css'
import {InputComponent} from "./InputComponent";

export function TodolistFC(props: PropsType) {
    const onAllClickHandler = () => props.changeFilter('all')

    return (
        <div>
            <h3>{props.title}</h3>
            {/* input in the seperate component*/}
            <InputComponent addTask={props.addTask} />
        </div>
    )
}

type PropsType = {
    addTask: () => void
    id: string
    title: string
    changeFilter: (value: string) => void
}
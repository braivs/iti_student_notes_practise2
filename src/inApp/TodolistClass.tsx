import React from 'react';
import './TodolistFC.css'
import {InputComponent} from "./InputComponent";

export class TodolistFC extends React.Component<PropsType> {
    render() {
        // we call properties and methods throw this, and respectively this.props
        const onAllClickHandler = () => this.props.changeFilter('all')

        return (
            <div>
                <h3>{this.props.title}</h3>
                {/* input in the seperate component*/}
                <InputComponent addTask={this.props.addTask}/>
            </div>
        )
    }
}

type PropsType = {
    addTask: () => void
    id: string
    title: string
    changeFilter: (value: string) => void
}
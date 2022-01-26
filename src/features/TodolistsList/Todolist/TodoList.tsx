import React from 'react';

export function Todolist(props: PropsType) {
    // drawing props
    return(
        <div>
            <div>{props.title1}</div>
            <div>{props.title2}</div>
            <div>{props.title3}</div>
            <div>{props.title4}</div>
        </div>
    )
}

//using destructuring                         ...and other props
export function TodolistDest({title1, title2, ...props}: PropsType) {
    // drawing props
    return(
        <div>
            <div>{title1}</div> {/*respectively directly without props*/}
            <div>{title2}</div> {/*respectively directly without props*/}
            <div>{props.title3}</div> {/*and here ... other props*/}
            <div>{props.title4}</div> {/*and here ... other props*/}
        </div>
    )
}

const props = {id: 10, age: 20}
const {id: a, age: b} = props // give the name to variable-> will be a,b

type PropsType = {
    title1: string
    title2: string
    title3: string
    title4: string
}
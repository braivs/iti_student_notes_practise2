import React from 'react';

export const InputComponent = (props: PropsType) => {
    return <div onClick={props.addTask}>

    </div>
}

type PropsType = {
    addTask: () => void
}
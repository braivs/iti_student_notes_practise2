import React from 'react';
import './App.css';
import {removeTaskAC} from "./features/TodolistsList/TasksReducer";
import {useDispatch} from "react-redux";
import {Todolist} from "./features/TodolistsList/Todolist/Todolist";
import {useAppSelector} from "./app/store";

function App() {
    // We are not needing to get state here now
    // and then to put it by props
    // so, we are transferring it to Todolist.tsx

    let dispatch = useDispatch() // we be usefully here

    function removeTask(id: number) {
        dispatch(removeTaskAC(id))
    }

    let isError = useAppSelector<string | null>(state => state.app.isError)


    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                // tasks={tasks}
                removeTask={removeTask}
            />

        </div>
    );
}

export default App;

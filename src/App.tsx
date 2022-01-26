import React from 'react';
import './App.css';
import {removeTaskAC} from "./features/TodolistsList/TasksReducer";
import {removeTodolistAC} from "./features/TodolistsList/todolistReducer";
import {useDispatch, useSelector} from "react-redux";
import {Todolist} from "./features/TodolistsList/Todolist/TodoList";
import {rootReducerType} from "./app/store";
import {TaskType} from "./types/types";

function App() {
    //creating dispatch - one for all useSelector
    let dispatch = useDispatch()
    //task - now we will get our state
    //           <from store, typing of our state>(we take state from needed reducer)
    let tasks = useSelector<rootReducerType, Array<TaskType>>(state => state.tasks)

    function removeTask(id: number) {
        dispatch(removeTaskAC(id))
        //one function can use multiple reducers:
        dispatch(removeTodolistAC(id))
    }


    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasks}
                removeTask={removeTask}
            />

        </div>
    );
}

export default App;

import React, {useReducer} from 'react';
import './App.css';
import {removeTaskAC, TasksReducer} from "./features/TodolistsList/TasksReducer";
import {removeTodolistAC, todolistReducer} from "./features/TodolistsList/todolistReducer";

function App() {
    //[state, dispatchState] = useReducer(connecting tasksReducer...
    //[any name, any name]...
    let [tasks, tasksDispatch] = useReducer(TasksReducer, [
        { id: 1, title: 'HTML&СSS', isDone: false},
        { id: 2, title: 'JS', isDone: false},
        { id: 3, title: 'ReactJS', isDone: false},
        { id: 4, title: 'Rest API', isDone: false},
        { id: 5, title: 'GraphQL', isDone: false},
    ])

    //as much state - as reducers
    let [todolist, todolistDispatch] = useReducer(todolistReducer, [
            {id: 1, title: '10', filter: false}
        ])


    function removeTask(id: number) {
        // here was with useState:
        // let filteredTasks = tasks.filter(t => t.id != id)
        // setTasks(filteredTasks)
        //--------------------------------------------------
        //and now with TasksReducer
        tasksDispatch(removeTaskAC(id))
        // dispatch(calls ActionCreator(in which we put all necessary))
        //--------------------------------------------------
        //one function can use multiple reducers:
        todolistDispatch(removeTodolistAC(id))

    }


    return (
        <div className="App">



        </div>
    );
}

export default App;

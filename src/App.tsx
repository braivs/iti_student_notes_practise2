import React, {useEffect} from 'react';
import './App.css';
import {removeTaskAC, removeTaskACThunk} from "./features/TodolistsList/tasks-reducer";
import {useDispatch} from "react-redux";
import {Todolist} from "./features/TodolistsList/Todolist/Todolist";
import {useAppSelector} from "./app/store";
import {setTodosThunk} from "./features/TodolistsList/todolist-reducer";

function App() {
    // We are not needing to get state here now
    // and then to put it by props
    // so, we are transferring it to Todolist.tsx

    let dispatch = useDispatch() // we be usefully here

    useEffect(() => {
        // at the begging I am giving you advice to ring out server

        // todolistAPI.getTodolists()
        //      .then((res)=>{
        //          console.log(res.data)
        //              })

        // and then dispatch thunkCreator
        dispatch(setTodosThunk())
    }, [])

    function removeTask(id: string) {
        dispatch(removeTaskACThunk(id))
    }

    let isError = useAppSelector<string | null>(state => state.app.isError)


    return (
        <div className="App">


        </div>
    );
}

export default App;

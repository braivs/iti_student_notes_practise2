import React, {useCallback, useEffect} from 'react';
import './App.css';
import {removeTaskACThunk} from "./features/TodolistsList/tasks-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "./app/store";
import {setTodosThunk} from "./features/TodolistsList/todolist-reducer";

function App() {
    // We are not needing to get state here now
    // and then to put it by props
    // so, we are transferring it to TodolistFC.tsx

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

    // calling thunkCreator
    const removeTask = useCallback(function removeTask(id: string, todolistId: string) {
        let payload = {todolistId: todolistId, taskId: id}
        dispatch(removeTaskACThunk(id, todolistId))
    }, [dispatch])

    let isError = useAppSelector<string | null>(state => state.app.isError)


    return (
        <div className="App">


        </div>
    );
}

export default App;

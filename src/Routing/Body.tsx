import React from 'react'
import {Route, Routes } from 'react-router-dom'
import {Page1} from "./Page1";
import {Page2} from "./Page2";

export const Body = () => {
    return (
        <div>
            <Routes> {/* wrapping Routes (in previous version there was Switch )*/}
                {/* by the link={'/page1'} call the component={<Page1/>} */}
                <Route path={'/page1'} element={<Page1/>}/>
                <Route path={'/page2'} element={<Page2/>}/>
            </Routes>
        </div>
    )
}
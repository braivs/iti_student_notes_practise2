import React from 'react'
import {NavLink, Routes} from "react-router-dom";

export const Navigation = () => {
    return (
        <div className={'Navigation'}>
            {/*navigation buttons: by click at the button go to={'/page1'}*/}
            <div>
                <button><NavLink to={'/page1'}>page1</NavLink></button>
            </div>
            <div>
                <button><NavLink to={'/page2'}>page2</NavLink></button>
            </div>
        </div>
    )
}
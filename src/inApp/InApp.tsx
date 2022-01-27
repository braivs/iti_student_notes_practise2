import React from 'react'
import {connect} from "react-redux";
import {PresentationComponent} from "./PresentationComponent";
import {ActionCreatorForFunction1, ActionCreatorForFunction2} from "./inApp-reducer";

let mapStateToProps = (state: any) => {
    return {
        // here will be all necessary variables
        // for presentation component: InitialState and etс.
        myState: state.myState,
        myValue: 'I`m value'
        //we are in the object, so:
        //key:value
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        //here will be all necessary functions
        //for presentation component
        function1: (value: any) => {
            dispatch(ActionCreatorForFunction1(value))
        },
        function2: (value: any) => {
            dispatch(ActionCreatorForFunction2(value))
        }
        //we are in the object, so:
        //key:value
    }
}

const NameOfOurComponent = connect(mapStateToProps, mapDispatchToProps)(PresentationComponent)
export default NameOfOurComponent
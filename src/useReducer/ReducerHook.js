import { useState,useReducer } from "react";


const Reducer=(state,action)=>{
    switch (action.type){
     case 'INCREMENT':
        return{count:state.count+1,setText:state.setText}
     case 'showText':
        return{count:state.count,setText: !state.setText}
default:
    return state

    }
}
function ReducerHook() {

    const [state,dispatch]=useReducer(Reducer,{
        count:0,
        setText:true
    })
   

    return (<>
    <div>
        <h2>{state.count}</h2>
        <button type="button" onClick={
           ()=>{
           dispatch({type:'INCREMENT'})
           dispatch({type:'showText'})
           }
        }>count</button>
        {state.setText&&<p>This is the text</p>}
    </div>
    </>  );
}

export default ReducerHook;
import React, { useState } from 'react';

//Whenever the state will be updated react will re-render the component without reloading the entire page
const StateHook= ()=> {

    const [name,setName]=useState("Ajay")
    return ( <>
   <div>
    <input type="text" value={name} placeholder="type something..." onChange={(e)=>{
       const newValue=e.target.value;
       setName(newValue)
    }}></input>
    <h1>{name}</h1>
   </div>
    </> );
}

export default StateHook ;
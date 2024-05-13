
import React, { useState,useMemo} from 'react';


//UseMemo it is used to better the performance optimization
/*
Skipping expensive recalculations
Skipping re-rendering of components
Memoizing a dependency of another Hook
Memoizing a function
it will either return an already stored value from the last render (if the dependencies haven’t changed), 
or call calculateValue again, and return the result that calculateValue has returned
*/
const Memo = () => {

    const [countOne,setCountOne]=useState(0);
    const [countTwo,setCountTwo]=useState(0)

const IncrementOne=()=>{
  
    return setCountOne(countOne+1)
}
const IncrementTwo=()=>{
    return setCountTwo(countTwo+1)
}
const isEven=useMemo(()=>{
    let i=0;
    while(i<2000000000){
        i++;
    }
    return countOne%2===0;
},[countOne])
    return ( <>
   <div>
<button type='button' onClick={IncrementOne}>countOne - {countOne}</button>
<span>{isEven?"Even" : "odd"}</span>
<button type='button' onClick={IncrementTwo} >countTwo - {countTwo}</button>

   </div>
    
    </> );
}
 
export default Memo;
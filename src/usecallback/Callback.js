

import React, { useState,useCallback} from 'react';
import Child from './Child';
const Callback = () => {

    const [countOne,setCountOne]=useState(0);
    const [countTwo,setCountTwo]=useState([])

const IncrementOne=()=>{
  
    return setCountOne(countOne+1)
}
const func=useCallback(()=>{
    console.log('hello world')
},countTwo)
    
    return ( <>
   <div>
    <Child countTwo={countTwo} func={func}/>
<button type='button' onClick={IncrementOne}>countOne - {countOne}</button>


   </div>
    
    </> );
}
 
export default Callback;


import React,{useRef} from 'react';

function Ref() {

    const inputRef=useRef(0)

const onclick=()=>{
    inputRef.current.focus()
    console.log(inputRef.current.value);
}

    return (<div>
<input type='text' placeholder='Enter something....' ref={inputRef}></input>
<button type='button' onClick={onclick}>Enter</button>
    </div>  );
}

export default Ref;
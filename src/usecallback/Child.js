import React, { memo } from 'react';


const Child = ({countTwo,setCountTwo}) => {
    console.log("child component");
    return (<>
    <h2>Child component</h2>
    </>  );
}
 
export default memo(Child);
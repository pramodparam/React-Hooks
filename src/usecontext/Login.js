import React,{useContext} from 'react';
import { AppContext } from './Context';

function Login() {

    const {setUserName}=useContext(AppContext)
    return ( <div>
  <input onChange={(e)=>{
    setUserName(e.target.value)
  }}>
  </input>

    </div> );
}

export default Login;
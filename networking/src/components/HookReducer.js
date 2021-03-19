import React, { useReducer } from 'react';

const initialstate = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialstate   
        default:
            return state         
    }
}
const HookReducer = (props) => {

    const [count,setCount] = useReducer(reducer,initialstate)
       return(
           <div>
               Count - {count}<br></br>
              <button onClick={()=>{setCount('increment')}}>increment</button>
              <button onClick={()=>{setCount('decrement')}}>decrement</button>
              <button onClick={()=>{setCount('reset')}}>reset</button>
           </div>
         )
      }


export default HookReducer ;
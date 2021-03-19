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
const MultipleUseReducer = (props) => {

    const [count,setCount] = useReducer(reducer,initialstate)
    const [count2,setCount2] = useReducer(reducer,initialstate)
       return(
           <div>
               <div>
                    Count - {count}<br></br>
                    <button onClick={()=>{setCount('increment')}}>increment</button>
                    <button onClick={()=>{setCount('decrement')}}>decrement</button>
                    <button onClick={()=>{setCount('reset')}}>reset</button>
              </div>
              <div>
                    Count2 - {count2}<br></br>
                    <button onClick={()=>{setCount2('increment')}}>increment</button>
                    <button onClick={()=>{setCount2('decrement')}}>decrement</button>
                    <button onClick={()=>{setCount2('reset')}}>reset</button>
              </div>
           </div>
         )
      }


export default MultipleUseReducer ;
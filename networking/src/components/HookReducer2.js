import React, { useReducer } from 'react';

const initialstate = {
    firstcounter : 0,
    secondcounter : 10
}
const reducer = (state,action) => {
    switch(action.type){
        case 'increment':
            return {...state,firstcounter : state.firstcounter+action.value}
        case 'decrement':
            return {...state,firstcounter : state.firstcounter-action.value}
        case 'increment2':
            return {...state,secondcounter : state.secondcounter+action.value}
        case 'decrement2':
            return {...state,secondcounter : state.secondcounter-action.value}    
        case 'reset':
            return initialstate   
        default:
            return state         
    }
}
const HookReducer2 = (props) => {

    const [count,setCount] = useReducer(reducer,initialstate)
       return(
           <div>
               Count - {count.firstcounter}<br></br>
               Count - {count.secondcounter}<br></br>
              <button onClick={()=>{setCount({type:'increment',value:1})}}>increment</button>
              <button onClick={()=>{setCount({type:'decrement',value:1})}}>decrement</button>
              <button onClick={()=>{setCount({type:'increment',value:5})}}>increment5</button>
              <button onClick={()=>{setCount({type:'decrement',value:5})}}>decrement5</button>
              <button onClick={()=>{setCount({type:'reset'})}}>reset</button><br/>
              <button onClick={()=>{setCount({type:'increment2',value:1})}}>increment</button>
              <button onClick={()=>{setCount({type:'decrement2',value:1})}}>decrement</button>
           </div>
           
         )
      }


export default HookReducer2 ;
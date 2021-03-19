import React, { useContext } from 'react';
import { CountContext } from '../../App';


const ComponentF = (props) => {
    const context = useContext(CountContext)
       return(
           <div>
                Component F
                Count - {context.count}<br></br>
                <button onClick={()=>{context.setCount('increment')}}>increment</button>
                <button onClick={()=>{context.setCount('decrement')}}>decrement</button>
                <button onClick={()=>{context.setCount('reset')}}>reset</button>
           </div>
         )
      }


export default ComponentF ;
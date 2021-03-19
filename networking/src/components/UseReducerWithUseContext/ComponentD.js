import React, { useContext } from 'react';
import { CountContext } from '../../App';


const ComponentD = (props) => {
    const context = useContext(CountContext)
       return(
           <div>
                Component D
                Count - {context.count}<br></br>
                <button onClick={()=>{context.setCount('increment')}}>increment</button>
                <button onClick={()=>{context.setCount('decrement')}}>decrement</button>
                <button onClick={()=>{context.setCount('reset')}}>reset</button>
           </div>
         )
      }


export default ComponentD ;
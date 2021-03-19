import React from 'react';
import useCounter from '../hooks/useCounter';


const UseCount = (props) => {
    const [count,increment,decrement,reset] = useCounter(0,9)
       return(
           <div>
              Count-{count}
              <button onClick={increment}>Increment</button>
              <button onClick={decrement}>Decrement</button>
              <button onClick={reset}>Reset</button>
           </div>
         )
      }


export default UseCount ;
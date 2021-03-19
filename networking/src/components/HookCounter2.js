import React,{useState} from 'react';


const HookCounter2 = (props) => {
    const initialcount = 0
    const [count,setCount] = useState(initialcount)
       return(
           <div>
              Count: {count}
              <button onClick={() => setCount(initialcount)}>Reset</button>
              <button onClick={() => setCount(count+1)}>Next</button>
              <button onClick={() => setCount(count-1)}>Previos</button>
           </div>
         )
      }


export default HookCounter2 ;
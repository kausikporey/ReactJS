import React, { useState,useEffect } from 'react';


const HookuseEffect = (props) => {
    const [count,setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
       return(
           <div>
              <button onClick={() => {setCount(count+1)}}>Click {count}</button>
           </div>
         )
      }


export default HookuseEffect ;
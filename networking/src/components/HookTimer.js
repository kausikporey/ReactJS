import React, { useEffect, useRef, useState } from 'react';


const HookTimer= (props) => {
    const [timer,setTimer] = useState(0)
    const intervalRef = useRef(null)

    const incrementTimer = () =>{
        console.log('Increment Timer')
        setTimer(prev => prev+1)
    }
    useEffect(() => {
        console.log('Use Effect')
        intervalRef.current = setInterval(incrementTimer,1000)
        return () =>{
            clearInterval(intervalRef.current)
        }
    },[])
       return(
           <div>
              <h1>Timer - {timer}</h1>
              <button onClick={()=>{clearInterval(intervalRef.current)}}>Clear Timer</button>
           </div>
         )
      }


export default HookTimer;
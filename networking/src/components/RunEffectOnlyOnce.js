import React, { useEffect, useState } from 'react';


const RunEffectOnlyOnce = (props) => {
    const [position,setPosition] = useState({x:0,y:0})
    const logMousePosition = (e) =>{
        console.log("Mouse Move")
        setPosition({x:e.clientX,y:e.clientY})
    }
    useEffect((e) => {
        console.log('Use Effect')
        window.addEventListener('mousemove',logMousePosition)

        return () => {
            console.log('Component Unmounted')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])  //works like componentDidMount in class component this will run only once in the whole life cycle
       return(
           <div>
              <h1>X - {position.x} and Y - {position.y}</h1>
           </div>
         )
      }


export default RunEffectOnlyOnce ;
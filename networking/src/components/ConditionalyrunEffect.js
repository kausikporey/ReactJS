import React, { useEffect, useState } from 'react';


const ConditionalyrunEffect = (props) => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=>{
            console.log('Updating')
            document.title = count
    },[count])
       return(
           <div>
               <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
               <button onClick={()=>setCount(count+1)}>Click {count}</button>
           </div>
         )
      }


export default ConditionalyrunEffect ;
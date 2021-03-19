import React, { useMemo, useState } from 'react';


const UseMemo = (props) => {
    const [counterone,setCounterone] = useState(0)
    const [countertwo,setCountertwo] = useState(0)

    const incrementone = () =>{
        setCounterone(counterone+1)
    }

    const incrementtwo = () =>{
        setCountertwo(countertwo+1)
    }

    const isEven = useMemo(() =>{
            let i=0
            while(i<2000000000){i++} 
            return counterone%2 == 0
    },[counterone])

       return(
           <div>
               <button onClick={incrementone}>Count One - {counterone}</button>
               <span>{isEven ? 'Even': 'Odd'}</span>
               <button onClick={incrementtwo}>Count Two - {countertwo}</button>
           </div>
         )
      }


export default UseMemo ;
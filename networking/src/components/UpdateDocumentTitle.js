import React, { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';


const UpdateDocumentTitle = (props) => {
    const [counter,setCounter] = useState(0)
    useDocumentTitle(counter)
       return(
           <div>
              <h1>Counter - {counter}</h1>
              <button onClick={() => {setCounter(counter+1)}}>incrementCounter</button>
           </div>
         )
      }


export default UpdateDocumentTitle ;
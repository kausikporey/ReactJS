import React,{useState} from 'react';
import useInput from '../hooks/useInput';


const UseInput = (props) => {
    const [firstname,setFirstName,resetfname] = useInput('')
    const [lastname,setLastName,resetlname] = useInput('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(`${firstname} and ${lastname}`)
        resetfname()
        resetlname()
    }
       return(
           <div>
              <form onSubmit={handleSubmit}>
                    <input type="text" {...setFirstName}/>
                    <input type="text" {...setLastName}/>
                    <button type="submit">Submit</button>
              </form>
           </div>
         )
      }


export default UseInput ;
import React,{useState} from 'react';


const HookObject = (props) => {
    const [name,setName] = useState({firstname:'',lastname:''})
    
       return(
           <div>
              <input type="text" value={name.firstname} onChange={e => setName({...name,firstname : e.target.value})} />
              <h1>First Name : {name.firstname}</h1>
              <input type="text" value={name.lastname} onChange={e => setName({...name,lastname : e.target.value})} />
              <h1>Last Name : {name.lastname}</h1>
           </div>
         )
      }


export default HookObject ;
import React,{useState} from 'react';


const HookArray = (props) => {
    const [items,setItem] = useState([])
    const additem = () => {
        setItem([...items,{
            id : items.length,
            value : Math.floor(Math.random() * 10) + 1
        }])
    }
       return(
           <div>
               <button onClick={additem}>Add Number</button>
              <ul>
                  {
                      items.map(item => <li key={item.id}>{item.value}</li>)
                  }
              </ul>
           </div>
         )
      }


export default HookArray ;
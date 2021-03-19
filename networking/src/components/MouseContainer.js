import React,{useState} from 'react';
import RunEffectOnlyOnce from './RunEffectOnlyOnce';


const MouseContainer = (props) => {
    const [display,setDisplay] = useState(true)
       return(
           <div>
              <button onClick={() => setDisplay(!display)}>Toogle</button>
                {display ? <RunEffectOnlyOnce/> : null}
           </div>
         )
      }


export default MouseContainer;
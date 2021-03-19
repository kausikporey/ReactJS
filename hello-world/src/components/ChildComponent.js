import React from 'react';

const ChildComponent=(props) => {
   return (
       <div>
           <button onClick={props.eventHandler}>Greet Parent</button>
           <button onClick={() => props.eventHandler('child')}>Greet Parent</button>     
       </div>
   )
}

export default ChildComponent;
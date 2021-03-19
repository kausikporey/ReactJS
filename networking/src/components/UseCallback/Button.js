import React from 'react';


const Button = (props) => {
    console.log(`This is Button-${props.children}`)
       return(
           <div>
              <button onClick={props.handleclick}>{props.children}</button>
           </div>
         )
      }


export default React.memo(Button) ;
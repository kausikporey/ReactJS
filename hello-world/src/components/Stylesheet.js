import React from 'react';
import './myStyle.css';

const Stylesheet = (props) => {
    let cls = props.primary ? "primary" : '';
       return(
           <div>
              <h1 className={`${cls}`,'text'}>Stylesheet</h1>
           </div>
         )
      }


export default Stylesheet; 
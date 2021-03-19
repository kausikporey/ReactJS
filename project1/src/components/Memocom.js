import React from 'react';


const Memocom = (props) => {
    console.log('Renderning memo component')
       return(
           <div>
              <h1>Memo Component {props.name}</h1>
           </div>
         )
      }


export default React.memo(Memocom) ;
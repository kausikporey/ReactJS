import React from 'react';


const FragmentDemo = (props) => {
       return(
           ///to avoid the extra div tag we use the react fragment.
           <React.Fragment>   
              <h1>Hello Dear</h1>   
              <p>This is a paragraph to describe react fragment.</p>
           </React.Fragment>
         )
      }


export default FragmentDemo;
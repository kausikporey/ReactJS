import React from 'react';

const heading = {
    fontSize:'72px',
    color:'blue'
}

const InlineCss = (props) => {
       return(
           <div>
              <h1 style={heading} className='error'>InlineCss</h1>
           </div>
         )
      }


export default InlineCss; 
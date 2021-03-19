import React from 'react';


const Title = (props) => {
    console.log('This is title')
       return(
              <h1>This is the Title</h1>
       )
      }


export default React.memo(Title) ;
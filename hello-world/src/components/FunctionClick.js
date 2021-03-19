import React from 'react';

const FunctionClick = (props) => {
    const clickhandler = () => {
        console.log("Button Clicked");
    }
   return (
       <div>
            <button onClick={clickhandler}>Click</button>
       </div>     
   )
}

export default FunctionClick;
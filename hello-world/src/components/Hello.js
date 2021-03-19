import React from 'react';

//Method:1
// const Hello = () => {
//     return(
//         <div class="hello">
//         <h1 id="hello">Hello World</h1>
//         </div>
//     )
// }


//Method:2
const Hello = () => {
    return (React.createElement('div',{className:'hello'},React.createElement('h1',{id:'hello'},'Hello World')));   //In background JSX convert the upper code into this
}


export default Hello;
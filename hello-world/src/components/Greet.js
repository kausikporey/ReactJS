import React from 'react';

//Method:1
// const Greet = (props) => {
//    return (
//        <div>
//             <h1>Name : {props.name} & Surname : {props.surname} </h1>
//             {props.children} 
//        </div>     
//    )
// }

//Method:2
const Greet = (props) => {
    const {name,surname} = props;
    return (
        <div>
             <h1>Name : {name} & Surname : {surname} </h1>
             {props.children} 
        </div>     
    )
 }

export default Greet;

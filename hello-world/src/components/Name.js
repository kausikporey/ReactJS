import React from 'react';


const Name = (props) => {
    const names = ['Kausik','Subrata','Sayan','Sayan']
    const nameList =  names.map((name,index) => <h2 key={index}>{name}</h2>)  //unique key value is must for the list of elements creation
       return  <div>{nameList}</div>
      }


export default Name;
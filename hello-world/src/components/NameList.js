import React from 'react';


const NameList = ({person}) => {
       return(
           <div>
              <h1>I am {person.name}.I am {person.age} years old and I know {person.skill}</h1>
           </div>
         )
      }


export default NameList;
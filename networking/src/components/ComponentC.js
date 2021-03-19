import React from 'react';
import {UserContext} from '../App.js'


const ComponentC= (props) => {
       return(
           <div>
               <UserContext.Consumer>
                   {
                       user => {
                        return <h1>Component C {user}</h1>
                       }
                   }
               </UserContext.Consumer>
              
           </div>
         )
      }


export default ComponentC;
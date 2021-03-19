import React, { useContext } from 'react';
import { ChannelContext, UserContext } from '../App';
import ComponentC from './ComponentC';


const ComponentB = (props) => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
       return(
           <div>
               <h1>{user} - {channel}</h1>
              <ComponentC/>
           </div>
         )
      }


export default ComponentB ;
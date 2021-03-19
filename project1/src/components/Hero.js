import React from 'react';


const Hero = (props) => {
    if(props.heroname == 'Joker'){
        throw new Error('Not a hero')
    }
       return(
           <div>
              <h1>{props.heroname}</h1>
           </div>
         )
      }


export default Hero ;
import React, { useState } from 'react';


const useInput = (initialvalue) => {
       const [value,Setvalue] = useState(initialvalue)
        const reset = () => {
            Setvalue(initialvalue)
        }
        const bind = {
            value,
            onChange : e => {
                Setvalue(e.target.value)
            }
        }
        return [value,bind,reset]
      }


export default useInput ;
import React, { useCallback, useState } from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';


const Parent = (props) => {
    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(20000)

    const incrementsalary = useCallback(() => {
        setSalary(salary+1000)
    },[salary])
    const incrementage = useCallback(() => {
        setAge(age+1)
    },[age])
       return(
           <div>
              <Title/>
              <Count text="Age" count={age}/>
              <Button handleclick={incrementage}>increment age</Button>
              <Count text="salary" count={salary}/>
              <Button handleclick={incrementsalary}>incremant salary</Button>
           </div>
         )
      }


export default React.memo(Parent) ;
import React,{Component} from 'react';

const Forwardref = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type="text" ref = {ref}></input>
        </div>
    )
})


export default Forwardref;
import React,{Component} from 'react';
import Forwardref from './Forwardref';


class ForwardredParent extends Component{
    constructor(){
        super()
        this.inputRef = React.createRef()
    }

    clickhandler = () =>{
        this.inputRef.current.focus()
    }
       render(){
           return (<div>
                       <Forwardref ref = {this.inputRef}/>
                       <button onClick={this.clickhandler}>Focus</button>
                   </div>
               )
        }
 }


export default ForwardredParent;
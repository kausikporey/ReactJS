import React,{Component} from 'react';


class Refsdemo extends Component{
    constructor(){
        super()
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }
    clickhandler = () =>{
        alert(this.inputRef.current.value)
    }
       render(){
           return (<div>
                       <input type = "text" ref={this.inputRef}></input>
                       <button onClick = {this.clickhandler}>Click</button>
                   </div>
               )
        }
 }


export default Refsdemo;
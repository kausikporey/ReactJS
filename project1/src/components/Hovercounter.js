import React,{Component} from 'react';


class Hovercounter extends Component{
    constructor(){
        super()
        this.state = {hover:0}
    }

    incrementHover = () =>{
        this.setState({hover : this.state.hover += 1})
    }
       render(){
           const {hover} = this.state
           return (<div>
                       <button onMouseOver={this.incrementHover}>Hover {hover} times</button>
                   </div>
               )
        }
 }


export default Hovercounter;
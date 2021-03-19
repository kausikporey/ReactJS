import React,{Component} from 'react';


class Regcomponent extends Component{
       render(){
           console.log('Regular component')
           return (
                       <h1>Regular Component {this.props.name}</h1>
               )
        }
 }


export default Regcomponent;
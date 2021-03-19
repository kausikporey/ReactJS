import React,{PureComponent} from 'react';


class Purecomponent extends PureComponent{
       render(){
           console.log('Pure component')
           return (
                       <h1>Pure Component  {this.props.name}</h1>
               )
        }
 }


export default Purecomponent;
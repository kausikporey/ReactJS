import React,{Component} from 'react';
import withCounter from './withCounter'


class Clickcounter extends Component{
       render(){
           return (<div>
                        <h1>{this.props.name}</h1>            
                        <h1>{this.props.count}</h1>
                       <button onClick = {this.props.method}>Click</button>
                   </div>
               )
        }
 }


export default withCounter(Clickcounter,20);
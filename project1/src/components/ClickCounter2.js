import React,{Component} from 'react';


class Clickcounter2 extends Component{
       render(){
           return (<div>
                       <button onClick = {this.props.clickcounter}>Click {this.props.count}</button>
                   </div>
               )
        }
 }


export default Clickcounter2;
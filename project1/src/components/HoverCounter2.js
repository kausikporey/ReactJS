import React,{Component} from 'react';


class Hovercounter2 extends Component{
       render(){
           return (<div>
                       <button onMouseOver={this.props.clickcounter}>Hover {this.props.count} times</button>
                   </div>
               )
        }
 }


export default Hovercounter2;
import React,{Component} from 'react';


class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {count : 0}
    }

    clickcounter = () => {
        this.setState(prevstate =>{
            return {count : prevstate.count + 1}
        })
        console.log(this.count)
    }

       render(){
           return (<div>
                       {this.props.render(this.state.count,this.clickcounter)}
                   </div>
               )
        }
 }


export default Counter;
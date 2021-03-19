import React,{Component} from 'react';


class Clickcounter extends Component{
    constructor(){
        super()
        this.state = {count : 0}
    }

    clickcounter = () => {
        this.setState(prevstate =>{
            return {count : prevstate.count + 1}
        })
        console.log(this.count)
    }
       render(){
           const {count} = this.state
           return (<div>
                       <button onClick = {this.clickcounter}>Click {count}</button>
                   </div>
               )
        }
 }


export default Clickcounter;
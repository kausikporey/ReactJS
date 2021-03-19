import React,{Component} from 'react';


class UserGreeting extends Component{
    constructor(){
        super();
        this.state = {isLoggedin:true}
    }
       render(){
        // Method:1  
        //    if(this.state.isLoggedin){
        //        return <h1>Hello Kausik</h1>
        //    }else{
        //        return  <h1>Hello Guest</h1> 
        //    }

        // Method:2
        // let message
        // if(this.state.isLoggedin){
        //     message = <h1>Hello Kausik</h1>
        // }else{
        //     message = <h2>Hello Guest</h2>
        // }
        // return <div>{message}</div>
        // }


        // Method:3
        // return(
        // this.state.isLoggedin ? 
        // <h1>Hello Kausik</h1> : <h1>Hello Guest</h1>
        // )

        //Method:3 Short circuit approach
        return  this.state.isLoggedin && <div>Hello Kausik</div>
 }
}


export default UserGreeting;
import React,{Component} from 'react';
import Input from './Input'


class Focusinput extends Component{
    constructor(props){
        super(props)
        this.comRef = React.createRef()
    }

    clickhandler = () => {
        this.comRef.current.focusInput()
    }

       render(){
           return (<div>
                       <Input ref = {this.comRef}/>
                       <button onClick={this.clickhandler}>Focus to child</button>
                   </div>
               )
        }
 }


export default Focusinput;
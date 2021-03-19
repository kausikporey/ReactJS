import React,{Component} from 'react';
import LifeCycleB from './LifeCycleB';


class LifeCycleA extends Component{
    constructor(props){
        console.log('LifeCycleA Constructor')
        super(props);
        this.state={name:'Kausik'}
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleAcomponentDidMount')  //this method is called when all its child component finish its rendering
    }

       render(){
        console.log('LifeCycleA render')
           return (
                   <div>
                       <h1>LifeCycleA</h1>
                       <LifeCycleB/>
                   </div>
               )
        }
 }


export default LifeCycleA;
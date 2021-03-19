import React,{Component} from 'react';
import LifeCycleBUpdate from './LifeCycleBUpdate';


class LifeCycleAUpdate extends Component{
    constructor(props){
        console.log('LifeCycleA Constructor')
        super(props);
        this.state={name:'Kausik'}
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')    //each re-render cycle the method is called
        return null
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidMount')   //in each re-render cycle the method is called once
    }

    changeState = () =>{
        this.setState({name:'Sayan'})
    }

       render(){
        console.log('LifeCycleA render')
           return (
                   <div>
                       <h1>LifeCycleA Update</h1>
                       <button onClick={this.changeState}>Change State</button>
                       <LifeCycleBUpdate/>
                   </div>
               )
        }
 }


export default LifeCycleAUpdate;
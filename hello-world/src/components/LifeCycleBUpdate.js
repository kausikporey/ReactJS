import React,{Component} from 'react';



class LifeCycleBUpdate extends Component{
    constructor(props){
        console.log('LifeCycleB Constructor')
        super(props);
        this.state={name:'Kausik'}
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidMount')
    }

       render(){
        console.log('LifeCycleB render')
           return (
                   <div>
                       <h1>LifeCycleB Update</h1>
                   </div>
               )
        }
 }


export default LifeCycleBUpdate;
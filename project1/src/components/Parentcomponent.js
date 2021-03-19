import React,{Component,PureComponent} from 'react';
import Memocom from './Memocom';
import Purecomponent from './purecomponent';
import Regcomponent from './Regcomponent';


class Parentcomponent extends Component{  //pure components check with prevstate and props with current state and props if there is no change then the components will not re-render
    //Parent component will re-render after each 2 second but memo component will re-render if props will change
    constructor(){
        super()
        this.state={name : 'Kausik'}
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({name:'Kausik Porey'})
        }, 10000);
    }
       render(){
           console.log('Parent Component')
           return (<>
                      {/* <Regcomponent name = {this.state.name}></Regcomponent>
                       <Purecomponent name = {this.state.name}></Purecomponent> */}
                       <Memocom name={this.state.name}/>
                   </>
               )
        }
 }


export default Parentcomponent;
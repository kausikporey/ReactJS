import React,{Component} from 'react';

const withCounter = (WrappedComponent,incrementCount) =>{
    class WithComponent extends Component{
        constructor(props){
            super(props)
            this.state = {count : 0}
        }
    
        clickcounter = () => {
            this.setState(prevstate =>{
                return {count : prevstate.count + incrementCount}
            })
            console.log(this.count)
        }


           render(){
               return <WrappedComponent count={this.state.count} method={this.clickcounter} {...this.props}/>
            }
     }
     return WithComponent;
}
export default withCounter;
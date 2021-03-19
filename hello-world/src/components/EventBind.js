import React,{Component} from 'react';

class EventBind extends Component{
        constructor(){
            super();
            this.state={message:"This is the initial state."}
            this.eventHandler = this.eventHandler.bind(this);
        }

        eventHandler(){
            this.setState({message:"State has been changed."})
            console.log(this.state.message);
        }

        // eventHandler = () =>{
        //     this.setState({message:"State has been changed."});
        // }

        render(){
            return (<div>
                        <h1>{this.state.message}</h1>
                        {/* <button onClick={this.eventHandler.bind(this)}>ClickToChangeState</button>
                        <button onClick={() => this.eventHandler()}>ClickToChangeState</button>
                        <button onClick={this.eventHandler}>ClickToChangeState</button> */}
                        <button onClick={this.eventHandler}>ClickToChangeState</button>
                    </div>
                )
        }
}

export default EventBind;
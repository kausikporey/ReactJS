import React,{Component} from 'react';

class ClassClick extends Component{
        eventHandler(){
            console.log('I am click')
        }
        render(){
            return (<div>
                        <button onClick={this.eventHandler}>ClickMe</button>
                    </div>
                )
        }
}

export default ClassClick;
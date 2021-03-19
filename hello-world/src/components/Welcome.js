import React,{Component} from 'react';


//Method:1
// class Welcome extends Component{
//         render(){
//             return (<div>
//                         <h1>Hello {this.props.name} & Actor {this.props.actor}</h1>
//                         {this.props.children}
//                     </div>
//                 )
//         }
// }


//Method:2
class Welcome extends Component{
    render(){
        const {name,actor}  = this.props;
        return (<div>
                    <h1>Hello {name} & Actor {actor}</h1>
                    {this.props.children}
                </div>
            )
    }
}

export default Welcome;
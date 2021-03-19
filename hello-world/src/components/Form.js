import React,{Component} from 'react';


class Form extends Component{
    constructor(props){
        super(props);
        this.state = {username :  '',topic:'react'}
    }
    handleUsername = (event) =>{
        this.setState({username : event.target.value})
    }
    handleTopic = (event) =>{
        this.setState({topic:event.target.value})
    }
    handleSubmit = (event) =>{
        alert(`Username : ${this.state.username} Topic : ${this.state.topic}`);
        event.preventDefault();
    }
       render(){
           return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                       <label>Username : </label>
                       <input type='text' value={this.state.username} onChange={this.handleUsername}></input>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.handleTopic}>
                            <option value='react'>React</option>
                            <option value='php'>PHP</option>
                            <option value='nodejs'>Node JS</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
               )
        }
 }


export default Form;
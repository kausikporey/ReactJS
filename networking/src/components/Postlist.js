import React,{Component} from 'react';
import axios from 'axios';


class Postlist extends Component{
    constructor(){
        super()
        this.state = {
            posts : [],
            errorMsg : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({posts : response.data})
        }).catch(error => {
            console.log(error);
            this.setState({errorMsg : 'Error Retriving data'})
        })
    }
       render(){
           const {posts,errorMsg} = this.state
           return (<div>
            
                    {
                        posts.length ? 
                        posts.map(post => <h1 key = {post.id}>{post.title}</h1>):
                        null
                    }
                    {
                        errorMsg ? <div>{errorMsg}</div> : null
                    }
               </div>
           )
        }
 }


export default Postlist;
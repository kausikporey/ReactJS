import axios from 'axios';
import React, { useEffect, useState } from 'react';


const DataFetching = (props) => {
    const [posts,setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response)
            setPost(response.data)
        })
        .catch((error) => {
            console.log(error)
            setPost(error)
        })
    },[])



       return(
           <div>
              <ul>
                  {
                      posts.map(post => (<h1 key={post.id}>{post.title}</h1>))
                  }
              </ul>
           </div>
         )
      }


export default DataFetching ;
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const IndividualDataFetching = (props) => {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then((response) => {
            console.log(response)
            setPost(response.data)
        })
        .catch((error) => {
            console.log(error)
            setPost(error)
        })
    },[idFromButtonClick])


    const handleClick = () => {
        setIdFromButtonClick(id)
    }

       return(
           <div>
              <input type="text" value={id} onChange={(e) => {setId(e.target.value)}}/>
              <button onClick={handleClick}>Click</button>
              <h1 key={post.id}>{post.title}</h1>
           </div>
         )
      }


export default IndividualDataFetching ;
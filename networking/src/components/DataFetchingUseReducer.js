import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';


const initialstate = {
    loading : true,
    post : [],
    error : ''
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading : false,
                post : action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading : false,
                error : 'something went wrong'
            }   
        default:
            return state     
    }
}

const DataFetching2 = (props) => {
    const [state,setPost] = useReducer(reducer,initialstate)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            console.log(response)
            setPost({type:'FETCH_SUCCESS',payload:response.data})
        })
        .catch((error) => {
            console.log(error)
            setPost({type:'FETCH_ERROR'})
        })
    },[])



       return(
           <div>
               {state.loading ? 'Loading' : state.post.title}
               {state.error ? state.error : null}
           </div>
         )
      }


export default DataFetching2 ;
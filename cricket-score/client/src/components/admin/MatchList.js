import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Link,Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
import {SERVER_URL,CLIENT_URL} from '../../URL';

const MatchList = () => {
    localStorage.setItem('matchDetails','')
    const [updateList,setUpdateList] = useState(false)
    const [matchList,setMatchList] = useState([])


    const onDelete = (id) => {
        const requestOne = axios.delete(`${SERVER_URL}/match/delete/${id}`)
        const requestTwo = axios.delete(`${SERVER_URL}/batsman/deleteByMatchId/${id}`)
        const requestThree = axios.delete(`${SERVER_URL}/bowler/deleteByMatchId/${id}`)
        axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            setUpdateList(true)
            const responseTwo = responses[1]
            const responseThree = responses[2]
        })).catch(errors => {
            console.log(errors)
        })
    }

    useEffect(() => {
        axios.get(`${SERVER_URL}/match/`)
        .then((res) => {
            setMatchList(res.data)
            setUpdateList(false)
        })
        .catch((err) => {
            console.log(err)
        })
    },[updateList])

    
    return (
        <>
                <div style={{display:'flex',justifyContent:'center',backgroundColor:'#FDD20EFF',alignItems:'center'}}>
                    <Link to="/addmatch" style={{marginBottom:'10px',marginTop:'10px'}}  className="btn btn-dark">Add Match</Link>
                </div>
                {
                    matchList.map((match) => {
                    return(
                    <div key={match._id}>
                        <div style={{display:'flex',backgroundColor:'#4831D4',borderBottom:'1px solid black',alignItems:'center'}}>
                            <Link to="/homepage" onClick={() => localStorage.setItem("selectedMatchDetails",JSON.stringify(match))} style={{textDecoration:'none',color:'#CCF381',fontSize:'20px'}}>
                                    <p style={{margin:'10px 0px 10px 0px',marginLeft:'30px'}}><b>{match.title} -- {match.team1} VS {match.team2}</b></p>
                            </Link>
                            <div style={{marginLeft:'auto',marginRight:'20px'}}>
                                <Link to="/addmatch" onClick={() => localStorage.setItem("matchDetails",JSON.stringify(match))} className="btn btn-info"><i className="fas fa-edit"></i></Link>
                                <button style={{marginLeft:'10px'}}     
                                    onClick={e =>
                                    window.confirm("Are you sure you wish to delete this item? All Batsman and Bowler related to this matchID will be deleted") &&
                                    onDelete(match._id)
                                } 
                                className="btn btn-danger">
                                <i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div> 
                    )   
                })
            }
        </>
    )
}

export default MatchList

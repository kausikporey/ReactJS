import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../../URL';
import {Link} from 'react-router-dom'


function Match() {
    const [matchList,setMatchList] = useState([])
    const a = {
        color:'#113d59',
        textDecoration:'none',
        fontSize:'18px',
        display:'block',
        letterSpacing:'2px',
        marginLeft:'10px'
    }

    useEffect(() => { 
        axios.get(`${SERVER_URL}/match`)
        .then((res) => setMatchList(res.data)) 
        .catch((err) => console.log(err))
    },[])


    return (
        <>
                {
                    matchList.map((match) => {
                        return(
                            <div key={match._id}>
                                <Link to="/currentplayer" onClick={() => localStorage.setItem('selectedMatchDetails',JSON.stringify(match))} style={a}>
                                    <span>{match.title}</span><br></br>
                                    <span>{match.team1}  <b>{match.team1Score.run}/{match.team1Score.wicket} ({match.team1Score.over})</b></span><br></br>
                                    <span>{match.team2}  <b>{match.team2Score.run}/{match.team2Score.wicket} ({match.team2Score.over})</b></span><br></br>
                                    <span style={{color:'#4a90e2'}}>Hoogly Won By 3 Wickets</span>
                                </Link>
                                <hr></hr>
                            </div>
                        )
                    })
                }
        </>
    )
}

export default Match;

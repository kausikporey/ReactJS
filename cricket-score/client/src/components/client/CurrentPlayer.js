import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {SERVER_URL} from '../../URL';
import { Link } from 'react-router-dom';


const CurrentPlayer = () => {
    const selectedMatchDetails = JSON.parse(localStorage.getItem('selectedMatchDetails'))
    const [batsmans,setBatsman] = useState([])
    const [bowlers,setBowler] = useState([])
    const [matchDetails,setMatchDetails] = useState({team1:'',team2:'',title:'',team1Score:{},team2Score:{},currentover:[]})
    const back = {
        display:'flex',
        alignItems:'center',
        backgroundColor:'#335A7B',
        color:'#fff',
        paddingLeft:'10px',
        marginBottom:'20px'
    }

    useEffect(() => {
        const requestOne = axios.get(`${SERVER_URL}/batsman/current/${selectedMatchDetails._id}`);
        const requestTwo = axios.get(`${SERVER_URL}/bowler/current/${selectedMatchDetails._id}`);
        const requestThree = axios.get(`${SERVER_URL}/match/getScoreById/${selectedMatchDetails._id}`);
        axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            setBatsman(responseOne.data)
            const responseTwo = responses[1]
            setBowler(responseTwo.data)
            const responseThree = responses[2]
            setMatchDetails(responseThree.data) 
        })).catch(errors => {
            console.log(errors)
        })
        setInterval(() => {
            const requestOne = axios.get(`${SERVER_URL}/batsman/current/${selectedMatchDetails._id}`);
            const requestTwo = axios.get(`${SERVER_URL}/bowler/current/${selectedMatchDetails._id}`);
            const requestThree = axios.get(`${SERVER_URL}/match/getScoreById/${selectedMatchDetails._id}`);
            axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
                const responseOne = responses[0]
                setBatsman(responseOne.data)
                const responseTwo = responses[1]
                setBowler(responseTwo.data)
                const responseThree = responses[2]
                setMatchDetails(responseThree.data) 
            })).catch(errors => {
                console.log(errors)
            })
        }, 5000);
    },[])


    return (
        <>
            <div style={back}>
                    <p style={{marginTop:'12px'}}>{matchDetails.title}</p>
            </div>
            <div style={{paddingLeft:'10px',paddingBottom:'30px'}}>
                <p style={{margin:0}}><b>{matchDetails.team1} - {matchDetails.team1Score.run}/{matchDetails.team1Score.wicket} ({matchDetails.team1Score.over})</b></p>
                <p style={{margin:0}}><b>{matchDetails.team2} - {matchDetails.team2Score.run}/{matchDetails.team2Score.wicket} ({matchDetails.team2Score.over})</b></p>
            </div>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <td className="col-md-6">Batting</td>
                        <td className="col-md-2">R(B)</td>
                        <td className="col-md-2">4s</td>
                        <td className="col-md-2">6s</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        batsmans.map((batsman) => {
                            return(
                                <tr key={batsman._id}>
                                    <td style={{color:'blue'}}>{batsman.playerName}{batsman.playerStatus == 'Stike'?'*':''}</td>
                                    <td><b>{batsman.score}</b>({batsman.ball})</td>
                                    <td>{batsman.four}</td>
                                    <td>{batsman.six}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <table className="table table-borderless">
                <thead>
                    <tr>
                        <td className="col-md-6">Bowling</td>
                        <td className="col-md-2">O</td>
                        <td className="col-md-2">R</td>
                        <td className="col-md-2">W</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        bowlers.map((bowler) => {
                            return(
                                <tr key={bowler._id}>
                                    <td style={{color:'blue'}}>{bowler.playerName}*</td>
                                    <td>{bowler.over}</td>
                                    <td>{bowler.run}</td>
                                    <td>{bowler.wicket}</td>
                                </tr>  
                            )
                        })
                    }
                </tbody>
            </table>
            <p style={{paddingLeft:'10px'}}>Current Overs : {matchDetails.currentover.map((ball) => ball+' ')}</p>
            <div style={{display:'flex',justifyContent:'center',marginTop:'50px',marginBottom:'50px'}}>
                <Link to="/scoredetails" style={{marginRight:'20px'}} className="btn btn-outline-success">
                    Details Score
                </Link>
                <Link to="/" className="btn btn-outline-info">
                    Home
                </Link>
            </div>
        </>
    )
}

export default CurrentPlayer;

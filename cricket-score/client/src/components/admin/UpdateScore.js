import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { SERVER_URL } from '../../URL';
const auth = require('./Authenticate')

const UpdateScore = (props) => {
    const selectedMatchDetails = JSON.parse(localStorage.getItem('selectedMatchDetails'));
    var team1 = selectedMatchDetails.team1;
    var team2 = selectedMatchDetails.team2;

    const initialValue = {
        run:'',
        wicket:'',
        over:'',
        currentball:'0'
    }
    const [score,setScore ] = useState(initialValue)
    const [dbScore,setDbScore ] = useState(initialValue)
    const [update,setUpdate] = useState(false)

    useEffect(() => {
        let team = props.team;
        let data = ''
        axios.get(`${SERVER_URL}/match/edit/${selectedMatchDetails._id}`)
        .then((res) => {
            setUpdate(false)
            if(team === 'team1'){
                    data = res.data.team1Score
                    setDbScore(data)
                    setScore({run:res.data.team1Score.run,wicket:res.data.team1Score.wicket,over:res.data.team1Score.over,currentball:res.data.currentover[res.data.currentover.length-1]})
            }else{
                    data = res.data.team2Score
                    setDbScore(data)
                    setScore({run:res.data.team2Score.run,wicket:res.data.team2Score.wicket,over:res.data.team2Score.over,currentball:res.data.currentover[res.data.currentover.length-1]})
            }
        })
        .catch((err) => {console.log(err)})
    },[update])

    const onChangehandler = (e) =>{
        const {name,value} = e.target;
        setScore({...score,
            [name]:value
        })
    }

    const onSubmithandler = (e) =>{
        e.preventDefault();
        axios.put(`${SERVER_URL}/match/score/${selectedMatchDetails._id}?team=${props.team}`,score)
        .then((res) => {
            console.log('Score Updated');
            setUpdate(true)
        })
        .catch((err) => {console.log(err)})
    }

    const clearCurrentOver = () => {
        axios.put(`${SERVER_URL}/match/clear/${selectedMatchDetails._id}`)
        .then((res) => {console.log('Current Over Cleared')})
        .catch((err) => {console.log(err)})
    }



    const back = {
        display:'flex',
        alignItems:'center',
        backgroundColor:'#335A7B',
        color:'#fff',
        paddingLeft:'10px'
    }

    return (
        <>
            <div style={back}>
                    <p style={{margin:'1% 0 1% 0'}}>{team1} VS {team2}</p>
            </div>
            <div style={{paddingLeft:'10px'}}>
                {props.team == 'team1' ? <p style={{margin:0}}><b>{team1} - {dbScore.run}/{dbScore.wicket} ({dbScore.over})</b></p> : ''}
                {props.team == 'team2' ? <p style={{margin:0}}><b>{team2} - {dbScore.run}/{dbScore.wicket} ({dbScore.over})</b></p> : ''}
            </div>
            <form onSubmit={onSubmithandler}>
                <div style={{display:'flex',justifyContent:'center',marginTop:'7%',marginBottom:'3%'}}>
                    <input style={{marginRight:'2%'}} value={score.run} onChange={onChangehandler} name="run" placeholder="Run"></input>
                    <input style={{marginRight:'2%'}} value={score.wicket} onChange={onChangehandler} name="wicket" placeholder="Wicket"></input>
                    <input style={{marginRight:'2%'}} value={score.over} onChange={onChangehandler} name="over" placeholder="Over"></input>
                </div>
                <div className="row" style={{display:'flex',justifyContent:'center'}}>
                    <input style={{marginRight:'2%'}} value={score.currentball} onChange={onChangehandler} name="currentball" placeholder="CurrentBall"></input>
                </div>
                <div style={{display:'flex',justifyContent:'center',marginTop:'10%'}}>
                    <button type="submit" className="btn btn-success">Update</button>
                </div>
            </form>
            <div style={{display:'flex',justifyContent:'center',marginTop:'10%',marginLeft:'25px'}}>
                <button style={{marginRight:'2%'}} onClick={clearCurrentOver} className="btn btn-warning" name="clear" >ClearCurrentOver</button>
            </div>
        </>
    )
}

export default UpdateScore;

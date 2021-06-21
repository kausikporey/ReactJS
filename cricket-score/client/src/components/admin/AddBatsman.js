import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { SERVER_URL } from '../../URL'

const AddBatsman = (props) => {
    var batsmanDetails = props.batsmanDetails
    var initialValue = {
        playerName:'',
        teamName:'team1',
        playerStatus:'Stike',
        score:'',
        ball:'',
        four:'',
        six:'',
    }

    const [batsman,SetBatsman] = useState(initialValue)

    useEffect(() => {
        if(batsmanDetails != ''){
            SetBatsman({...batsman,
                playerName:batsmanDetails.playerName,
                teamName:batsmanDetails.teamName,
                playerStatus:batsmanDetails.playerStatus,
                score:batsmanDetails.score,
                ball:batsmanDetails.ball,
                four:batsmanDetails.four,
                six:batsmanDetails.six
            })
        }else{
            SetBatsman(initialValue)
        }
    },[batsmanDetails])
    
    const onChangehandler = (e) =>{
        const {name,value} = e.target;
        SetBatsman({...batsman,
            [name]:value
        })
    }

    const onSubmithandler = (e) => {
        e.preventDefault();
        if(batsmanDetails == ''){
            const matchID = JSON.parse(localStorage.getItem('selectedMatchDetails'))._id
            axios.post(`${SERVER_URL}/batsman/create`,{
                matchID:matchID,
                playerName:batsman.playerName,
                teamName:batsman.teamName,
                playerStatus:batsman.playerStatus,
                score:batsman.score,
                ball:batsman.ball,
                four:batsman.four,
                six:batsman.six
            })
            .then((res) => {
                props.update(true)
            })
            .catch((err) => {console.log(err)})
            SetBatsman(initialValue)
        }else{
            axios.put(`${SERVER_URL}/batsman/update/${batsmanDetails._id}`,batsman)
            .then((res) => {
                props.update(true)
            })
            .catch((err) => {console.log(err)})
        }

    }
    return (
        <div style={{margin:'5% 30% 0 30%',}}>
            <form onSubmit={onSubmithandler}>
                <div className="form-group">
                    <label>Player Name</label>
                    <input type="text" name="playerName" value={batsman.playerName} onChange={onChangehandler} className="form-control" placeholder="Enter Player Name" />
                </div>
                <div className="form-group">
                    <label>Select Team Name</label>
                    <select name="teamName" value={batsman.teamName} onChange={onChangehandler} className="form-control" id="exampleFormControlSelect1">
                        <option>team1</option>
                        <option>team2</option>
                    </select>
                </div>
                <label style={{marginBottom:'3%'}}>Select Player Status</label><br></br>
                <div style={{marginBottom:'3%'}} className="form-check form-check-inline">
                    <input name="playerStatus" value="Stike"  onChange={onChangehandler} className="form-check-input" type="radio" id="inlineRadio1" checked={batsman.playerStatus === 'Stike'}/>
                    <label className="form-check-label">Stike</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input name="playerStatus" value="Non-Stike"  onChange={onChangehandler} className="form-check-input" type="radio" id="inlineRadio2" checked={batsman.playerStatus === 'Non-Stike'}/>
                    <label className="form-check-label">Non-Stike</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input name="playerStatus" value="Out" onChange={onChangehandler} className="form-check-input" type="radio" id="inlineRadio3" checked={batsman.playerStatus === 'Out'}/>
                    <label className="form-check-label">Out</label>
                </div>
                <div className="row">
                    <div className="col">
                        <input name="score" value={batsman.score} onChange={onChangehandler} className="form-control" placeholder = "Score" />
                    </div>
                    <div className="col">
                        <input name="ball" value={batsman.ball} onChange={onChangehandler} className="form-control" placeholder = "Ball" />
                    </div>
                    <div className="col">
                        <input name="four" value={batsman.four} onChange={onChangehandler} className="form-control" placeholder = "4s" />
                    </div>
                    <div className="col">
                        <input name="six" value={batsman.six} onChange={onChangehandler} className="form-control" placeholder= "6s" />
                    </div>
                </div><br></br>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <input type="submit" value={batsmanDetails == '' ? "Submit":"Update"} className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}

export default AddBatsman

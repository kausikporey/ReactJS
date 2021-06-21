import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { SERVER_URL } from '../../URL'

const AddBowler = (props) => {
    var bowlerDetails = props.bowlerDetails
    var initialValue = {
        playerName:'',
        teamName:'team1',
        playerStatus:'current',
        over:'',
        run:'',
        wicket:''
    }

    const [bowler,SetBowler] = useState(initialValue)

    useEffect(() => {
        if(bowlerDetails != ''){
            SetBowler({...bowler,
                playerName:bowlerDetails.playerName,
                teamName:bowlerDetails.teamName,
                playerStatus:bowlerDetails.playerStatus,
                score:bowlerDetails.score,
                over:bowlerDetails.over,
                run:bowlerDetails.run,
                wicket:bowlerDetails.wicket
            })
        }else{
            SetBowler(initialValue)
        }
    },[bowlerDetails])
    
    const onChangehandler = (e) =>{
        const {name,value} = e.target;
        SetBowler({...bowler,
            [name]:value
        })
    }

    const onSubmithandler = (e) => {
        e.preventDefault();
        if(bowlerDetails == ''){
            const matchID = JSON.parse(localStorage.getItem('selectedMatchDetails'))._id
            axios.post(`${SERVER_URL}/bowler/create`,{
                matchID:matchID,
                playerName:bowler.playerName,
                teamName:bowler.teamName,
                playerStatus:bowler.playerStatus,
                over:bowler.over,
                run:bowler.run,
                wicket:bowler.wicket,
            })
            .then((res) => {
                props.update(true)
            })
            .catch((err) => {console.log(err)})
            SetBowler(initialValue)
        }else{
            axios.put(`${SERVER_URL}/bowler/update/${bowlerDetails._id}`,bowler)
            .then((res) => {
                props.update(true)
            })
            .catch((err) => {console.log(err)})
        }

    }
  
    return (
        <div style={{margin:'5% 30% 0 30%'}}>
            <form onSubmit={onSubmithandler}>
                <div className="form-group">
                    <label>Player Name</label>
                    <input type="text" value={bowler.playerName} onChange={onChangehandler} name="playerName" className="form-control" placeholder="Enter Player Name" />
                </div>
                <div className="form-group">
                    <label>Select Team Name</label>
                    <select className="form-control" value={bowler.teamName} onChange={onChangehandler} name="teamName" id="exampleFormControlSelect1">
                        <option>team1</option>
                        <option>team2</option>
                    </select>
                </div>
                <label style={{marginBottom:'3%'}}>Select Player Status</label><br></br>
                <div style={{marginBottom:'3%'}} className="form-check form-check-inline">
                    <input name="playerStatus" value="current"  onChange={onChangehandler} checked={bowler.playerStatus === 'current'} className="form-check-input" type="radio"  id="inlineRadio1"/>
                    <label className="form-check-label">Current</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input name="playerStatus" value="old"  onChange={onChangehandler} checked={bowler.playerStatus === 'old'} className="form-check-input" type="radio"  id="inlineRadio2"/>
                    <label className="form-check-label">Old</label>
                </div>
                <div className="row">
                    <div className="col">
                        <input name="over" type="text" value={bowler.score} onChange={onChangehandler} className="form-control" placeholder="Over" />
                    </div>
                    <div className="col">
                        <input name="run" type="text" value={bowler.score} onChange={onChangehandler} className="form-control" placeholder="Run" />
                    </div>
                    <div className="col">
                        <input name="wicket" type="text" value={bowler.score} onChange={onChangehandler} className="form-control" placeholder="Wicket" />
                    </div>
                </div><br></br>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <input type="submit" value={bowlerDetails == '' ? "Submit":"Update"} className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}

export default AddBowler

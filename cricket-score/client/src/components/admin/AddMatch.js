import axios from 'axios'
import React,{useState,useEffect} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {SERVER_URL,CLIENT_URL} from '../../URL';

const AddMatch = (props) => {
    var matchDetails = (localStorage.getItem('matchDetails'))
    var initialValue = {
        team1:'',
        team2:'',
        title:'',
        team1Score:{run:'0',wicket:'0',over:'0'},
        team2Score:{run:'0',wicket:'0',over:'0'}
    }
    if(matchDetails != ''){
        matchDetails = JSON.parse(localStorage.getItem('matchDetails'))
        initialValue = {
            team1:matchDetails.team1,
            team2:matchDetails.team2,
            title:matchDetails.title
        }
    }
    const [data,setData] = useState(initialValue);
    

    const onChangehandler = (e) =>{
        const {name,value} = e.target;
        setData({...data,
            [name]:value
        })
    }
   const onSubmithandler = (e) => {
        e.preventDefault();
       if(matchDetails == ''){
            axios.post(`${SERVER_URL}/match/create`,data)
            .then((res) => {
                console.log('Match Details Inserted')
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
            axios.put(`${SERVER_URL}/match/update/${matchDetails._id}`,data)
            .then((res) => {
                console.log('Match Updated Successfully')
            })
            .catch((err) => {
                console.log(err)
            })
            localStorage.setItem('matchDetails','')
            setData({team1:'',team2:'',title:''})
        }
   }

    return (
        <div style={{margin:'5% 30% 0 30%',color:'balck'}}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',color:'pink'}}>
                <h2>Add Match</h2>
            </div>
            <form onSubmit={onSubmithandler}>
                <div className="form-group">
                    <label>Enter 1st Team Name</label>
                    <input type="text" name="team1" value={data.team1} onChange={onChangehandler} className="form-control" placeholder="Enter Team Name" />
                </div>
                <div className="form-group">
                    <label>Enter 2nd Team Name</label>
                    <input type="text" name="team2" value={data.team2} onChange={onChangehandler} className="form-control" placeholder="Enter Team Name" />
                </div>
                <div className="form-group">
                    <label>Enter Title</label>
                    <input type="text" name="title" value={data.title} onChange={onChangehandler} className="form-control" placeholder="Enter Title" />
                </div><br></br>
                <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                    <input type="submit" value={matchDetails != '' ? "Update":"Submit"}  className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}

export default AddMatch

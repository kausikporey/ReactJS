import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../../URL';
import AddBatsman from './AddBatsman';
import { Route,Link } from 'react-router-dom';

const Batsman = (props) => {
    const [updateList,setUpdateList] = useState(false);
    const [batsmanList,setBatsmanList] = useState([])
    const [batsmanDetails,setBatsmanDetails] = useState('')
    const link = `/homepage/batting-${props.filter}/addbatsman`;

    const onDelete = (id) => {
        axios.delete(`${SERVER_URL}/batsman/delete/${id}`)
        .then((res) => {
            setUpdateList(true)
            setBatsmanDetails('')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() =>{
        const matchID = JSON.parse(localStorage.getItem('selectedMatchDetails'))._id;
        var filter = props.filter;
        var query = ''
        if(filter == 'team1-all'){
            query = `matchID=${matchID}&playerStatus=all&teamName=team1`
        }
        else if(filter == 'team1-current'){
            query = `matchID=${matchID}&playerStatus=current&teamName=team1`
        }
        else if(filter == 'team2-all'){
            query = `matchID=${matchID}&playerStatus=all&teamName=team2`
        }
        else if(filter == 'team2-current'){
            query = `matchID=${matchID}&playerStatus=current&teamName=team2`
        }

        axios.get(`${SERVER_URL}/batsman?${query}`)
        .then((res) => {
            setBatsmanList(res.data)
            setUpdateList(false)
        })
        .catch((err) => console.log(err))
    },[updateList])

    return (
        <>
            <div style={{display:'flex',justifyContent:'center',backgroundColor:'#FDD20EFF'}}>
                <Link to={link} onClick={() => setBatsmanDetails('')} style={{marginBottom:'10px',marginTop:'10px'}} className="btn btn-dark">Add Batsman</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <td className="col-md-4">Batting</td>
                        <td className="col-md-2">R(B)</td>
                        <td className="col-md-2">4s</td>
                        <td className="col-md-2">6s</td>
                        <td className="col-md-2">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    batsmanList.map((batsman) => {
                        return(
                            <tr key={batsman._id}>
                                <td style={{color:'blue'}}>{batsman.playerName}</td>
                                <td><b>{batsman.score}</b>({batsman.ball})</td>
                                <td>{batsman.four}</td>
                                <td>{batsman.six}</td>
                                <td>
                                    <Link to={link} style={{marginRight:'20px'}} onClick={() => setBatsmanDetails(batsman)} className="btn btn-primary">
                                        <i className="far fa-edit"></i>
                                    </Link>
                                    <button      
                                        onClick={e =>
                                                window.confirm("Are you sure you wish to delete this item?") &&
                                                onDelete(batsman._id)
                                            }
                                        className="btn btn-danger">
                                        <i className="far fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        )})}
                </tbody>
            </table>
            <Route path={link}>
                <AddBatsman update={setUpdateList} batsmanDetails={batsmanDetails}/>
            </Route>
        </>
    )
}

export default Batsman

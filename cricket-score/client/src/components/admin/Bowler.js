import React,{useEffect,useState} from 'react'
import AddBowler from './AddBowler'
import { Link,Route } from 'react-router-dom'
import { SERVER_URL } from '../../URL'
import axios from 'axios'


const Bowler = (props) => {
    const [updateList,setUpdateList] = useState(false);
    const [bowlerList,setBowlerList] = useState([])
    const [bowlerDetails,setBowlerDetails] = useState('')
    const link = `/homepage/bowling-${props.filter}/addbowler`;

    const onDelete = (id) => {
        axios.delete(`${SERVER_URL}/bowler/delete/${id}`)
        .then((res) => {
            setUpdateList(true)
            setBowlerDetails('')
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

        axios.get(`${SERVER_URL}/bowler?${query}`)
        .then((res) => {
            setBowlerList(res.data)
            setUpdateList(false)
        })
        .catch((err) => console.log(err))
    },[updateList])
    return (
        <>
           <div style={{display:'flex',justifyContent:'center',backgroundColor:'#FDD20EFF'}}>
                <Link to={link} onClick={() => setBowlerDetails('')} style={{marginBottom:'10px',marginTop:'10px'}} className="btn btn-dark">Add Bowler</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <td className="col-md-4">Bowling</td>
                        <td className="col-md-2">O</td>
                        <td className="col-md-2">R</td>
                        <td className="col-md-2">W</td>
                        <td className="col-md-2">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    bowlerList.map((bowler) => {
                        return(
                            <tr key={bowler._id}>
                                <td style={{color:'blue'}}>{bowler.playerName}</td>
                                <td>{bowler.over}</td>
                                <td>{bowler.run}</td>
                                <td>{bowler.wicket}</td>
                                <td>
                                    <Link to={link} style={{marginRight:'20px'}} onClick={() => setBowlerDetails(bowler)} className="btn btn-primary">
                                        <i className="far fa-edit"></i>
                                    </Link>
                                    <button 
                                        onClick={e =>
                                            window.confirm("Are you sure you wish to delete this item?") &&
                                            onDelete(bowler._id)
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
                <AddBowler update={setUpdateList} bowlerDetails={bowlerDetails}/>
            </Route>
        </>
    )
}

export default Bowler

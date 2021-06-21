import React from 'react'
import {Route,Link} from 'react-router-dom';
import Batsman from './Batsman';
import Bowler from './Bowler';
import UpdateScore from './UpdateScore';
import './style.css';

const Dashboard = () => {
    const SelectedMatch = JSON.parse(localStorage.getItem('selectedMatchDetails'))
    var team1 = SelectedMatch.team1.split(' ').map(function(item){return item[0]}).join('').toUpperCase();
    var team2 = SelectedMatch.team2.split(' ').map(function(item){return item[0]}).join('').toUpperCase();




    return (
        <div className="row">
            <div className="col-md-2">
            <div style={{display:'flex',flexDirection:'column',width:'90%',backgroundColor:'black',color:'aliceblue'}}>
                    <ul>
                        <li style={{marginTop:'20px',marginBottom:'20px'}} className="list"><Link className="link" to="/matchlist"><span>Home</span></Link></li>
                        <li className="list">
                                <p>
                                    <a className="link" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <span>Batsman</span>
                                    </a>
                                </p>
                                <div className="collapse submenu" id="collapseExample1">
                                    <div>
                                        <p >
                                            <a className="link" data-toggle="collapse" href="#collapseExample11" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                {team1}
                                            </a>
                                        </p>
                                        <div className="collapse" id="collapseExample11">
                                            <div style={{marginBottom:'10px'}}>
                                                <ul>
                                                    <li style={{marginBottom:'10px'}}> <Link className="link" to="/homepage/batting-team1-current">Current</Link> </li>
                                                    <li> <Link className="link" to="/homepage/batting-team1-all">All</Link> </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>
                                            <a className="link" data-toggle="collapse" href="#collapseExample12" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                {team2} 
                                            </a>
                                        </p>
                                        <div className="collapse" id="collapseExample12">
                                            <div style={{marginBottom:'10px'}}>
                                                <ul>
                                                    <li style={{marginBottom:'10px'}}> <Link className="link" to="/homepage/batting-team2-current">Current</Link> </li>
                                                    <li> <Link className="link" to="/homepage/batting-team2-all">All</Link> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </li>

                        <li className="list">
                                <p>
                                    <a className="link" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <span>Bowler</span>
                                    </a>
                                </p>
                                <div className="collapse submenu" id="collapseExample2">
                                    <div>
                                        <p >
                                            <a className="link" data-toggle="collapse" href="#collapseExample21" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                {team1} 
                                            </a>
                                        </p>
                                        <div className="collapse" id="collapseExample21">
                                            <div style={{marginBottom:'10px'}}>
                                                <ul>
                                                    <li style={{marginBottom:'10px'}}> <Link className="link" to="/homepage/bowling-team1-current">Current</Link> </li>
                                                    <li> <Link className="link" to="/homepage/bowling-team1-all">All</Link> </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>
                                            <a className="link" data-toggle="collapse" href="#collapseExample22" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                {team2} 
                                            </a>
                                        </p>
                                        <div className="collapse" id="collapseExample22">
                                            <div style={{marginBottom:'10px'}}>
                                                <ul>
                                                    <li style={{marginBottom:'8px'}}> <Link className="link" to="/homepage/bowling-team2-current">Current</Link> </li>
                                                    <li> <Link className="link" to="/homepage/bowling-team2-all">All</Link> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </li>

                        <li className="list">
                                <p>
                                    <a className="link" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <span>Score</span>
                                    </a>
                                </p>
                                <div className="collapse" id="collapseExample3">
                                    <ul>
                                        <li style={{marginBottom:'10px'}}> <Link className="link" to="/homepage/score1">{team1}</Link> </li>
                                        <li> <Link className="link" to="/homepage/score2">{team2}</Link> </li>
                                    </ul>
                                </div>
                                
                        </li>
                    </ul>
            </div>
            </div>
            <div className="col-md-10">
                <Route path="/homepage/batting-team1-current">
                    <Batsman filter="team1-current"/>
                </Route>
                <Route path="/homepage/batting-team1-all">
                    <Batsman filter="team1-all" />
                </Route>
                <Route path="/homepage/batting-team2-current">
                    <Batsman filter="team2-current" />
                </Route>
                <Route path="/homepage/batting-team2-all">
                    <Batsman filter="team2-all" />
                </Route>
                <Route path="/homepage/bowling-team1-current">
                    <Bowler filter="team1-current" />
                </Route>
                <Route path="/homepage/bowling-team1-all">
                    <Bowler filter="team1-all" />
                </Route>
                <Route path="/homepage/bowling-team2-current">
                    <Bowler filter="team2-current" />
                </Route>
                <Route path="/homepage/bowling-team2-all">
                    <Bowler filter="team2-all" />
                </Route>
                <Route path="/homepage/score1">
                    <UpdateScore team="team1" />
                </Route>
                <Route path="/homepage/score2">
                    <UpdateScore team="team2" />
                </Route>
            </div>
        </div>
    )
}

export default Dashboard;

import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import 'axios';
import LogIn from './components/admin/LogIn'
import Score from './components/client/Score';
import Dashboard from './components/admin/Dashboard'
import MatchList from './components/admin/MatchList';
import AddMatch from './components/admin/AddMatch';
import Authenticate from './components/admin/Authenticate';
import CurrentPlayer from './components/client/CurrentPlayer';
import ScoreDetails from './components/client/ScoreDetails';
const auth = Authenticate();

function App() {
  return (
      <Router>
          <Route exact path="/server">
              <LogIn />
          </Route>
          <Route exact path="/">
              <Score />
          </Route>
          <Route exact path="/matchlist">
              {auth ? <MatchList /> : ''}
          </Route>
          <Route exact path="/addmatch">
              {auth ? <AddMatch /> : ''}
          </Route>
          <Route path="/homepage">
              {auth ? <Dashboard /> : ''}
          </Route>
          <Route exact path="/currentplayer">
               <CurrentPlayer />
          </Route>
          <Route exact path="/scoredetails">
               <ScoreDetails />
          </Route>
      </Router>
  );
}

export default App;

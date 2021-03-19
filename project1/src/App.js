import logo from './logo.svg';
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import Purecomponent from './components/purecomponent';
import Parentcomponent from './components/Parentcomponent';
import Refsdemo from './components/Refsdemo';
import Focusinput from './components/Focusinput';
import ForwardredParent from './components/ForwardrefParent';
import Portaldemo from './components/Portaldemo';
import Hero from './components/Hero';
import Errorboundary from './components/Errorboundary';
import Clickcounter from './components/Clickcounter';
import Hovercounter from './components/Hovercounter';
import HOClickCounter from './components/HOClickCounter';
import Clickcounter2 from './components/ClickCounter2';
import Hovercounter2 from './components/HoverCounter2';
import User from './components/User';
import Counter from './components/Counter';
import ComponentA from './components/ComponentA'
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      {/*<FragmentDemo></FragmentDemo>
      <Table/>
      <Parentcomponent/>
      <Refsdemo/>
      <Focusinput/>
      <ForwardredParent/>
      <Portaldemo/>
      */}


      {/*<Errorboundary>
        <Hero heroname = "Batman"></Hero>
      </Errorboundary>
      <Errorboundary>  
        <Hero heroname = "Superman"></Hero>
      </Errorboundary>  
      <Errorboundary>
        <Hero heroname = "Joker"></Hero>
      </Errorboundary>

      <Clickcounter/>
      <Hovercounter/>
      <HOClickCounter name="kousik"/>
      */}
      {/*<Clickcounter2/>
      <Hovercounter2/>
      <User name = {(isLoggedin)=>isLoggedin ? 'Kausik Porey' : 'Guest'}/>


      <Counter render = {(count,clickcounter)=>(<Clickcounter2 count={count} clickcounter={clickcounter}/>)}/>
      <Counter render = {(count,clickcounter)=>(<Hovercounter2 count={count} clickcounter={clickcounter}/>)}/>
      */}
      <UserProvider value = "Kousik Porey">
          <ComponentA/>
      </UserProvider>
     
    </div>
  );
}

export default App;

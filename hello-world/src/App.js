import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from'./components/Message';
// import Count from './components/Count';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreting from './components/UserGreeting';
// import NameList from './components/PersonList';
// import Name from './components/Name';
// import Stylesheet from './components/Stylesheet';
// import InlineCss from './components/InlineCss';
// import './appStyle.css';
// import styles from './components/appStyle.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import LifeCycleAUpdate from './components/LifeCycleAUpdate';


function App() {
  return (
    <div className="App">
        {/* <Greet name="Kausik" surname="Porey">
          This is an childrean props 
        </Greet>
        <Greet name="Sayan" suranme="singha">
          <button>Children</button>
        </Greet>  
        <Greet name="Subrata" surname="Sasmal">
          <button>Hello</button>
        </Greet>  
        <Welcome name="Kausik" actor="Paban">
          <p>this is a children props</p>
        </Welcome> 
        <Welcome name="Subrata" actor="Arpita">
          <button>Children</button>
        </Welcome>  


        <Hello/>
        <Message/>
        <Count/>


        <FunctionClick/>
        <ClassClick/>
        <EventBind/> 
        <ParentComponent/>
        <UserGreting/>
        <Name/>
        <NameList/>
         <Stylesheet primary={true}/>
        <InlineCss/>
        <h1 className='error'>Error</h1>
        <h2 className={styles.success}>Success</h2>
        <Form/>
        <LifeCycleA/>
        */}
        
        <LifeCycleAUpdate/>
     
    </div>
  );
}

export default App;

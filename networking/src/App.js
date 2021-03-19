import './App.css';
import React, { useReducer } from 'react';
import Postlist from './components/Postlist';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookOnject from './components/HookObject';
import HookArray from './components/HoolArray';
import HookuseEffect from './components/HookuseEffect';
import ConditionalyrunEffect from './components/ConditionalyrunEffect';
import RunEffectOnlyOnce from './components/RunEffectOnlyOnce';
import MouseContainer from './components/MouseContainer';
import IntervalCounter from './components/IntervalCounter';
import DataFetching from './components/DataFetching';
import IndividualDataFetching from './components/IndividualDataFetching'
//import ComponentA from './components/ComponentA';
import HookReducer from './components/HookReducer';
import HookReducer2 from './components/HookReducer2';
import MultipleUseReducer from './components/MultipleUseReducer';
import ComponentA from './components/UseReducerWithUseContext/ComponentA';
import ComponentB from './components/UseReducerWithUseContext/ComponentB';
import ComponentC from './components/UseReducerWithUseContext/ComponentC';
import DataFetching2 from './components/DataFetchingUseReducer';
import Parent from './components/UseCallback/Parent';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import HookTimer from './components/HookTimer';
import UpdateDocumentTitle from './components/UpdateDocumentTitle';
import UseCount from './components/UseCount';
import UseInput from './components/UseInput';



const initialstate = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialstate   
        default:
            return state         
    }
}
export const CountContext = React.createContext()





export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {

  const [count,setCount] = useReducer(reducer,initialstate)

  return (
    <div className="App">
      {/*
      <Postlist/>
      <HookCounter/>
      <HookCounter2/>
      <HookOnject/>
      <HookArray/>
      <PostForm/>
      <HookuseEffect/>
      <ConditionalyrunEffect/>
      <RunEffectOnlyOnce/>
      <MouseContainer/>
       <IntervalCounter/>
       <DataFetching/>
       <IndividualDataFetching/>


       <UserContext.Provider value={'kousik'}>
       <ChannelContext.Provider value={'Lorry'}>
           <ComponentA/>
       </ChannelContext.Provider>
       </UserContext.Provider>
       <HookReducer/>
       <HookReducer2/>
       <MultipleUseReducer/>


       <CountContext.Provider value={{count : count, setCount : setCount}}>
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
      </CountContext.Provider>
      <DataFetching2/>
      <Parent/>
      <UseMemo/>
      <UseRef/>
      <HookTimer/>
      <UpdateDocumentTitle/>
      <UseCount/>
      */}
      <UseInput/>
      
    </div>
  );
}

export default App;

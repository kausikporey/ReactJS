import React from 'react';
import NameList from './NameList';

const PersonList = (props) => {
    const persons = [{skill:'English',name:'kausik',age:22},{skill:'Bengali',name:'subrata',age:22}]
    const personList =  persons.map((person) => <NameList key={person.name} person={person}/>)  //persons.map((person) => <h2>{person.id}.Name is : {person.name} and age is : {person.age}</h2>)
    return  <div>{personList}</div>  //we must haveto add a unique key value in the upper linewhen we use list of elements.without key value the elements will not be unique
}


export default PersonList;
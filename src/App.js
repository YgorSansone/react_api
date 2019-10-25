import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';



const app = props => {
  const [personsState, setPersonsState] = useState({
      students: [
          {name : ' ', presence: 0}
      ]
  });

const request01 = () =>{
  // create an XHR object
const xhr = new XMLHttpRequest();

// listen for `onload` event
xhr.onload = () => {
    // process response
    if (xhr.status == 200) {
        // parse JSON data
        const rs = JSON.parse(xhr.response);
        setPersonsState(rs);
    } else {
        console.error('Error!');
    }
};

// create a `GET` request
xhr.open('GET', 'https://citec-api.herokuapp.com/students');

// send request
xhr.send();


};

const liststudents = personsState.students.map((student)=>
<Person 
name = {student.name}
image = {student.image}
presence = {student.presence}
/>
);
const imagem = personsState.image;
const size = personsState.size;
const present = personsState.present;
request01();
  return (

      <div className="App" >
<nav class="fixed-nav-bar">
    <img src={imagem} id ="logo"></img>
    <h1 id="headerText">{present}/{size}</h1>
</nav>

          <div class="mystudents" id="mystudents">
          {liststudents}
      </div>
     

      </div>
  )
}

export default app;

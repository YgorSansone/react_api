import React from 'react';
const person = (props) => {
if(props.presence != 0){
    return (
      <div className="person">

        <img src={props.image} name="emoji" id="emoji"></img>
        <div class="textn" id="textn"><h1 >{props.name}</h1></div>
        <div class="check" id="check"><img src="https://cdn2.iconfinder.com/data/icons/basic-ui-elements-16/117/correct-256.png" name="certo" id="certo" alt="Presente"></img></div>
      </div>
      );
  }
  return (
  <div className="person">

  <img src={props.image}  name="emoji" id="emoji" height="auto"></img>
  <div class="textn" id="textn"><h1>{props.name}</h1></div>
  
  </div>
  );
}
export default person;


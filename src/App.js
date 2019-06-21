import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';
import Validate from './ValidationComponent';



class App extends Component {
state = {
  persons: [
    {id: '1', name: 'Christina', age: 40},
    {id: '2', name: 'Jan Paul', age: 44},
    {id: '3', name: 'Annelies', age: 46}
  ],
  showPeople: false,
  text: {value:'', string: ''}
};

deletePersonHandler = (personIndex) => {
const people = [...this.state.persons];
people.splice(personIndex, 1);
this.setState({persons: people})
}

nameChangedHandler = (event, id) => {
const personIndex = this.state.persons.findIndex(p => {
  return p.id == id;
});

const person = {...this.state.persons[personIndex]};

person.name = event.target.value;
const persons = [...this.state.persons];
person[personIndex] = person;

  this.setState({
    persons: persons
  });
}

lengthChange = (event) => {
let text = event.target.value;
let  stringLength = event.target.value.length;
const stateText = {...this.state.text};

stateText.value = text;
if(stringLength>5){
  stateText.string = "Text is long enough";
}else if(stringLength<=5){
  stateText.string = "Text is too short";
}

this.setState({
text: stateText
});


this.setState({
 
});
}

togglePersonHandler = () => {
const doesShow = this.state.showPeople;
this.setState({showPeople: !doesShow});
}

render(){
  let people = null;
  let btnClass ='';
  if(this.state.showPeople){
    people = (
      <div >
        {this.state.persons.map((person, index) => {
          return<Person 
                  click={()=>this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age}
                  key = {person.id}
                  changed = {(event) => this.nameChangedHandler(event, person.id)}/>
        })}
     </div>
    );
    
    btnClass = classes.Red;   
  }
  let assignedClasses = [];
   
  if(this.state.persons.length <= 2 ){
   assignedClasses.push(classes.red); 
  }
  if(this.state.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }

  return (
 
    <div className={classes.App}>
          <h1 className={assignedClasses.join(' ')}>Hi I am learning React JS</h1>
          <button
          className={btnClass}
          onClick={this.togglePersonHandler}
          >Show People
          </button>    
          {people}
          <Validate
                text={this.state.text.value}
                changed={(event) => this.lengthChange(event)}
                stringLength = {this.state.text.string}
              />
    </div>
      
 
  );
}
    
}

export default App;

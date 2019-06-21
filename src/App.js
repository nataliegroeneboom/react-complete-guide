import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  persons: [
    {name: 'Christina', age: 40},
    {name: 'Jan Paul', age: 44},
    {name: 'Annelies', age: 46}
  ],
  showPeople: false
};

deletePersonHandler = (personIndex) => {
const people = [...this.state.persons];
people.splice(personIndex, 1);
this.setState({persons: people})
}

nameChangedHandler = (event) => {
  this.setState({
    persons:[
      {name: 'Christina', age: 40},
      {name: event.target.value, age: 44},
     {name: 'Annelies', age: 46}
    ]
  });
}
togglePersonHandler = () => {
const doesShow = this.state.showPeople;
this.setState({showPeople: !doesShow});
}

render(){
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  let people = null;
  if(this.state.showPeople){
    people = (
      <div >
        {this.state.persons.map((person, index) => {
          return <Person 
                  click={()=>this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age}/>
        })}
     </div>
    );
  }
  return (
    <div className="App">
      <h1>Hi I am learning React JS</h1>
      <button 
      style={style}
      onClick={this.togglePersonHandler}
      >Show People
      </button>    
      {people}
    </div>
  );
}
    
}

export default App;

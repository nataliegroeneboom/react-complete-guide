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

switchNameHandler = (newName) => {
 this.setState({
    persons:[
      {name: newName, age: 40},
      {name: 'Jan Paul', age: 44},
     {name: 'Annelies', age: 46}
    ]
  });
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
  return (
    <div className="App">
      <h1>Hi I am learning React JS</h1>
      <button 
      style={style}
      onClick={this.togglePersonHandler}
      >Show People
      </button>
      { this.state.showPeople ?
          <div >
              <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age}>My Hobbies: Gardening
              </Person>
              <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this, 'Teenie!')}
                  changed={this.nameChangedHandler}>My Hobbies: Golf
              </Person>
              <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age}>My Hobbies: Crochet
              </Person>
          </div>: null
      }
     
    </div>
  );
}
    
}

export default App;

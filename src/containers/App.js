import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import classes from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor\n', props);
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside shouldComponentUpdate()\n', nextProps, nextState);
    return nextState.persons !== this.state.persons || nextProps.showPersons !== this.state.showPersons;
    //return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate()\n', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate()');
  }

  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  /*
  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ]
    })
  }
  */

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // again this is just pointer, not a new object
    //const person = this.state.persons[personIndex]; 
    const person = {...this.state.persons[personIndex]}; // create new object!
    
    // or create a new object like this
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    // if I add slice() I actualy copy there array insted of having reference to it in memory
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // ES6 -> how to create a new copy
    persons.splice(personIndex,1);
    this.setState({persons: persons});

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={ () => { this.setState({showPersons: true }) } }>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}/>
        {persons}
      </div>
    );

    // return ( React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App')) );
  }
}

export default App;
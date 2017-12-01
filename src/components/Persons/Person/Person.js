import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside constructor\n', props);
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount()');
  }

  render() {
    console.log('[Person.js] inside render()');

    return (
      <div className={ classes.Person }>
        <p>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
        <p onClick={this.props.deletePerson}>Delete me</p>
      </div>
    );
    
    /*
    return [
      <p key="1">I'm a {this.props.name} and I am {this.props.age} years old!</p>,
      <p key="2">{this.props.children}</p>,
      <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>,
      <p key="4" onClick={this.props.deletePerson}>Delete me</p>,
    ]
    */
  }
}

/*
const person = (props) => {
  return (
    <div className={ classes.Person }>
      <p>I'm a {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
      <p onClick={props.deletePerson}>Delete me</p>
    </div>
  );
}

export default person;
*/

export default Person;
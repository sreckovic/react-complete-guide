import React, { Component } from "react";
import PropTypes from "prop-types";

import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Aux";

import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] inside constructor\n", props);
  }

  componentWillMount() {
    console.log("[Person.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] inside componentDidMount()");
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    console.log("[Person.js] inside render()");

    return (
      <Aux>
        <p>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={inp => {
            this.inputElement = inp;
          }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        <p onClick={this.props.deletePerson}>Delete me</p>
      </Aux>
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

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);

import React, { PureComponent } from "react";

import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] inside constructor\n", props);
  }

  componentWillMount() {
    console.log("[Persons.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Persons.js] inside componentDidMount()");
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Persons.js] inside componentWillReceiveProps()\n",
      nextProps
    );
  }

  /* Insted this check we can use PureComponent
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate()\n', nextProps, nextState);
    return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
    //return true;
  }
  */

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] inside componentWillUpdate()\n",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE Persons.js] inside componentDidUpdate()");
  }

  render() {
    console.log("[Persons.js] inside render()");

    return this.props.persons.map((person, index) => {
      return (
        <Person
          deletePerson={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          position={index}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;

/*
const persons = (props) => props.persons.map((person, index) => {
    return <Person
      deletePerson={() => props.clicked(index)}
      name={person.name}
      age ={person.age}
      key={person.id}
      changed={(event) => props.changed(event, person.id)} />
    }
  );

export default persons;
*/

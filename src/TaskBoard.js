/** Section which contains Person columns and their associated card. */

import React, {Component} from 'react';
import Person from './Person';

class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Alfred",
          tasks: ["card one", "card two"],
        },
        {
          name: "Bruno",
          tasks: ["card three", "card four"],
        },
        {
          name: "Charles",
          tasks: ["card five", "card six"],
        },
        {
          name: "Daniel",
          tasks: ["card seven", "card eight"],
        },
      ]
    }
  }

  render() {
    return (
      <section>
      {this.state.people.map(person => 
        <Person name={person.name} tasks={person.tasks} />
      )}
      </section>
    )
  }
}

export default TaskBoard;
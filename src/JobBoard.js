/** Section which contains Status columns and their associated card. */

import React, {Component} from 'react';
import Status from './Status';

class JobBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          status: "Alfred",
          jobs: ["card one", "card two"],
        },
        {
          status: "Bruno",
          jobs: ["card three", "card four"],
        },
        {
          status: "Charles",
          jobs: ["card five", "card six"],
        },
        {
          status: "Daniel",
          jobs: ["card seven", "card eight"],
        },
      ]
    }
  }

  render() {
    return (
      <section>
      {this.state.people.map(columns => 
        <Status status={columns.name} jobs={columns.jobs} />
      )}
      </section>
    )
  }
}

export default JobBoard;
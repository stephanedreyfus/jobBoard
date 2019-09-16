/** Column representing person to whom task is assigned 
 * Will take as props:
 * - Person's name
 * - Task array
*/

import React, {Component} from 'react';
import NameCard from './NameCard';
import TaskCard from './TaskCard';

class Person extends Component {
  
  render() {
    return (
      <div>
        <NameCard name={this.props.name} />
        <ul>
          {this.props.tasks.map((task) => 
            <TaskCard task={task}/>
          )}
        </ul>
      </div>
    )
  }
}

export default Person;
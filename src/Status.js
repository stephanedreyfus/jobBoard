/** Column representing Status to whom task is assigned 
 * Will take as props:
 * - Status type
 * - Job array
*/

import React, {Component} from 'react';
import StatusType from './StatusType';
import JobCard from './JobCard';

class Status extends Component {
  
  render() {
    return (
      <div>
        <StatusType status={this.props.status} />
        <ul>
          {this.props.jobs.map((job) => 
            <JobCard job={job}/>
          )}
        </ul>
      </div>
    )
  }
}

export default Status;
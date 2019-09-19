/** Div to show current job.
 * Contains arrow components, but should only show if move is possible
 */

 import React from 'react';

const JobCard = (props) => {
  return (
    <li>
      {props.job}
    </li>
  )
}

export default JobCard;
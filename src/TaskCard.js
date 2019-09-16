/** Div to show current task.
 * Contains arrow components, but should only show if move is possible
 */

 import React from 'react';

const TaskCard = (props) => {
  return (
    <li>
      {props.task}
    </li>
  )
}

export default TaskCard;
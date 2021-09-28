import React from "react";

const TaskHeader = () => {
  return (
    <React.Fragment>
      <p>
        <strong>Task Description:</strong>
      </p>
      <ul>
        <li>
          Use the New counter form to add multiple counters with + and -
          buttons. <br />
          Each new counter will start from 0<br />
          They will increase/decrease the counter.
        </li>
        <li>Calculate the total number of counters</li>
      </ul>
    </React.Fragment>
  );
};

export default TaskHeader;

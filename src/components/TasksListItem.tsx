import React, { FunctionComponent } from "react";

import { Task } from "../models/task";

interface Props {
  task: Task;

  markCompleted: (task: Task) => void;
}

export const TasksListItem: FunctionComponent<Props> = ({ task, markCompleted }) => {


  const onChange = () => {
    markCompleted(task);
  }

  return (
    <li>
      {task.name}
      <input
        name="isCompleted"
        type="checkbox"
        onChange={onChange} />

    </li>
  );
};

export default TasksListItem;
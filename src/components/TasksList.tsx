import React, { FunctionComponent } from "react";

import { Task } from "../models/task";
import TasksListItem from "./TasksListItem";

interface Props {
  tasks: Task[];
  onDeleteCompleted: () => void;
  markCompleted: (task: Task) => void;
}

const TasksList: FunctionComponent<Props> = ({ tasks, onDeleteCompleted, markCompleted }) => {

  const onClick = () => {
    onDeleteCompleted();
  };

  const deleteButton = (<button onClick={onClick}>Delete Completed</button>);

  return (
    <>
      <ul>
        {tasks.map(task => (
          <TasksListItem key={task.id} task={task} markCompleted={markCompleted} />
        ))}
      </ul>
      {tasks.length > 0 ? deleteButton : ''}
    </>
  );

};

export default TasksList;
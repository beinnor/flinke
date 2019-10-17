import React, { FunctionComponent } from 'react'
import { Task } from '../models/task';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task | undefined;
}

const NewTaskForm: FunctionComponent<Props> = ({onChange, onAdd, task}) => (
  <form onSubmit={onAdd}>
    <input onChange={onChange} value={task === undefined ? '' :task.name} />
    <button type="submit">Add a task</button>
  </form>
);

export default NewTaskForm;
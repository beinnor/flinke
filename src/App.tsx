import React, { FunctionComponent, useState } from 'react';
import NewTaskForm from './components/NewTaskForm';
import TasksList from './components/TasksList';
import { Task } from './models/task';


const App: FunctionComponent = () => {


  const [newTask, setNewTask] = useState<Task>({
    id: 1,
    name: "",
    completed: false,
  });
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask({
      id: tasks.length,
      name: "",
      completed: false,
    });
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setNewTask({ id: tasks === undefined ? 0 : tasks.length, name: event.target.value, completed: false });
  };

  const markCompleted = (taskToMarkCompleted: Task) => {

    const tempTasks: Task[] = tasks;
    const taskIndex: number = tasks.findIndex(task => task.id === taskToMarkCompleted.id);

    tempTasks[taskIndex].completed = tempTasks[taskIndex].completed === false ? true : false;

    setTasks([...tempTasks]);
  }

  const deleteCompletedTasks = () => {

    setTasks(tasks.filter(task => task.completed === false));
  };

  return (
    <div>
      <h1>flinke</h1>
      <NewTaskForm
        task={newTask}
        onAdd={addTask}
        onChange={handleTaskChange}
      />
      <TasksList tasks={tasks} markCompleted={markCompleted} onDeleteCompleted={deleteCompletedTasks} />
    </div>
  );
}

export default App;

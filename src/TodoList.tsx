import React, { useState } from 'react';
import { Task } from './Task';

var global_id = 0;
const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const addTask = () => {
    if (newTaskText.trim() === '') {
      setErrorMessage('Task cannot be empty');
      return;
    }
    setErrorMessage(''); // Clear error message if task is valid

    global_id++;
    const newTask: Task = {
      id: global_id,
      text: newTaskText,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <input
        title="task"
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={addTask}>➕</button>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
                title="checkbox"
                type="checkbox"
                id={`task-${task.id}`}
                className="checkbox-custom"
                checked={task.isCompleted}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            <label htmlFor={`task-${task.id}`}></label>
            <div className="taskText">{task.text}</div>
            <button onClick={() => deleteTask(task.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
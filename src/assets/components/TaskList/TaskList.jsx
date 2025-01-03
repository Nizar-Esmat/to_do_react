import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

function TaskList({ tasks, deleteTask, toggleTaskDone }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskDone={toggleTaskDone}
        />
      ))}
    </ul>
  );
}

export default TaskList;

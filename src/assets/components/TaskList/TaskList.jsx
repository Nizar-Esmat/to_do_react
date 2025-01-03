import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

function TaskList({ tasks, deleteTask, TaskDone }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          TaskDone={TaskDone}
        />
      ))}
    </ul>
  );
}

export default TaskList;

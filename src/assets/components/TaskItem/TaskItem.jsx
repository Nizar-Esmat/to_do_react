import React from 'react';

function TaskItem({ task, deleteTask, toggleTaskDone }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        style={{
          textDecoration: task.isDone ? 'line-through' : 'none',
          flex: 1,
        }}
      >
        {task.text}
      </span>
      <div>
        <button
          onClick={() => toggleTaskDone(task.id)}
          className={`btn btn-sm ${
            task.isDone ? 'btn-warning' : 'btn-success'
          } me-2`}
        >
          {task.isDone ? 'Undo' : 'Done'}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;

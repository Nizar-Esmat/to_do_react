import React from 'react';

function TaskItem({ task, deleteTask, TaskDone }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        {task.text}
      </span>
      <div>
        <button
          onClick={() => TaskDone(task.id)}
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

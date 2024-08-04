import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => {
        if (window.confirm('Are you sure you want to delete this task?')) {
          onDelete(task.id);
        }
      }}>Delete</button>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
    </div>
  );
};

export default TaskItem;

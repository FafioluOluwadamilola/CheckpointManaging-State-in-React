import React, { useState, useEffect } from 'react';
import './TaskForm.css';

const TaskForm = ({ onSave, taskToEdit, onCancel }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && description) {
      onSave({ name: taskName, description });
      setTaskName('');
      setDescription('');
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task Name:</label><br/>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label><br/>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Save Task</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default TaskForm;

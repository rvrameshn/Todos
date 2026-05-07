import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/styles/todos.css';

export function DetailsComponent() {
    const { todos } = useSelector((state) => state.todos);
    const { id } = useParams();
    const todo = todos.find((todo) => todo.id === parseInt(id));
    if (!todo) {
      return <div className="taskDetails"><h2>Task not found</h2></div>; 
  }
  return (
    <div className="taskDetails">
      <Link to="/">Back to List</Link>
      <h2>Task Details</h2>
      <div>Task: {todo.title}</div>
    </div>
  );
}
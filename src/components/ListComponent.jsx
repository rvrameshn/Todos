import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddItemComponent } from './AddItemComponent';
import { Link } from 'react-router-dom';
import { deleteTodoRequest } from '../redux';
import '../assets/styles/todos.css';

export function ListComponent() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const onDelete = (id) => {
    dispatch(deleteTodoRequest(id));
  };


  return (
    <div className="container">
        <h1>Todos</h1>
      <ul className="todoList">
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <Link to={`/task/${todo.id}`} state={ todo.id }>
                {todo.title}
              </Link>
              <button onClick={() => onDelete(todo.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
      <AddItemComponent />
    </div>
  );
}
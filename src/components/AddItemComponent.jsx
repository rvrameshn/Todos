import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoRequest } from '../redux/slices';

export function AddItemComponent() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const submitTask = ()=>{
    dispatch(addTodoRequest(task));
          setTask('');
  }
  return (
    <div className="container">
        <h1>Add Task</h1>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => {
          submitTask();
        }}>
          Add
        </button>
    </div>
  );
}
import React, { useState } from 'react';
import { Form } from './components/form';
import { List } from './components/list';

function App() {
  let storedTasks = localStorage.getItem('tasks');
  if(storedTasks === null)
  {
    localStorage.setItem('tasks', JSON.stringify([]));
    storedTasks = [];
  }
  else
  {
    storedTasks = JSON.parse(localStorage.getItem('tasks'));
  }

  const [tasks, setTasks] = useState(storedTasks);

  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks}/>
      <List tasks={tasks} setTasks={setTasks}/>
      
    </div>
  );
}

export default App;

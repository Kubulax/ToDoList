import React, { useState } from 'react';
import { Form } from '../src/components/form';
import { DisplayData } from './components/displayData';
import { list as ListData } from './data/list';

function App() {
  const [tasks, setTasks] = useState(ListData);

  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks}/>
      <DisplayData tasks={tasks} setTasks={setTasks}/>
      
    </div>
  );
}

export default App;

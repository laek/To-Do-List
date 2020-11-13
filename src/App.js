import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem.js';
import ToDoItemList from './ToDoItemList.js';
import {useState} from 'react';
import ToDoForm from './Form';


function App() {
  const [toDoItems, setToDoItems ] = useState([]);
  const [count, setCount] = useState(1);

  const updateToDoItems = (toDoText) => {
    setToDoItems(toDoItems.concat({id: count, text: toDoText}));
    setCount(count+1);
  }

  const removeAllItems = () => {
    (setToDoItems([]));
  }

  const removeToDoItem = (id) => {
    setToDoItems(toDoItems.filter((item) => (item.id !== id)));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          To Do List
        </p>
      </header>
      <ToDoForm handleChange={updateToDoItems}/>
      <ToDoItemList removeToDoItem={removeToDoItem} toDoItems={toDoItems}/>
      <button onClick={removeAllItems}>Remove all</button>
    </div>
  );
}

export default App;

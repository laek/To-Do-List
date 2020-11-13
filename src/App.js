import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem.js';
import ToDoItemList from './ToDoItemList.js';
import {useState} from 'react';
import ToDoForm from './Form';


function App() {
  const [toDoItems, setToDoItems ] = useState([]);
  let count = 1;

  const updateToDoItems = (toDoText) => {
    setToDoItems(toDoItems.concat({id: count, text: toDoText}));
    count++;
  }

  const removeAllItems = () => {
    (setToDoItems([]));
  }

  const removeToDoItem = () => {

  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          To Do List
        </p>
      </header>
      <ToDoForm handleChange={updateToDoItems}/>
      <ToDoItemList toDoItems={toDoItems}/>
      <button onClick={removeAllItems}>Remove all</button>
    </div>
  );
}

export default App;

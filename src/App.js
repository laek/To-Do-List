import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem.js';
import ToDoItemList from './ToDoItemList.js';
import {useState} from 'react';
import ToDoForm from './Form';
import DoneList from './DoneList';


function App() {
  const [toDoItems, setToDoItems ] = useState([]);
  const [count, setCount] = useState(1);
  const [doneItems, setDoneItems] = useState([]);

  const updateToDoItems = (toDoText) => {
    setToDoItems(toDoItems.concat({id: count, text: toDoText}));
    setCount(count+1);
  }

  const removeAllToDoItems = () => {
    (setToDoItems([]));
  }

  const removeAllDoneItems = () => {
    setDoneItems([]);
  }

  const removeToDoItem = (id) => {
    setToDoItems(toDoItems.filter((item) => (item.id !== id)));
  }

  const moveItemToDone = (id) => {
    setDoneItems(doneItems.concat(toDoItems.filter((item) => (item.id === id))));
    removeToDoItem(id);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          To Do List
        </p>
      </header>
      <div className="main-body">
        <div className="todo-list">
          <h1>To Do List</h1>
          <ToDoForm handleChange={updateToDoItems}/>
          <ToDoItemList removeToDoItem={removeToDoItem} toDoItems={toDoItems} moveItemToDone={moveItemToDone}/>
          <button onClick={removeAllToDoItems}>Remove all</button>
        </div>
        <div className="done-list">
          <h1>Done List</h1>
          <DoneList doneItems={doneItems} removeAllDoneItems={removeAllDoneItems}/>
        </div>
      </div>
    </div>
  );
}

export default App;

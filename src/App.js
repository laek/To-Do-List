import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem.js';
import ToDoItemList from './ToDoItemList.js';
import {useState} from 'react';


function App() {
let testItems = ["walk the dog", "mop the floor"];
const [toDoItems, setToDoItems ] = useState(testItems);

const updateToDoItems = () => {
  setToDoItems(toDoItems.concat("feed the kids"));
}

  return (
    <div className="App">
      <header className="App-header">
        <p>
          To Do List
        </p>
      </header>
      <button onClick={updateToDoItems}>Update</button>
      <ToDoItemList toDoItems={toDoItems}/>
    </div>
  );
}

export default App;

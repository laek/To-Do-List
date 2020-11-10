import React from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from './ToDoItem.js';


class ToDoItemList extends React.Component {
  render() {
    return(
      <div>
        {this.props.toDoItems.map(item => <ToDoItem toDoItemText={item}/>)}
      </div>
    );
  }
}

export default ToDoItemList;

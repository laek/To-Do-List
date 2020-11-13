import React from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from './ToDoItem.js';


class ToDoItemList extends React.Component {

  deleteItem = (id) => {
    this.props.removeToDoItem(id);
  }

  render() {
    return(
      <div>
        {this.props.toDoItems.map(item => <ToDoItem toDoItem={item} />)}
      </div>
    );
  }
}

export default ToDoItemList;

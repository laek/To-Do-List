import React from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from './ToDoItem.js';


class ToDoItemList extends React.Component {

  deleteItem = (id) => {
    this.props.removeToDoItem(id);
  }

  moveItemToDone = (id) => {
    this.props.moveItemToDone(id);
  }

  render() {
    return(
      <div>
        {this.props.toDoItems.map(item => <ToDoItem deleteItem={this.deleteItem} moveItemToDone={this.moveItemToDone} toDoItem={item} />)}
      </div>
    );
  }
}

export default ToDoItemList;

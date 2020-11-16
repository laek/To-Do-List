import React from 'react';
import ReactDOM from 'react-dom';

class ToDoItem extends React.Component {

  deleteItem = () => {
    this.props.deleteItem(this.props.toDoItem.id);
  }

  moveItemToDone = () => {
    this.props.moveItemToDone(this.props.toDoItem.id);
  }

  render() {
    return(
      <div>
        <p>{this.props.toDoItem.text}</p>
        <button onClick={this.deleteItem}>Delete</button>
        <button onClick={this.moveItemToDone}>Done</button>
      </div>
    );
  }
}

export default ToDoItem;

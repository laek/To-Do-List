import React from 'react';
import ReactDOM from 'react-dom';

class ToDoItem extends React.Component {

  deleteItem = () => {
    this.props.deleteItem(this.props.toDoItem.id);
  }

  render() {
    return(
      <div>
        <p>{this.props.toDoItem.text}</p>
        <button onClick={this.deleteItem}>Delete</button>
      </div>
    );
  }
}

export default ToDoItem;

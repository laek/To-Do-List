import React from 'react';
import ReactDOM from 'react-dom';

class ToDoItem extends React.Component {
  render() {
    return(
      <p>{this.props.toDoItemText}</p>
    );
  }
}

export default ToDoItem;

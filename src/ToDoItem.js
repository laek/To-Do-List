import React from 'react';
import ReactDOM from 'react-dom';

class ToDoItem extends React.Component {

  render() {
    return(
      <div>
        <p>{this.props.toDoItem.text}</p>
        <button >Delete</button>
      </div>
    );
  }
}

export default ToDoItem;

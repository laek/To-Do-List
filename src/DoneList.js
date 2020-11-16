import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import DoneItem from './DoneItem';

class DoneList extends React.Component {

  removeAllDoneItems = () => {
    this.props.removeAllDoneItems();
  }

  render() {
    return(
      <div>
        <h1>Done List</h1>
        {this.props.doneItems.map(item => <DoneItem doneItem={item} />)}
        <button onClick={this.removeAllDoneItems}>Remove all</button>
      </div>
    )
  }
}

export default DoneList;

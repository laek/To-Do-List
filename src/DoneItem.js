import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class DoneItem extends React.Component {

  render() {
    return(
      <div>
        <p>{this.props.doneItem.text}</p>
      </div>
    )
  }
}

export default DoneItem;

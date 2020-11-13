import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class ToDoForm extends React.Component {
    state = {toDoText: ''};
    
    updateText = (e) => {
        this.setState({toDoText: e.target.value});
    }

    addItem = () => {
        this.props.handleChange(this.state.toDoText);
        this.setState({toDoText: ''});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.updateText} value={this.state.toDoText}/>
                <button onClick={this.addItem}>Add item</button>
            </div>
        )
    }
}


export default ToDoForm;
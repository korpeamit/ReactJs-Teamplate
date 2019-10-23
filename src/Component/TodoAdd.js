import React, { Component } from 'react';

class TodoAdd extends Component{
    state = {
        content : ''
    }
    handleChange = (e) =>{
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content : ''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Add item</label>
                <input onChange={this.handleChange} value={this.state.content}></input>
            </form>
        )
    }
}

export default TodoAdd;
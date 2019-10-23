import React, {Component} from 'react';
import Todos from './Todo';
import TodoAdd from './TodoAdd'
class Todo extends Component{
    state = {
        todos : [
            {id : 1, content: 'Amit K'},
            {id : 2, content: 'Shashank M'},
            {id : 3, content: 'Vijay S'},
        ]
    }
    deleteTodo = (id) =>{
        const todos = this.state.todos.filter(todo =>{
            return todo.id !== id
        });
        this.setState({
            todos : todos
        })    
    }

    addTodo = (todo) =>{
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]; // ... spred operator
        this.setState({
            todos
        })
    }

    render(){
        return(
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
                <TodoAdd addTodo={this.addTodo}></TodoAdd>
            </div>
        )
    }
}   

export default Todo;
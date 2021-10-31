import React, { Component } from "react";
import TodoItem from "../TodoItem/index";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "play" },
        { id: 2, name: "sleep" },
      ],
    };
  }

  handleSubmi = (e) => {
    e.preventDefault();
    const todo ={
        id: this.state.todos.length + 1,
        name:e.target.task.value,
    };
    this.setState({todos: [...this.state.todos, todo]})

  };

  handleDelete = (id) => {
      this.setState({todos: this.state.todos.filter((todo)=> todo.id !== id)});
  };

  render() {
    return (
      <div className="todo">
        <form onSubmit={this.handleSubmi}>
          <input type="text" name="task" />
          <button>Add Task</button>
        </form>
        <ul className="todos">
          {this.state.todos.map((todo, i) => (
            <TodoItem todo={todo} key={i} 
            handleDelete={this.handleDelete}/>
          ))} 
        </ul>
      </div>
    );
  }
}

export default Todo;

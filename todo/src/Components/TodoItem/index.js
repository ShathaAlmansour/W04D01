import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
        //   <>
    //     //   <li>{this.props.todo.name}</li>
    //     // //   </>
    //     // );
    // }
    <div className='todolistDiv'>
        <li className='todoList'>
            <h3 className='todoName'> {this.props.todo.name} </h3>
            <h3 className='todoClose' onClick={ ()=> this.props.handleDelete (this.props.todo.id)}>X</h3>
        </li>
    </div>
        )
}
}
export default TodoItem;
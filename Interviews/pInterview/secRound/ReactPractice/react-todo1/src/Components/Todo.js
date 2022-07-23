import React from "react";
// import TodoList from "./TodoList";
class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: ""
        }
    }

  
    render(){

        return(
            <div >  
                {this.props.todos.map((todo, index) => (
                    <div key={index} className="todo-item">
                        <h3 >{todo.title}gh</h3>
                        <p>{todo.body}</p>
                        <button>Delete</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default Todo;
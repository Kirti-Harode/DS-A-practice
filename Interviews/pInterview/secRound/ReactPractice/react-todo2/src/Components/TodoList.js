import React from 'react';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            todos: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        let todo = Object.assign({}, {title: this.state.title}, {id: Math.floor(Math.random()*10000)});
        this.setState({
            title: "",
            todos: [...this.state.todos, todo]
        })
        console.log(this.state.todos)
    }

    deleteTodo(e, index){
        e.preventDefault();
        let remainingTodos = [...this.state.todos]
       remainingTodos.splice(index, 1);
       this.setState({
        todos: remainingTodos
       })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Add a Todo' value={this.state.title}
                    onChange={(e) => this.setState({title: e.target.value})}/>
                    <button >Create Todo</button>
                </form>
                {this.state.todos.map((todo, index) => (
                    <div key={todo.id}>
                        <p>{todo.title}</p>
                        <button onClick={(e) => this.deleteTodo(e, index)}>Delete</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default TodoList;
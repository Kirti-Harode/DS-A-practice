import React from "react";
import TodoForm from "./TodoForm";
import Todo from './Todo';
class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.todos = []
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            title: "",
            body: ""
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        let todo = Object.assign({}, this.state, {id: Math.floor(Math.random() * 10000)}); 
        this.addTodo(todo);
        this.setState({title: "", body: ""})
    }

    addTodo(todo){
        
        // let newTodos = [todo, ...this.todos];
        // this.todos = newTodos;
        this.todos.unshift(todo)
        console.log( this.todos);
    }

    deleteTodo(id, e){
        e.preventDefault();
        for(let i = 0; i < this.todos.length; i++){
            let todo = this.todos[i]
            if(todo.id === id){
                let lastTodo = this.todos[this.todos.length-1];
                [todo, lastTodo] = [lastTodo, todo];
                this.todos.pop();
            }
        }
        console.log("deleted")
        console.log(this.todos)

    }
    render(){
        // let todoItem = this.todos.map((todo, index) => (<Todo key={index} todo={todo}/>))
        // console.log("item: ",todoItem)
        return(
            <>
                <h1>What's the Plan for Today ?</h1>
                {/* <TodoForm addTodo={this.addTodo}/> */}
                <form onSubmit={this.handleSubmit}>
                    <label>Title:
                        <input type="text" placeholder="Add A todo" value={this.state.title} 
                        onChange={(e) => this.setState({title: e.target.value})}/>
                    </label>
                    <label>Body:
                        <textarea placeholder="add a description here" value={this.state.body}
                        onChange={(e) => this.setState({body: e.target.value})}/>
                    </label>
                    <button>Create Todo</button>
                </form>
                {/* <Todo todos={this.todos}/> */}
                 <div >  
                {this.todos.map((todo, index) => (
                    <div key={index} className="todo-item">
                        <h3 >{todo.title}</h3>
                        <p>{todo.body}</p>
                        <button onClick={(e) => this.deleteTodo(todo.id, e)} >Delete</button>
                    </div>
                ))}
            </div>

            </>
        )
    }
}

export default TodoList;
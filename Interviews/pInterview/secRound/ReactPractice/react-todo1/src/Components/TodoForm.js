import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: ""
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        let todo = Object.assign({}, this.state, {id: Math.floor(Math.random * 10000)});  //id is not working here
        this.props.addTodo(todo);
        this.setState({title: "", body: ""})
    }
    render(){
        return(
            <div>
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
            </div>
        )
    }
}

export default TodoForm;
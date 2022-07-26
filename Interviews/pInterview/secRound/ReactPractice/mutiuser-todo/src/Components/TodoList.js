import React from "react";

class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let newTask = this.state.title;
        this.props.addTask(newTask, this.props.userId)
        this.setState({title: ""})
    }

    render(){
        return(
            <div>
                <h2>{this.props.userName}</h2>
               
                {this.props.tasks.map((task, index) => (
                    <div key={index}> 
                        <p>{task}</p>
                        <button>Edit</button>
                        <button onClick={() => this.props.removeTask(this.props.userId, index)}>Delete</button>
                    </div>
                ))}

                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.title} placeholder="Write Something here.." onChange={(e) => this.setState({title: e.target.value})}/>
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
}

export default TodoList;



 
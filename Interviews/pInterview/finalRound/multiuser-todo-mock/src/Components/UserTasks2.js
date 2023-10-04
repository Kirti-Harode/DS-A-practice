import React from 'react';

class UserTasks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let newTask = Object.assign({}, {title: this.state.title}, {id: new Date().getTime()})
        // console.log(newTask)
        this.props.addTask(this.props.userId, newTask);
        this.setState({title: ""});
    }

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                        {this.props.tasks.map((task, index) => (
                            <div key={index}>
                                {task.title}
                                <button onClick={() => this.props.removeTask(this.props.userId, task.id)}>Delete</button>
                            </div>
                        ))}
                        <form onSubmit={this.handleSubmit}>
                            <input placeholder="Write something here..." value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} required/>
                            <button>Add Task</button>
                        </form>
            </div>
        )
    }
}

export default UserTasks;
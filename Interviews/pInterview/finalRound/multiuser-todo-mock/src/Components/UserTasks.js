import React from "react";

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
        let newTask = this.state.title;
        this.props.addTask(this.props.userId, newTask);

        this.setState({title: ""});
    }

    render(){
        return (
            <div>
                <h1>{this.props.userName}</h1>
                {this.props.tasks.map((task, index) => (
                        <div key={index}>
                            {task}
                            <button onClick={() => this.props.removeTask(this.props.userId, index)}>delete</button>
                        </div>
                ))}

                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Write Something here.." value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
}

export default UserTasks;
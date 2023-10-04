import React from 'react';
import UserTasks from './UserTasks2'
function fetchFunc1(){
    return [
        {user_id: 1, name: "Marvin", task: "swim"}, 
        {user_id: 1, name: "Marvin", task: "walk the dog"}, 
        {user_id: 2, name: "Daniel", task: "buy milk"}, 
        {user_id: 2, name: "Daniel", task: "go shopping"}, 
        {user_id: 3, name: "Jerry", task: "sleep"}
    ]
}
function fetchFunc2(){
    return  [
        {user_id: 4, name: "Bella", task: "Study"}, 
        {user_id: 5, name: "Nemo", task: "Run"}, 
        {user_id: 5, name: "Nemo", task: "buy milk"}, 
        {user_id: 6, name: "Dory", task: "go shopping"}, 
        {user_id: 6, name: "Dory", task: "sleep"}
    ]
}

class Tasks extends React.Component{
    constructor(){
        super();
        this.state={
            data: {},
            isLoaded: false,
        }
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    componentDidMount(){
        let obj = {};
        Promise.all([fetchFunc1(), fetchFunc2()])
        .then(res => [...res[0], ...res[1]])
        .then(data => data.forEach((entry, index) => {
            if(obj[entry.user_id] === undefined){
                obj[entry.user_id] = {id: entry.user_id, name:entry.name, tasks:[]}
            }
            obj[entry.user_id]["tasks"].push({id: index , title: entry.task})
        }))

        this.setState({data: obj});
    }

    
    addTask(userId, newTask){
        this.state.data[userId]["tasks"].push(newTask);
        // console.log(this.state.data)
        this.setState({data:this.state.data});
    }

    removeTask(userId, taskId){
        this.state.data[userId]["tasks"].forEach((task, index) => {
            if(task.id === taskId){
                let lastEle = this.state.data[userId]["tasks"][this.state.data[userId]["tasks"].length-1];
                [task, lastEle] = [ lastEle, task]
            }
        })
        this.state.data[userId]["tasks"].pop();
        this.setState({data:this.state.data});

    }
    render(){
        // console.log(this.state.data)
        return (
            <div>
                {Object.values(this.state.data).map((entry, index) => (
                    <div key={index}>
                       <UserTasks userId={entry.id} name={entry.name} tasks={entry.tasks} addTask={this.addTask} removeTask={this.removeTask}/>
                    </div>
                ))}
            </div>
        )
    }
}

export default Tasks;
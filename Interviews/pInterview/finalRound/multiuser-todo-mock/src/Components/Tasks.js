import React from 'react';
import UserTasks from './UserTasks';
class Tasks extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {} // {id: {name: userName, tasks: []}}
        }
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    //the functions already given : 
    fetchFunc1(){
        return [
            {user_id: 1, name: "Marvin", task: "swim"}, 
            {user_id: 1, name: "Marvin", task: "walk the dog"}, 
            {user_id: 2, name: "Daniel", task: "buy milk"}, 
            {user_id: 2, name: "Daniel", task: "go shopping"}, 
            {user_id: 3, name: "Jerry", task: "sleep"}
        ]
    }
    fetchFunc2(){
        return  [
            {user_id: 4, name: "Bella", task: "Study"}, 
            {user_id: 5, name: "Nemo", task: "Run"}, 
            {user_id: 5, name: "Nemo", task: "buy milk"}, 
            {user_id: 6, name: "Dory", task: "go shopping"}, 
            {user_id: 6, name: "Dory", task: "sleep"}
        ]
    }


    addTask(userId, newTask){
        this.state.data[userId]["tasks"].push(newTask);
        // console.log(this.state.data[userId]);
        this.setState({data: this.state.data});
    }

    removeTask(userId, index){
        this.state.data[userId]["tasks"].splice(index, 1);
        // console.log(this.state.data[userId]);
        this.setState({data: this.state.data});
    }

    componentDidMount(){
        let obj = {};
        Promise.all([this.fetchFunc1(), this.fetchFunc2()])
        .then(res => [...res[0], ...res[1]])
        .then(combinedRes => combinedRes.forEach(entry => {
            if(!(entry.user_id in obj)){
                obj[entry.user_id] = {id: entry.user_id, name: entry.name, tasks: []}
            }
            obj[entry.user_id]["tasks"].push(entry.task);
        
        }))

        this.setState({data: obj});
    }

    render(){
        console.log(this.state.data);
        return(
            <div>
                {Object.values(this.state.data).map((entry, index) => (
                    <UserTasks userName={entry.name} key={index} tasks={entry.tasks} userId={entry.id} addTask={this.addTask} removeTask={this.removeTask}/>
                ))}
            </div>
        )
    }
}

export default Tasks;


// username 
    //  task1 delete
    // task2 delete
    // input create task button

//  userName   
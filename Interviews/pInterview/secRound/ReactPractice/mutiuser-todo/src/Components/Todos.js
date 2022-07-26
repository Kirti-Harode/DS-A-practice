import React from "react";
import TodoList from './TodoList'

class Todos extends React.Component{
    constructor(props){
        super(props);                 
        this.state = {
            isLoaded : false,
            data : []
        }
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this)
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

    componentDidMount(){
        let obj = {};
        Promise.all([this.fetchFunc1(), this.fetchFunc2()])
        .then(res => ( [...res[0], ...res[1]] ))                   
        .then(res => res.forEach(entry => {
            if(obj[entry.user_id] === undefined){
                obj[entry.user_id] = {id: entry.user_id, userName: entry.name, tasks: []};
            }
            obj[entry.user_id]['tasks'].push(entry.task);
            
        }) );

        this.setState({data : obj, isLoaded: true});
    }

    addTask(newtask, userId){ 
        this.state.data[userId]['tasks'].push(newtask);  
        // console.log(this.state.data[userId]);
        this.setState({data : this.state.data});
    }

    removeTask(userId, index){
        this.state.data[userId]['tasks'].splice(index, 1);
        // console.log(this.state.data[userId]);
        this.setState({data : this.state.data})
    }

    render(){
        let alldata = Object.values(this.state.data);
        return(
            <div>
                {(!this.state.isLoaded || alldata.length === 0) ? (<div>Loading...</div>) : 
                    (alldata.map((data, index) => (
                        <TodoList  key={index} userName={data.userName} userId={data.id} tasks={data.tasks} addTask={this.addTask} removeTask={this.removeTask}/>
                    )))
                }
            </div>
        )
    }
}

export default Todos;


//user1 
       // input  add todo
       // todo1 delete
       //todo2 delete
//user2   

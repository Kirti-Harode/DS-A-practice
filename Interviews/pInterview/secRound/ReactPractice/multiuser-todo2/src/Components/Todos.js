import React from "react";   //import react to covert jsx to html 
import UserTasks from './UserTasks';
class Todos extends React.Component{  // extedn react.componenet to use the react properties and lifecycle methods, inheritance form the react.compoponent class
    constructor(props){
        super(props);   // this is to pass the props to the parent class so that I can use props in lifecycle methods, super is to call constructor of its parent class.

        this.state = {  // state is all the info about the component and props are data from parent or data for the child component
            data: {},
            isLoaded: false
        }
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }  // constructor is called before the render method without props, it will give error


    //A Promise is an object representing the eventual completion or failure of an asynchronous operation
    async fetchFunc1(){  //promises are returned from async fun, fetch, or any ajax request. chain them using .then, and catch the error if not resolved
        return [
            {user_id: 1, name: "Marvin", task: "swim"}, 
            {user_id: 1, name: "Marvin", task: "walk the dog"}, 
            {user_id: 2, name: "Daniel", task: "buy milk"}, 
            {user_id: 2, name: "Daniel", task: "go shopping"}, 
            {user_id: 3, name: "Jerry", task: "sleep"}
        ]
    }
    async fetchFunc2(){
        return [
            {user_id: 4, name: "Bella", task: "Study"}, 
            {user_id: 5, name: "Nemo", task: "Run"}, 
            {user_id: 5, name: "Nemo", task: "buy milk"}, 
            {user_id: 6, name: "Dory", task: "go shopping"}, 
            {user_id: 6, name: "Dory", task: "sleep"}
        ]
    } 

    componentDidMount(){ // works after mounting the component once 
        //fetch all the data in this bcos, 
        //1. data won't be loaded util after the first render, so set initial state properly, state shouldn't be undefined
        // to avoid unnessecory rerendering and code complexity.
        //2. if you do this in costructor or componentWillMount => this will be called twice once on the server, again on the client side
        //so componentDidMount will ensure that data is only fetched from the client where it should be.

        let obj = {};
        Promise.all([this.fetchFunc1(), this.fetchFunc2()])  //using promise.all here bcos both func will execute parallerly and return res in a array
        .then(responses => [...responses[0], ...responses[1]] ) // then return a single array of res
        .then( res => res.forEach(entry => {
            if(!(entry.user_id in obj)){
                obj[entry.user_id] = {id: entry.user_id, userName: entry.name, tasks: []}
            }
            obj[entry.user_id]['tasks'].push(entry.task);
        }))
            //now set the state with combined res
        this.setState({data: obj, isLoaded: true})
    }

    addTask(userId, newTask){
        this.state.data[userId]['tasks'].push(newTask);
        this.setState({data : this.state.data})
    }

    removeTask(userId, index){
        this.state.data[userId]['tasks'].splice(index, 1);
        this.setState({data : this.state.data});
    }

    
    // User-Defined Components Must Be Capitalized becos lowercase compo like <div>, <span> are passed to React.createElement as built in compo
    // starts with capital letter component passed to React.createElement and correspond to a component defined or imported in your JavaScript file
    render(){
        // console.log(this.state)
        return(
            <div>
                {(!(this.state.isLoaded) || (Object.values(this.state.data).length === 0)) ? (<div>Loading...</div>) :
                (
                    Object.values(this.state.data).map((entry, idx) => (
                        <UserTasks key={idx} userName={entry.userName} userId={entry.id} tasks={entry.tasks} removeTask={this.removeTask} addTask={this.addTask}/>
                    ))
                )}
            </div>
        )
    }
}
//unique key is required for every child because React uses a unique “key” prop on each child of the list to create a relationship between the component and the DOM

export default Todos;
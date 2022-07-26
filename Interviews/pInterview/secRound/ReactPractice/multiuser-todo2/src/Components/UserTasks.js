import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

class UserTasks extends React.Component{
    constructor(props){
        super(props);

        this.state={
            title: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);  
        //bind : to make sure functions have access to component attributes like this.props and this.state, bind the function on this scope
        // it is unnecessary to bind the render method or the lifecycle methods: we don’t pass them to other components.

    }

    handleSubmit(e){
        e.preventDefault(); //to prevent the default behaviour of html buttun, such as it refresh the page when clicked or take you to the diff route
        let newTask = this.state.title;
        this.props.addTask(this.props.userId, newTask);
        this.setState({title: ""})
    }

    render(){
        return(
            <div>
                <h2>{this.props.userName}</h2>
                {this.props.tasks.map((task, index) => (
                    <div key={index}>
                        {task}
                        <button onClick={() => this.props.removeTask(this.props.userId, index)}>delete</button>  {/*to pass the argument use arrow function   */}
                    </div>
                ))}

                <form onSubmit={this.handleSubmit}>
                    <input placeholder='Write Something here..' value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
}

//onchange, onsubmit are event handlers, input and button here are controlled components 
// event.target.value is returns the element that triggered the event, target represents a DOM element that triggered the evnt , target.value retrieves the value of that element 
//to pass an argumet use arrow function

export default UserTasks;


// Correct: handleClick is passed as a reference!
//   return <button onClick={this.handleClick}>Click Me</button>

// Wrong: handleClick is called instead of passed as a reference!
// return <button onClick={this.handleClick()}>Click Me</button>
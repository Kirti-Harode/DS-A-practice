import React from "react";

class UserTodo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(e){
        e.preventDefault();
        let todo = Object.assign({}, this.state, {id: Math.floor(Math.random()*100000)});  // not sure if i need to generate an id 
        this.props.addTodo(todo, this.props.userId);
        this.setState({
            title: ""
        })
    }

    render(){
        return(
            <div>
                <h2>{this.props.userName}</h2>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Add a Todo' value={this.state.title}
                        onChange={(e) => this.setState({title: e.target.value})}/>
                    <button >Create Todo</button>
                </form>

                <ul>
                {this.props.todos.map(todo => (                   
                    <li>
                        <h4>{todo.title} </h4>
                        <button onClick={() => this.props.deleteTodo(todo.id, this.props.userId)}>delete</button>
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}

export default UserTodo;


// to add the created todo 
    // addTodo(todo, userId){
    //     this.state.users.map(user => {
    //         if(user.id === userId){
    //             user.todos.push(todo);
    //         }
    //     })
    // }

    // to delete the created todo 
    // deleteTodo(userId, todoId){             // not sure if I should loop over users fisrt and then todos 
    //     this.state.users.map(user => {
    //         if(user.id === userId){
    //             user.todos.map((todo, index) => {
    //                 if(todo.id === todoId){
    //                     let lastEle = user.todos[user.todos.length-1];  // just swapped with the last ele and popped it
    //                     [todo, lastEle] = [lastEle, todo];
    //                     // console.log("true")
    //                 }
    //             })
    //             user.todos.pop();
    //         }
    //         // console.log(user.todos)
    //     })
    // }

   // <div key={index}>
                        //     <h2>{data.userName}</h2>
                        
                        //     {data.tasks.map((task, idx )=> (
                        //         <div key={idx}> 
                        //             <p>{task}</p>
                        //             <button onClick={(e) => this.removeTodo(e, data.id, idx)}>Delete</button>
                        //         </div>
                        //     ))}
            
                        //     <form onSubmit={this.handleSubmit(data.id)}>
                        //         <input value={this.state.title} placeholder="Write Something here.." onChange={(e) => this.setState({title: e.target.value})}/>
                        //         <button>Add Task</button>
                        //     </form>
                        // </div>
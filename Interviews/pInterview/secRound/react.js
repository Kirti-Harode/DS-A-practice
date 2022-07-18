// From 10 React Exercises:

// 1. Print JSX is Cool:
function App() {
    return (
    <div>JSX is cool</div>
    )
  }
  
ReactDOM.render(<App />, document.getElementById("root"));

// 2. Display Array of Users: 

const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
];
  
function App() {
    return (
      <>
        <h3>User names</h3>
        <ul>{users.map(user => <li>{user.name}</li>)}</ul>
      </>
    );
}


// 3. Show/Hide Element :

    //using functional component react hooks :
function App() {
    const [show, setShow] = React.useState(true);
  
    return (
      <>
        <button onClick={() => setShow(!show)}>{ show ? "Hide Element Below" : "Show Element Below"}</button>
        <div>{ show ? 'Toggle Challenge' : ''}</div>
      </>
    );
}
  
    // using class component:

    class App {
        constructor(props){
          super(props)
          this.state = {
            show: true
          }
          this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        handleSubmit(){
          this.setState({show: !this.state.show})
        }
        
       render(){
        return (
          <>
            <button onClick={this.handleSubmit}>{ this.state.show ? "Hide Element Below" : "Show Element Below"}</button>
      
            <div>{ this.state.show ? 'Toggle Challenge' : ''}</div>
          </>
        );
       }
      }
    
// 4. 2 way data binding in ReactJS :

function App() {
    const [value, setValue] = React.useState("");  // if I add any data instead of empty string this will show in the button
  
    return (
      <>
        <input type="text" placeholder="Enter Text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <p>{value}</p>
      </>
    );
}


// 5. Disable a button:

function App() {
    const [value, setValue] = React.useState("");
  
    return (
      <>
        <h3>Disable Button Challenge</h3>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button disabled={value.length < 1}>Submit</button>
      </>
    );
}



// 6. Update Parent state (using callback):

function Child({setValue}) {
    return (
      <>
        <div>Child</div>
        <button onClick={() => setValue("Parent has been updated!")}>Change Parent Value</button>
      </>
    );
  }
  
  function Parent() {
    const [value, setValue] = React.useState(
      "I need to be updated from my child"
    );
  
    return (
      <>
        <h3>Update Parent State Challenge (Using Callback)</h3>
        <div className="wrapper">
          <div>Parent</div>
          <div className="box-wrapper">{value}</div>
        </div>
  
        <div className="wrapper">
          <Child setValue={setValue} />
        </div>
      </>
    );
}


// 7. Dynamically add child components (React Children):

function Child() {
    return <div>This is children content</div>;
  }
  
  // Add code only here
  function Parent() {              // or pass {children } as a prop
    return (
      <div>
        <h3>Parent Component</h3>
        <Child/>                      // just call {children}
      </div>
    );
  }
  
  function App() {
    return (
      <Parent>
        <Child />
      </Parent>
    );
  }
  

// 8. Sum two Numbers:

function App() {
    const [number1, setNumber1] = React.useState();
    const [number2, setNumber2] = React.useState();
    const [total, setTotal] = React.useState(0);
  
    return (
      <div>
        <h2>Adding Two Numbers</h2>
        <input placeholder="First Number" type="number" value={number1} onChange={(e) => setNumber1(e.target.value)}/>
        <input placeholder="Second Number" type="number" value={number2} onChange={(e) => setNumber2(e.target.value)}/>
  
        <button onClick={() => setTotal(Number(number1) + Number(number2))}>Add Two Numbers</button>
        <p>Total: {total}</p>
      </div>
    );
}


//9. Set counter: 

const App = () => {
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
      </div>
    );
};


// 10. fetch data from an api:
const url = "https://jsonplaceholder.typicode.com/users/1";
/** 
  // Sample Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/

function App() {
    const [userData, setUserData] = React.useState({});
    
    const fetchData = async() =>{
      const response = await fetch(url);
      const jsonData = await response.json();
      setUserData(jsonData);
    }
    
    React.useEffect(() => {fetchData()}, []);
    // No need to touch code below
    return (
      <div className="App">
        <h2>User Data</h2>
        <p>
          <strong>Name: </strong>{" "}
          {userData.name || "(Need to populate name here)"}
        </p>
        <p>
          <strong>Website: </strong>
          {userData.website || "(Need to populate website here)"}
        </p>
        <p>
          <strong>Email: </strong>
          {userData.email || "(Need to populate email here)"}
        </p>
        <p>
          <strong>Phone: </strong>
          {userData.phone || "(Need to populate phone here)"}
        </p>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
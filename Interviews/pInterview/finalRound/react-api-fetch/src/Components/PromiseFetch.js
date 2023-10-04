import React from "react";

class PromiseFetch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
       fetch('https://random-data-api.com/api/users/random_user?size=10')
       .then(res => res.json())
       .then(res => this.setState({data: res}))
    }
    render(){
        // console.log(this.state.data)
        return(
            <div>
                {this.state.data.map((entry) => (
                    <div>
                        <h1>{entry.first_name}</h1>
                    <img src={entry.avatar}/>
                     </div>
                    
                ))}
            </div>
        )
    }
}

export default PromiseFetch;
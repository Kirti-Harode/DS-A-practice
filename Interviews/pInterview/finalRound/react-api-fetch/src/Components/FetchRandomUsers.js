import React from "react";

class FetchRandomUsers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            person: null
        }
    }

    async componentDidMount(){
        let url = 'https://api.randomuser.me/';
        let response = await fetch(url);
        let data = await response.json();
        this.setState({person: data.results[0], loading: false});
        console.log(data.results[0])
    }
    render(){
        return(
            <div>
                {this.state.loading  || !(this.state.person) ? (<div>Loading...</div>) : 
               ( <div>
                    <div>{this.state.person.name.title}</div>
                    <div>{this.state.person.name.first}</div>
                    <div>{this.state.person.name.last}</div>
                    <img  src={this.state.person.picture.large}/>
                </div>) }
            </div>
        )
    }
}

export default FetchRandomUsers;
import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state={
    users: {}
  }
  
  componentDidMount(){
    axios.get('https://api.github.com/users/ericcapiz')
    .then(res=>{
      this.setState({users:res.data})
      console.log("current state", this.state.users);

    })
    .catch(err=>alert("get request error"))
  }

  render(){
  return (
    <div className="App">
      <img src={this.state.users.avatar_url}></img>
      <h2>Name: {this.state.users.name}</h2>
      <h2>Git Handle: {this.state.users.login}</h2>
      <h2>Location: {this.state.users.location}</h2>
      <h2>Number of followers: {this.state.users.following}</h2>
    </div>
  );
  }
}

export default App;

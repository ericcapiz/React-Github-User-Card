import React from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import GitUser from './components/gituser';
import Following from './components/following';

const Container = styled.div `
background-color: dodgerblue;
width: 100%;
height:100vh;
h1{
  display: flex;
  justify-content: center;
  padding: 50px;
  color:white;
}
`

class App extends React.Component {
  state={
    users: {},
    following: []
  }
  
  componentDidMount(){
    axios.get('https://api.github.com/users/ericcapiz')
    .then(res=>{
      this.setState({users:res.data})
      console.log("user state", this.state.users);

    })
    .catch(err=>alert("get request error"));
    axios.get('https://api.github.com/users/ericcapiz/following')
    .then(res=>{
      this.setState({following:res.data});
      console.log("following state", this.state.following);
    })
  }

  render(){
  return (
  
    <Container>
      <h1>GitCard User</h1>
    
    <GitUser eric={this.state.users} />
     <Following follow={this.state.following}/>
    </Container>
    
  );
  }
}

export default App;

import React from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';

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
const CardCont = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items:center;
margin-top: 10%;

`

const Info = styled.div `
padding: 0 50px;
color:white;

`

const Image = styled.img `
width: 200px;
height:200px;
border-radius:20px;

`

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
  
    <Container>
      <h1>GitCard User</h1>
      <CardCont>
    
      <Image src={this.state.users.avatar_url} alt="profile pic"></Image>
      <Info>
      <h2>Name: {this.state.users.name}</h2>
      <h2>Git Handle: {this.state.users.login}</h2>
      <h2>Location: {this.state.users.location}</h2>
      <h2>Following: {this.state.users.following}</h2>
      <h2>Number of Repos: {this.state.users.public_repos}</h2>
      </Info>
      </CardCont>
    </Container>
    
  );
  }
}

export default App;

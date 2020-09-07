import React from 'react';
import styled from 'styled-components';

const Image = styled.img `
width: 200px;
height:200px;
border-radius:20px;

`;

const Info = styled.div `
padding: 0 50px;
color:white;

`;

const CardCont = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items:center;
margin-top: 5%;
`;

const GitUser = (props)=>{
    return(
        <CardCont>
    <Image src={props.eric.avatar_url}></Image>
    <Info>
      <h2>Name: {props.eric.name}</h2>
      <h2>Git Handle: {props.eric.login}</h2>
      <h2>Location: {props.eric.location}</h2>
      <h2>Following: {props.eric.following}</h2>
      <h2>Number of Repos: {props.eric.public_repos}</h2>
      </Info>
      </CardCont>
    )
}
export default GitUser;
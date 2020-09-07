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
margin-top: 10%;
`;


const Following =(props)=>{
    return(
        <div>
           {props.follow.map((item)=>(
               <div>
                <Image src={item.avatar_url} alt="profile pic"></Image>
                <h2>Name: {item.name}</h2>
                <h2>Git Handle: {item.login}</h2>
                <h2>Location: {item.location}</h2>
                <h2>Following: {item.following}</h2>
                <h2>Number of Repos: {item.public_repos}</h2>
                </div>
      ))}  
        </div>
    )
}
export default Following;
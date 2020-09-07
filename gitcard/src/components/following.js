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
padding: 10px;
`;


const Following =(props)=>{
    return(
        <CardCont>
           {props.follow.map((item)=>(
               <Info key={item.id}>
                <Image src={item.avatar_url} alt="profile pic"></Image>
                <h2>Git Handle: {item.login}</h2>
                </Info>
      ))}  
        </CardCont>
    )
}
export default Following;
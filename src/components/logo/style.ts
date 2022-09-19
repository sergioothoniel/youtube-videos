import styled from "styled-components";

export const LogoContainer = styled.h1`
color: red;
font-family: 'Dangrek', cursive;
font-size: ${props => props.className === "animated" ? "20px" : "100px"};
position: absolute;
top: ${props => props.className === "animated" ? "5vh" : "13vh"};
left: ${props => props.className === "animated" ? "8vw" : "32vw"};
animation-name: ${props => props.className === "animated" && "titleAnimation"};
animation-duration: 0.5s;
height: 40px;
display: flex;
align-items: center;

span{
  font-family: inherit;
  color: black;
  margin-left: 5px;
}

@keyframes titleAnimation {
  from {
    font-size: 100px;
    top: 13vh;
    left: 32vw;
  }

  to {
    font-size: 20px;
    top: 5vh;  
    left: 8vw;  
    
  }
}

`
import styled from "styled-components";

export const LogoContainer = styled.h1`
color: red;
font-family: 'Dangrek', cursive;
font-size: ${props => props.className === "animated" ? "2vw" : "10vw"};
position: absolute;
top: ${props => props.className === "animated" ? "6vh" : "13vh"};
left: ${props => props.className === "animated" ? "6vw" : "27vw"};
animation-name: ${props => props.className === "animated" && "titleAnimation"};
animation-duration: 0.5s;
display: flex;
align-items: center;

span{
  font-family: inherit;
  color: black;
  margin-left: 5px;
}

@keyframes titleAnimation {
  from {
    font-size: 10vw;
    top: 13vh;
    left: 27vw;    
  }

  to {
    font-size: 2vw;
    top: 6vh;  
    left: 6vw;    
  }
}

@media (max-width: 768px){
  position: static;
  justify-content: center;
  align-items: center;
  height: 20vh;
  margin-top: 50px;
  font-size: ${props => props.className === "animated" && "0"};  

  @keyframes titleAnimation {
    from{
      font-size: 10vw; 
      margin-top: 50px;
    }

    to {
      font-size: 0;  
      margin-top: 0;    
    }
  }
}

`
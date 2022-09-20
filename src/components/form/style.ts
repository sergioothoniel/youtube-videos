import styled from "styled-components";

export const FormContainer = styled.form`
display: flex;
height: 40px;
justify-content: center;
position: absolute;
width: 65vw;
top: ${props => props.className === "animated" ? "5vh" : "50vh"};
left: 18vw;
animation-name: ${props => props.className === "animated" && "formAnimation"};
animation-duration: 0.5s;
z-index: 100;

input{
    width: 100%;
    border: 1px solid #bebebe; 
    padding-left: 10px;   

    :focus{
        background-color: #F0F8FF;
    }
}


svg{
    width: 20%;
    height: 55%;
    margin-right: 5px;
}

button{
    border: none;
    background: none;
    margin: 0;
    padding: 0;
    height: 100%;
    cursor: pointer;
}

.buttonContainer{
    border: 1px solid #bebebe;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;  
    background-color: #f5f5f5;
    width: 15%;
}

@keyframes formAnimation {
  from {top: 50vh;}
  to {top: 5vh}
}


@media (max-width: 768px){
    width: 90vw;
    left: 5vw;

    .buttonContainer{
        width: 23vw;
    }

    svg{
        margin-right: 2px;
    }
}

`
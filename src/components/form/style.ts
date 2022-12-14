import styled from "styled-components";

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
position: absolute;
width: 65vw;
top: ${props => props.className === "animated" || props.className === "static" ? "5vh" : "50vh"};
left: 18vw;
animation-name: ${props => props.className === "animated" && "formAnimation"};
animation-duration: 0.5s;
z-index: 100;

input{
    width: 100%;
    border: 1px solid #bebebe; 
    padding: 0 0 0 10px ;
    height: 38px;
    border-right: none;

    :focus{
        background-color: #F0F8FF;
    }
}

.inputContainer{    
    display: flex;      
}

svg{
    width: 20%;
    height: 55%;
    margin-right: 5px;
}

.buttonContainer{
    border: 1px solid #bebebe;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;  
    background-color: #f5f5f5;
    width: 15%;
    height: 40px;

    button{
        height: 100%;
    }

    span{
        border: none;
        background: none;
        margin: 0;
        padding: 0;
        height: 100%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: initial;
    }
}

span{
        color: #f53a3a;
        font-size: small;
        margin-top: 5px;
    }

@keyframes formAnimation {
  from {top: 50vh;}
  to {top: 5vh}
}


@media (max-width: 768px){
    width: 90vw;
    left: 5vw;

    input{
        border-radius: 0;
    }

    .buttonContainer{
        width: 23vw;
    }

    svg{
        margin-right: 2px;
    }

    span{
        font-size: 11px;
    }
}

`
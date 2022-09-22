import styled from "styled-components";

export const TextFormatedContainer = styled.article`
display: flex;
justify-content: center;

    p{
        color: #424242;
        max-width: 100%;
        word-wrap: break-word;
    }

    .hideText{
        overflow: hidden;
        position: relative;
        line-height: 1.2em;
        max-height: 1.35em; 
        margin-right: -1em;
        padding-right: 1em; 
        width: min-content;
    }
   

    span{
        font-weight: 600;
        cursor: pointer;
    }

@media (max-width: 450px){
    flex-direction: column;
} 

`
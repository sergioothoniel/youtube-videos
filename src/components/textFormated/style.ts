import styled from "styled-components";

export const TextFormatedContainer = styled.article`
display: flex;
justify-content: center;

    p{
        color: #424242
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


 

`
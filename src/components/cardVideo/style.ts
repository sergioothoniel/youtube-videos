import styled from "styled-components"

export const CardContainer = styled.div`
display: flex;
width: 70%;
justify-content: center;
border: 1px solid black;

.videoDetails{
    margin-right: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h2{
        width: 90%;
    }

    p{
        width: 70%;
    }
}
`
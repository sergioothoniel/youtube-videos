import styled from "styled-components"

export const CardContainer = styled.div`
display: flex;
width: 75%;
justify-content: center;
border-bottom: 1px solid #bcbcbc;
height: 20vh;
align-items: center;
margin-top: 40px;
padding-bottom: 20px;

figure{
    height: 90%;
    width: 20%;
    

    img{
        height: 100%;
        max-width: 100% ;
    }
}

.videoDetails{    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 65%;
    height: 90%;

    h2, p{
        max-width: 90%;
    }
    
    p{
        color: #646464;
    }
}

button{
    width: 15%;
}

@media (max-width: 780px){
    width: 90%;
}

@media (max-width: 500px){
    flex-direction: column;
    width: 100vw;
    height: max-content;

    figure{
        width: 92%;
        height: 30vh;

        img{
            max-height: 100%;
            width: 100% ;
        }
    }

    .videoDetails{
        width: 100%;
        height: 35vh;
    }

    button{
        width: 45%;
    }
}
`
import styled from "styled-components";

export const HomeContainer = styled.div`

.videosListContainer{
    position: absolute;
    top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: space-between;
    width: 95vw;

    .navigationOptions{
        display: flex;
        justify-content: center;
        width: 50%;
        align-self: center;
        justify-content: space-evenly;
        margin: 35px 0 80px 0;
        
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 35px;
            cursor: pointer;
            width: max-content;
        }
    }
}

.loadingIcon{
    position: absolute;
    top: 40vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
}

@media (max-width: 780px){
    
    .videosListContainer{
        width: 100vw;

        .navigationOptions{
            width: 100vw;
        }
    }    
   
}

`
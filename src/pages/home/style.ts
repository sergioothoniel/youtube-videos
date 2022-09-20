import styled from "styled-components";

export const HomeContainer = styled.div`

.videosListContainer{
    position: absolute;
    top: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95vw;
    height: 700px;
    justify-content: space-between;

    .navigationOptions{
        display: flex;
        justify-content: center;
        width: 30%;
        align-self: center;
        justify-content: space-evenly;
        margin-top: 20px;
        
        button{
            display: flex;
            align-items: center;
            justify-content: center;
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

`
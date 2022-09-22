import styled from "styled-components";

export const DetailsPageContainer = styled.div`

.videoDetailBox{
    position: absolute;
    width: 100%;
    top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 1.5rem;
        text-align: center;
        margin: 20px 0 5px 0;
    }

    .videoDescription{
        width: 75%;
        margin: 20px 0 30px 0;
    }

    .videoStatistics{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        justify-content: center;
        width: 35vw;        
        justify-content: space-between;

        h2{
            height: 100%;
            display: flex;
            align-items: center;
        }
    }

    button{
        margin-bottom: 40px;
    }
}
`
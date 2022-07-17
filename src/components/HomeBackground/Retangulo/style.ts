import styled from "styled-components";

export const Retangulo = styled.div`
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    display: flex;
    height: 4rem;
    width: 100vw;
    justify-content: center;
    position: relative;
`;

export const DivTextLine = styled.div`
    display: flex;
    height: 4rem;
    width: 33vw;
    justify-content: space-between;
    margin-left: 200px;
    img {
        height: 75%;
        margin-left: 19px;
        align-self: center;
    }
`;

export const Text = styled.p`
    font-size: 0.6rem;
    color: #FFFFFF;
    margin-top: 20px;
    text-align: right;
`;

export const DivText2Timer = styled.div`
    display: flex;
    height: 4rem;
    width: 33vw;
    justify-content: start;
    margin-left: 50px;
`;

export const Text2 = styled.p`
    font-size: 0.6rem;
    color: #FFFFFF;
    margin-top: 30px;
    width: 8vw;
    text-align: center;
`;

export const DivTimer = styled.div`
    display: flex;
    width: 6vw;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    h3 {
        font-weight: 400;
        color: white;
        font-size: 0.5rem;
        text-align:center;
    }
`;
export const DivNavegLogout = styled.div`
    display: flex;
    width: 14vw;
    flex-direction: row;
    margin-left: auto;
`;
export const DivNavegacao = styled.div`
    display: flex;
    width: 7vw;
    flex-direction: column;
    justify-content: center;
    background: white;
    p {
        font-weight: 400;
        font-size: 0.8rem;
        margin-bottom: -10px;
        text-align:center;
        color: #C13216;
    }
`;

export const TextLogout = styled.div`
    display: flex;
    width: 7vw;
    flex-direction: row;
    justify-content: center;
    p {
        font-size: 16px;
        color: white;
        text-align: center;
        align-self: center;
    }
`;


import styled from 'styled-components';

export const CardDiv = styled.div`
    display: flex;
    padding: 10px;
    height: auto;
    width: auto;
    border-radius: 3px;
    :hover {
        transform: scale(1.2);
    }
    transition: transform 0.2s;
    text-decoration: none;
    color: black;
    cursor: pointer;

    // box-shadow: 1px 1px 5px gray;
    // justify-content: space-between;

    // border: solid;
    // border-width: 1px;
    // border-color: red;
`;

export const CardDivGreen = styled(CardDiv)`
    border: solid;
    border-color: green;
`;

export const CardDivRed = styled(CardDiv)`
    border: solid;
    border-color: red;
`;

const Div = styled.div`
    margin: 0 0 0 20px;
    height: auto;
`;

export const InfoDiv = styled(Div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;

    // border: solid;
    // border-width: 1px;
    // border-color: green;
`;

export const P = styled.p`
    height: auto;
    margin: 0;
`;

export const UserP = styled.p`
    font-size: 18px;
    font-weight: 700;
    height: auto;
    margin: 0;
`;

export const ProfileA = styled.a`
    color: black;
    :hover {
        color: #61dafb;
    }
`;

import styled from 'styled-components';

export const Div = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    // justify-content: center;
    padding: 10%;
`;

export const SubDiv = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    // align-items: center;
`;

export const UserDataDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
`;

export const ImgDiv = styled.div`
    height: 300px;
    align-self: start;
    border-radius: 10%;
    box-shadow: 0px 3px 5px rgba(15, 15, 15, 0.5);
    margin: 0 0 20px 0;
`;

export const Img = styled.img`
    height: 100%;
    width: auto;
    border-radius: 10%;
`;

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0 0 10px;
`;

export const UserP = styled.p`
    font-size: 30px;
    font-weight: 700;
    height: auto;
    margin: 0 0 10px 0;
`;

export const ProfileA = styled.a`
    font-size: 20px;
    color: black;
    :hover {
        color: #61dafb;
    }
`;

export const P = styled.p`
    font-weight: 500;
    height: auto;
    margin: 0;
`;

export const FollowersDiv = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
    margin: 30px 10px;
`;

import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2%;
`;

export const TextInputDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0 50px 0;
`;

export const ItemCardsDiv = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
`;

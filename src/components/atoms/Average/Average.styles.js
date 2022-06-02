import styled from 'styled-components';

export const AverageDetails = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: ${({theme}) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: ${({theme}) => theme.fontSize.s};
    background: ${({ theme, avg }) => {
        if (avg > 4) return theme.colors.success;
        if (avg > 3) return theme.colors.warning;
        if (avg > 2) return theme.colors.error;
        return theme.colors.grey;
    }} 
`
import styled from 'styled-components';

export const Wrapper = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 20px 0 0;
    padding-bottom: 15px;
    position: relative;
    &:not(:last-child)::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #ddd;
    }
`

export const ParagraphsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 20px 0 30px;

    p {
        color: ${({ theme }) => theme.colors.grey};
        margin: 0;
    }

    p:first-child {
        font-weight: 700;
        font-size: ${({theme}) => theme.fontSize.l}
    }

    p:last-child {
        font-size: ${({theme}) => theme.fontSize.l}
    }
`
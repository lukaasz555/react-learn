import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
    width: 150px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${({theme}) => theme.colors.darkPurple};
    justify-content: flex-start;
    padding: 30px 0;
`

export const Logo = styled.div`
    background-color: ${({theme}) => theme.colors.darkGrey};
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 30px;

    h1 {
        font-size: 15px;
        color: ${({theme}) => theme.colors.white};
        text-alighn: right;
        margin-right: 20px;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    text-align: right;
    margin: 15px 20px 15px auto;
    color: ${({theme}) => theme.colors.darkGrey};
    transition: color 0.25s;

    &:hover {
        color: ${({theme}) => theme.colors.darkPurple};
    }
`
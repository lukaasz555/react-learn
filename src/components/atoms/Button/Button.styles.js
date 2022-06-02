import styled from 'styled-components';

export const StyledButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 25px;
height: 25px;
color: white;
background-color: #ddd;
border-radius: 50px;
border: none;
cursor: pointer;
/* comment ###
background-color: ${(props) => props.isSecondary ? '#ddd' : 'royalblue'};
border-radius: ${({isSquare}) => (isSquare ? '0px' : '50px')}; 
*/

svg {
    width: 100%;
    height: 100%;
}
`
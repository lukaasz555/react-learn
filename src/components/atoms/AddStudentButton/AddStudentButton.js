import styled from "styled-components";

const AddStudentButton = styled.button`
    padding: 8px 20px;
    margin: 15px 0;
    font-size: ${({theme}) => theme.fontSize.m};
    color: ${({theme}) => theme.colors.darkGrey};
    background-color: ${({theme}) => theme.colors.lightPurple};
    border-radius: 20px;
    border: none;
    font-weight: 600;
    cursor: pointer;
`

export default AddStudentButton;
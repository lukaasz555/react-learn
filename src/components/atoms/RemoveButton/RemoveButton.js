import React from 'react';
import { StyledButton } from './RemoveButton.styles';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';



    const RemoveButton = (props) => (
        <StyledButton onClick={props.onClick}>
            <DeleteIcon/>
        </StyledButton>
    )


export default RemoveButton;
import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import RemoveButton from 'components/atoms/RemoveButton/RemoveButton';
import { Average } from 'components/atoms/Average/Average';
import { Wrapper, ParagraphsWrapper } from './UsersListItem.styles';


const UsersListItem = ({ handleDelete, index, userData: {average = "TBA", name, result}}) => (
<Wrapper>        
    <Average average={average}>
    </Average>
    < ParagraphsWrapper>
        <p>{name}</p>
        <p>{result}%</p>
    </ ParagraphsWrapper>
    <RemoveButton onClick={() => handleDelete(name)}>
    <DeleteIcon />
    </RemoveButton>
</Wrapper>
)

UsersListItem.propTypes= {
    userData: PropTypes.shape({
        average: PropTypes.string,
        name: PropTypes.string.isRequired,
        result: PropTypes.number.isRequired,
    })
}

export default UsersListItem;
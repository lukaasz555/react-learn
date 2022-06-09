import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import Button from 'components/atoms/Button/Button';
import { Average } from 'components/atoms/Average/Average';
import { Wrapper, ParagraphsWrapper } from './UsersListItem.styles';


const UsersListItem = ({ handleDelete, index, userData: {average = "TBA", name, result}}) => (
<Wrapper>        
    <Average average={average}>
    </Average>
    < ParagraphsWrapper>
        <p>{name}</p>
        <p>{result}</p>
    </ ParagraphsWrapper>
    <Button onClick={() => handleDelete(name)}>
    <DeleteIcon />
    </Button>
</Wrapper>
)

UsersListItem.propTypes= {
    userData: PropTypes.shape({
        average: PropTypes.string,
        name: PropTypes.string.isRequired,
        result: PropTypes.string.isRequired
    })
}

export default UsersListItem;
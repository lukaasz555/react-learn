import React from 'react';
import { StyledTitle, Wrapper } from '../UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import {Link} from 'react-router-dom';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
    return(
        <Wrapper as="form" onSubmit={handleAddUser}>
            <StyledTitle>Add new student</StyledTitle>
            <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
            <FormField label="Result" id="result" name="result" value={formValues.result} onChange={handleInputChange} type="number" />
            <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
            <Button type="submit" >Add</Button><br></br>
            <p></p>
            <Link to='/'>
                <Button>back</Button>
            </Link>
        </Wrapper>
    )
}

export default Form;
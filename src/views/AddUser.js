import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from "types";

const AddUser = ({handleAddUser, formValues, handleInputChange}) => {
    return(
        <ViewWrapper as="form" onSubmit={handleAddUser}>
            <Title>Add new student</Title>
            <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
            <FormField label="Result" id="result" name="result" value={formValues.result} onChange={handleInputChange} />
            <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
            <Button type="submit" >Add</Button><br></br>
            <p></p>
        </ViewWrapper>
    )
}

AddUser.propTypes = {
    handleAddUser: PropTypes.func.isRequired,
    formValues: PropTypes.shape(UserShape),
    handleInputChange: PropTypes.func.isRequired
}

export default AddUser;
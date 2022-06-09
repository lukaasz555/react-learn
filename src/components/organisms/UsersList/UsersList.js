import React, {useState, useEffect} from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import {Wrapper, StyledList} from 'components/organisms/UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import AddStudentButton from 'components/atoms/AddStudentButton/AddStudentButton';

const initialFormState = {
    name: '',
    attendance: '',
    average: ''
}

const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usersData) {
                resolve( [...usersData] );
            } else {
                reject({message: "ERROR_API"});
            }
        }, 2000);
    });
}

const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setLoadingState] = useState([]);
    const [formValues, setFormValue] = useState(initialFormState);

    const handleInputChange = e => {
        console.log(formValues);
        setFormValue({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const handleDelete = (name) => {
        const filteredUsers = users.filter(user => user.name !== name);
        setUsers(filteredUsers);
    }
 
useEffect(() => {
    setLoadingState(true);
    mockAPI()
        .then(res => {
            setLoadingState(false)
            setUsers(res)
        })
        .catch(err => console.log(err));
}, []);

useEffect(() => {
    console.log('loading state has changed');
}, [isLoading])

const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
        name: formValues.name,
        attendance: formValues.attendance,
        average: formValues.average
    }

    setUsers([
        ...users,
        newUser
    ])

    setFormValue(initialFormState)
}


    return(
<>
<Wrapper as="form">
{/* <StyledTitle>Add new student</StyledTitle> */}
<FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange}></FormField>
<FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange}></FormField>
<FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange}></FormField>
<AddStudentButton type="submit" onClick={handleAddUser}>Add</AddStudentButton>
</Wrapper>
        <Wrapper>
        <h1>{isLoading ? 'Loading...' : `User's list`}</h1>
        <StyledList>
             {users.map((userData, i) => (
                 <UsersListItem index={i} 
                                userData={userData} 
                                key={userData.name} 
                                handleDelete={handleDelete}
                                />
                )
             )}
        </StyledList>
    </Wrapper>
</>
    );
}

export default UsersList

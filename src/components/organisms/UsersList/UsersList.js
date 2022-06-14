import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import {Wrapper, StyledList, StyledTitle} from 'components/organisms/UsersList/UsersList.styles';
import Button from 'components/atoms/Button/Button';
import {Link} from 'react-router-dom';

const UsersList = ({users, handleDelete}) => {
    return(
<>
    <Wrapper>
        <StyledTitle>new students list</StyledTitle>
        <StyledList>
             {users?.map((userData) => (
                 <UsersListItem userData={userData} key={userData.name} handleDelete={handleDelete} />
                )
             )}
        </StyledList>
        <Link to='/add-user'>
        <Button>Add new student</Button>
        </Link>
        
    </Wrapper>
</>
    );
}

export default UsersList

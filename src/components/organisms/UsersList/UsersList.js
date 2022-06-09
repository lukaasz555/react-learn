import React, {useState, useEffect} from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import {Wrapper, StyledList} from 'components/organisms/UsersList/UsersList.styles';

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

    return(

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

    );
}

export default UsersList

import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import {Wrapper, StyledList, StyledTitle} from 'components/organisms/UsersList/UsersList.styles';
import Button from 'components/atoms/Button/Button';
import {Link} from 'react-router-dom';

/* const initialFormState = {
    name: '',
    attendance: '',
    average: ''
} */

/* const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usersData) {
                resolve( [...usersData] );
            } else {
                reject({message: "ERROR_API"});
            }
        }, 2000);
    });
} */

const UsersList = ({users, handleDelete}) => {

/*     const [users, setUsers] = useState([]);
    const [isLoading, setLoadingState] = useState([]);
    const [formValues, setFormValue] = useState(initialFormState); */

/*     const handleInputChange = e => {
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
} */


    return(
<>
    <Wrapper>
        <StyledTitle>new student list</StyledTitle>
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

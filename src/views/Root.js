import React, {useState, useEffect} from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/globalStyles';
import { Wrapper } from 'views/Root.styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';
import {users as usersData } from 'data/users';

const initialFormState = {
  name: '',
  result: '',
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

const Root = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);
  const [formValues, setFormValue] = useState(initialFormState);

  const handleInputChange = e => {
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

/* 
useEffect(() => {
console.log('loading state has changed');
}, [isLoading]) */

const handleAddUser = (e) => {
e.preventDefault();
const newUser = {
    name: formValues.name,
    result: Number(formValues.result),
    average: formValues.average
}

const infoMsg = document.querySelector('p');
if(newUser.name.length >= 3) {
  setUsers([...users, newUser])
setFormValue(initialFormState)
infoMsg.style.color = 'green';
infoMsg.textContent = 'success';
console.log(typeof(newUser.result));
} else {
infoMsg.style.color = 'red';
infoMsg.textContent = 'name should contain at least 3 chars';
}

/* setUsers([...users, newUser])
setFormValue(initialFormState)
const infoMsg = document.querySelector('p');
infoMsg.style.color = 'green';
infoMsg.textContent = 'success'; */
}

  return (
    <Router>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <Routes>
        <Route path='/add-user' element={<Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange}/>}/>
        <Route exact path='/' element={<UsersList users={users} handleDelete={handleDelete} />}/>
      </Routes>
    </Wrapper>  
    </ThemeProvider>
    </Router>
  )
}




export default Root;
import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/globalStyles';
import { Wrapper } from 'views/Root.styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {users as usersData } from 'data/users';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

const initialFormState = {
  name: '',
  result: '',
  average: ''
}

const Root = () => {
  const [users, setUsers] = useState(usersData);
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

const handleAddUser = (e) => {
e.preventDefault();
const newUser = {
    name: formValues.name,
    result: formValues.result,
    average: formValues.average
}

const infoMsg = document.querySelector('p');
if(newUser.name.length >= 3) {
  setUsers([...users, newUser])
setFormValue(initialFormState)
infoMsg.style.color = 'green';
infoMsg.textContent = 'success';
} else {
infoMsg.style.color = 'red';
infoMsg.textContent = 'name should contain at least 3 chars';
}

}

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route path='/add-user' element={<AddUser formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange}/>}/>
              <Route exact path='/' element={<Dashboard users={users} handleDelete={handleDelete} />}/>
            </Routes>
          </Wrapper>  
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
}




export default Root;
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import GlobalStyle from "assets/styles/globalStyles";
import { Wrapper } from "views/Root.styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import AddUser from "./AddUser";
import Dashboard from "./Dashboard";
import UsersProvider from "providers/UsersProviders";

/* export const UsersContext = React.createContext({
  users: [],
  handleDelete: () => {},
  handleAddUser: () => {},
}); */

const Root = () => {
  /*   const [users, setUsers] = useState(usersData);

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      result: formValues.result,
      average: formValues.average,
    };
 */
  /*     const infoMsg = document.querySelector("p");
    if (newUser.name.length >= 3) {
      setUsers([...users, newUser]);
      setFormValue(initialFormState);
      infoMsg.style.color = "green";
      infoMsg.textContent = "success";
    } else {
      infoMsg.style.color = "red";
      infoMsg.textContent = "name should contain at least 3 chars";
    } */

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Routes>
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;

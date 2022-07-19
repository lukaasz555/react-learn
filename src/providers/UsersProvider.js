import React, { useEffect, useState } from "react";
//import { users as usersData } from "data/users";
import axios from "axios";

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  handleDelete: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/students")
      .then(({ data }) => setUsers(data.students))
      .catch((err) => console.log(err));
  }, []);

  const handleAddUser = (value) => {
    const newUser = {
      name: value.name,
      result: value.result,
      average: value.average,
    };
    setUsers([...users, newUser]);
  };

  const handleDelete = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        handleDelete,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

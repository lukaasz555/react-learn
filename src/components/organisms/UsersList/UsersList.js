import React from "react";
import PropTypes from "prop-types";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { StyledList } from "components/organisms/UsersList/UsersList.styles";
import { UserShape } from "types";
import { Title } from "components/atoms/Title/Title";

const UsersList = ({ users = [] }) => {
  return (
    <>
      <Title>students list:</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem userData={userData} key={userData.name} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  handleDelete: PropTypes.func,
};

export default UsersList;

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import { UserShape } from "types";
import UsersList from "components/organisms/UsersList/UsersList";
import { UsersContext } from "providers/UsersProviders";

const Dashboard = () => {
  const { users } = useContext(UsersContext);

  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  handleDelete: PropTypes.func,
};

export default Dashboard;

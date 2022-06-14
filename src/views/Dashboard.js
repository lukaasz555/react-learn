import React from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UserShape } from 'types';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = ({users, handleDelete}) => {
    return (
        <ViewWrapper>
            <UsersList users={users} handleDelete={handleDelete} />
        </ViewWrapper>
    )
};

Dashboard.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
    handleDelete: PropTypes.func,
};

export default Dashboard;
import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import {Wrapper, StyledList} from 'components/organisms/UsersList/UsersList.styles';

class UsersList extends React.Component {

    state = {
        isUserList: true,
    }

    toggleTitle = () => {
        this.setState((prevState) => ({isUserList: !prevState.isUserList}))
    }

    render() {
        return (
            <Wrapper>
                <h1>{this.props.title}</h1>
                <h1>{this.state.isUserList ? `User's list` : `Student's list`}</h1>
                <button onClick={this.toggleTitle}>change title</button>
                <StyledList>
        
                     {users.map((userData, i) => (
                         <UsersListItem index={i} userData={userData} key={userData.name} />
                        )
                     )}
        
                </StyledList>
            </Wrapper>
        );
    }
}



/* (
    <Wrapper>
        <StyledList>

             {users.map((userData, i) => (
                 <UsersListItem index={i} userData={userData} key={userData.name} />
                )
             )}

        </StyledList>
    </Wrapper>
)
 */

export default UsersList

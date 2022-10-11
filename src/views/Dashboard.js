<<<<<<< Updated upstream
import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
//import { UsersContext } from "providers/UsersProvider";
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
	//const { users } = useContext(UsersContext);
	const { id } = useParams();
	const [students, setStudents] = useState([]);
	const [groups, setGroups] = useState([]);

	useEffect(() => {
		axios
			.get('/groups')
			.then(({ data }) => setGroups(data.groups))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get(`/students/${id || groups[0]}`)
			.then(({ data }) => setStudents(data.students))
			.catch((err) => console.log(err));
	}, [id, groups]);

	return (
		<ViewWrapper>
			<nav>
				{groups.length > 0 ? (
					groups.map((group) => (
						<NavLink key={group} to={`/group/${group}`}>
							{group}
						</NavLink>
					))
				) : (
					<p>Brak dostępnych grup</p>
				)}
			</nav>
			<UsersList users={students} />
		</ViewWrapper>
	);
=======
import React from "react";
import { useParams, NavLink, Navigate } from "react-router-dom";
import { StyledTitle } from "components/organisms/UsersList/UsersList.styles";
import { useStudents } from "hooks/useStudents";
import StudentsList from "components/organisms/StudentsList/StudentsList";
import { Wrapper, GroupWrapper, TitleWrapper } from "./Dashboard.styles";

const Dashboard = () => {
  const { id } = useParams();
  const { groups } = useStudents();

  if (!id && groups.length > 0) return <Navigate replace to="/group" />;

  /*   useEffect(() => {
    axios
      .get("/groups")
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]); */

  return (
    <Wrapper>
      <TitleWrapper>
        <StyledTitle as="h2">Group {id || groups[0]}</StyledTitle>

        <nav>
          {groups.length > 0 ? (
            groups.map((group) => (
              <NavLink key={group} to={`/group/${group}`}>
                {group}
              </NavLink>
            ))
          ) : (
            <p>Brak dostępnych grup</p>
          )}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList />
      </GroupWrapper>
    </Wrapper>
  );
>>>>>>> Stashed changes
};

export default Dashboard;

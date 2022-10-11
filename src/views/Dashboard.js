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
		<>
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
			<ViewWrapper>
				<UsersList users={students} />
			</ViewWrapper>
		</>
	);
};

export default Dashboard;

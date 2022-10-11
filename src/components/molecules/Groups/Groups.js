import { groups } from 'mocks/data/groups';
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.nav`
	background-color: lightblue;
	width: 100%;
	max-width: 500px;
	margin: 25px;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 25px;
	box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
	padding: 0 1em;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 0;

	nav {
		margin-left: 2em;
	}

	nav a {
		margin: 0 0.15em;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.darkGrey};
		&:hover {
			text-decoration: underline;
		}
	}
`;

const Groups = ({ groups, id }) => {
	console.log(id);
	return (
		<Wrapper>
			<Title>{id === undefined ? 'Pick group' : `Group ${id}`}</Title>
			<nav>
				{groups.map((group) => (
					<NavLink key={group} to={`/group/${group}`}>
						{group}
					</NavLink>
				))}
			</nav>
		</Wrapper>
	);
};

export default Groups;

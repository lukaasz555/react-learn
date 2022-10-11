import styled from 'styled-components';

export const ViewWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 25px;
	background-color: ${({ theme }) => theme.colors.white};
	width: 100%;
	max-width: 500px;
	padding: 40px 50px;
	border-radius: 25px;
	box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);

	nav a {
		margin: 0 0.15em;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.darkGrey};
		&:hover {
			text-decoration: underline;
		}
	}
`;

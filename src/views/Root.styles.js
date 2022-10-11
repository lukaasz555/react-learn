import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.lightGrey};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;

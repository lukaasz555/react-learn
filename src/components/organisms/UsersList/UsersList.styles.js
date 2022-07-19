import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 25px;
  min-width: 30%;
  padding: 40px 30px;
  border-radius: 25px;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

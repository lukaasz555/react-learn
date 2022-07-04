import styled from "styled-components";

export const Button = styled.button`
  padding: ${({ isBig }) => (isBig ? "10px 35px" : "7px 20px")};
  margin: 30px 0 15px;
  min-width: 30%;
  font-size: ${({ isBig, theme: { fontSize } }) =>
    isBig ? fontSize.m : fontSize.s};
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

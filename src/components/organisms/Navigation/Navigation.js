import { React } from "react";
import { Wrapper, Logo, StyledLink } from "./Navigation.styles";

export const Navigation = () => (
  <Wrapper>
    <Logo>
      <h1>
        Study
        <br />
        Buddy
      </h1>
    </Logo>
    <StyledLink to="/group">Dashboard</StyledLink>
    <StyledLink to="/add-user">Add student</StyledLink>
  </Wrapper>
);

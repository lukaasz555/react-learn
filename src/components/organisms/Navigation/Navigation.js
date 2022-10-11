import { React } from "react";
import { Wrapper, Logo, StyledLink, LogoTitle } from "./Navigation.styles";

export const Navigation = () => (
  <Wrapper>
    <Logo>
      <h1>
        <LogoTitle to="/">
          Study
          <br />
          Buddy
        </LogoTitle>
      </h1>
    </Logo>
    <StyledLink to="/group">Dashboard</StyledLink>
    <StyledLink to="/add-user">Add student</StyledLink>
  </Wrapper>
);

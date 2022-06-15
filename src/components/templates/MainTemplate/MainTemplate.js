import React from "react";
import { Navigation as Nav } from "components/organisms/Navigation/Navigation";
import { Wrapper } from "components/templates/MainTemplate/MainTemplate.styles";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Nav />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;

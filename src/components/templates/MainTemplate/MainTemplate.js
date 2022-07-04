import React from "react";
import { Navigation as Nav } from "components/organisms/Navigation/Navigation";
import { Wrapper } from "components/templates/MainTemplate/MainTemplate.styles";
import styled from "styled-components";
import { Input } from "components/atoms/Input/Input";
import SearchBar from "components/organisms/SearchBar/SearchBar";
import NewsSection from "../NewsSection/NewsSection";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Nav />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;

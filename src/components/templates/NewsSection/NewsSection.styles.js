import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import styled from "styled-components";

export const Wrapper = styled.div`
  grid-row: 1/3;
  grid-column: 3/3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h3`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const TitleWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0;
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  width: 100%;
  align-items: flex-start;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    line-height: 1.5;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  img {
    margin-left: 35px;
    max-width: 200px;
    object-fit: cover;
  }
`;

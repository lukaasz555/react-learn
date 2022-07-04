import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import React, { useState, useEffect } from "react";
import {
  Wrapper,
  NewsSectionHeader,
  TitleWrapper,
  ContentWrapper,
} from "./NewsSection.styles";
import { Button } from "components/atoms/Button/Button";
import { ArticleWrapper } from "./NewsSection.styles";
import axios from "axios";

/* const API_TOKEN = "f862ef88ec1c76b5f9165920cf30fd"; */

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(process.env.REACT_APP_DATOCMS_TOKEN);
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
        {
            allArticles {
              id
              title
              category
                  content
              image {
                url
              }
            }
          }
        `,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError(`Sorry, we couldn't load articles for you :(`);
      });
  });

  return (
    <Wrapper>
      <NewsSectionHeader>News feed</NewsSectionHeader>
      {articles.length > 0 && !error ? (
        articles.map(({ title, category, content, image = null }) => (
          <ArticleWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="img art" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : "Loading..."}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;

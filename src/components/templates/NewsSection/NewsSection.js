import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import React from "react";
import { Wrapper, NewsSectionHeader, TitleWrapper } from "./NewsSection.styles";
import { Button } from "components/atoms/Button/Button";
import { ArticleWrapper } from "./NewsSection.styles";

const data = [
  {
    title: "New kid in town",
    category: "Tech news",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores laboriosam iure eveniet, commodi ut dignissimos saepe voluptatum vel exercitationem est pariatur natus odio placeat voluptate! Sed, deserunt. Dolorem, iure!",
  },

  {
    title: "New kid in town #2",
    category: "Tech news",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores laboriosam iure eveniet, commodi ut dignissimos saepe voluptatum vel exercitationem est pariatur natus odio placeat voluptate! Sed, deserunt. Dolorem, iure!",
    image:
      "https://i.picsum.photos/id/16/500/400.jpg?hmac=ApYz1kc5dWBN3Ahmcj1jMXxLShwpd-8lfdXFlhcVzDQ",
  },

  {
    title: "New kid in town #3",
    category: "Tech news",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores laboriosam iure eveniet, commodi ut dignissimos saepe voluptatum vel exercitationem est pariatur natus odio placeat voluptate! Sed, deserunt. Dolorem, iure!",
  },
];

const NewsSection = () => (
  <Wrapper>
    <NewsSectionHeader>News feed</NewsSectionHeader>
    {data.map(({ title, category, content, image = null }) => (
      <ArticleWrapper key={title}>
        <TitleWrapper>
          <h3>{title}</h3>
          <p>{category}</p>
        </TitleWrapper>
        <p>{content}</p>
        {image ? <img src={image} alt="article image" /> : null}
        <Button>Read more</Button>
      </ArticleWrapper>
    ))}
    {/*     <ArticleWrapper>
      <TitleWrapper>
        <h3>Art title</h3>
        <p>Tech news</p>
      </TitleWrapper>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sit
        necessitatibus soluta laboriosam non possimus doloremque, quidem aliquam
        ab inventore nam dolore esse in dignissimos fuga explicabo rerum error
        magni. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, autem obcaecati repudiandae corporis veritatis nisi? Voluptas,
        iusto voluptatem. Amet mollitia similique dolorum. Aut, error! Eaque,
        eligendi culpa. Sed, veritatis minima?
      </p>
      <Button isBig>Read more</Button>
    </ArticleWrapper>

    <ArticleWrapper>
      <TitleWrapper>
        <h3>Art title</h3>
        <p>Tech news</p>
      </TitleWrapper>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sit
        necessitatibus soluta laboriosam non possimus doloremque, quidem aliquam
        ab inventore nam dolore esse in dignissimos fuga explicabo rerum error
        magni. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, autem obcaecati repudiandae corporis veritatis nisi? Voluptas,
        iusto voluptatem. Amet mollitia similique dolorum.
      </p>
      <Button>Read more</Button>
    </ArticleWrapper>

    <ArticleWrapper>
      <TitleWrapper>
        <h3>Art title</h3>
        <p>Tech news</p>
      </TitleWrapper>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sit
        necessitatibus soluta laboriosam non possimus doloremque, quidem aliquam
        ab inventore nam dolore esse in dignissimos fuga explicabo rerum error
        magni.
      </p>
      <Button>Read more</Button>
    </ArticleWrapper> */}
  </Wrapper>
);

export default NewsSection;

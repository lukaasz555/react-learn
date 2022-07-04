import React from "react";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "helpers/renderWithProviders";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import NewsSection, { query, URL } from "./NewsSection";

const mock = new MockAdapter(axios);

describe("News Section", () => {
  afterEach(() => {
    mock.reset();
  });

  it("displays an error when the articles are not loaded correctly", async () => {
    mock.onPost(URL, { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it("displays an articles", async () => {
    mock.onPost(URL, { query }).reply(200, [
      {
        data: {
          allArticles: [
            { id: 1, title: "Test", category: "Test", content: "Test" },
          ],
        },
      },
    ]);
    renderWithProviders(<NewsSection />);
    screen.queryByText(/Test/);
  });
});

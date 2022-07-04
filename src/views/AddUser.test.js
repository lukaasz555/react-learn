import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddUser from "./AddUser";
import Dashboard from "./Dashboard";
import { renderWithProviders } from "helpers/renderWithProviders";

describe("AddUser", () => {
  it("adds new user to the list", () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId("Name"), { target: { value: "Jan" } });
    fireEvent.change(screen.getByTestId("Result"), {
      target: { value: "105%" },
    });
    fireEvent.change(screen.getByTestId("Average"), {
      target: { value: "5.0" },
    });
    fireEvent.click(screen.getByTestId("Consent"));
    fireEvent.click(screen.getByText("Add"));
    screen.getByText("Jan");
  });

  it("prevents adding new user if there is no consent", () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId("Name"), { target: { value: "Jan" } });
    fireEvent.change(screen.getByTestId("Result"), {
      target: { value: "105%" },
    });
    fireEvent.change(screen.getByTestId("Average"), {
      target: { value: "5.0" },
    });
    fireEvent.click(screen.getByText("Add"));
    const newUser = screen.queryByText("Jan");
    /*     console.log("newUser", newUser); */
    expect(newUser).toBeNull();
  });
});

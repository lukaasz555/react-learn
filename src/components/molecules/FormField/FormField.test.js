import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormField from "./FormField";
import { renderWithThemeProvider } from "helpers/renderWithThemeProvider";

describe("Form Field", () => {
  it("Renders the component", () => {
    renderWithThemeProvider(<FormField label="name" name="name" id="name" />);
  });
});

// component written only for test:>
/* 
import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // fixed - toHaveValue is not a func;

const InputWithButton = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <input
        value={inputValue}
        name="Name"
        id="name"
        placeholder="enter your name..."
        onChange={handleInputChange}
      />

      <button disabled={!inputValue}>subm1t</button>
    </>
  );
};

describe("Input with button", () => {
  it("render the component", () => {
    render(<InputWithButton />);
    screen.getByText("subm1t");
  });

  it("properly handles value change", () => {
    render(<InputWithButton />);
    const btn = screen.getByText("subm1t");
    expect(btn).toBeDisabled();
    const input = screen.getByPlaceholderText("enter your name...");
    fireEvent.change(input, { target: { value: "Jan" } });
    expect(input).toHaveValue("Jan");
    expect(btn).not.toBeDisabled();
  });
});

export default InputWithButton; 
*/

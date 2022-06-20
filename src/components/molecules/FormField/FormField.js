import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Label } from "../../atoms/Label/Label";
import { Input } from "components/atoms/Input/Input";
import { renderWithThemeProvider } from "helpers/renderWithThemeProvider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    margin: 20px 0 10px;
    letter-spacing: 1px;
    font-weight: 600;
  }
`;

const FormField = ({
  onChange,
  value,
  label,
  name,
  id,
  type = "text",
  ...props
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      ></Input>
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;

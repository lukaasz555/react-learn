import React from "react";
import PropTypes from "prop-types";
import { Button } from "components/atoms/Button/Button";
import { UserShape } from "types";
import { Wrapper, StyledAverage, StyledInfo } from "./StudentsListItem.styles";

const StudentsListItem = ({ userData: { average, name, result = "0%" } }) => {
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name} <Button />
        </p>
        <p>result: {result}</p>
      </StyledInfo>
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;

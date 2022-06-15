import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as DeleteIcon } from "assets/icons/delete-icon.svg";
import RemoveButton from "components/atoms/RemoveButton/RemoveButton";
import { Average } from "components/atoms/Average/Average";
import { Wrapper, ParagraphsWrapper } from "./UsersListItem.styles";
import { UserShape } from "types";

const UsersListItem = ({
  handleDelete,
  userData: { average = "TBA", name, result },
}) => (
  <Wrapper>
    <Average average={average} />
    <ParagraphsWrapper>
      <p>{name}</p>
      <p>{result}%</p>
    </ParagraphsWrapper>
    <RemoveButton onClick={() => handleDelete(name)}>
      <DeleteIcon />
    </RemoveButton>
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  handleDelete: PropTypes.func,
};

export default UsersListItem;

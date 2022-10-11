import React from "react";
import { useParams } from "react-router-dom";
import StudentsListItem from "components/molecules/StudentsListItem/StudentsListItem";
import { StyledList } from "../UsersList/UsersList.styles";
import { Title } from "components/atoms/Title/Title";
import { useStudents } from "hooks/useStudents";

const StudentsList = () => {
  const { id } = useParams;
  const { students } = useStudents({ groupID: id });

  return (
    <>
      <Title>Students lyst</Title>
      <StyledList>
        {students.map((userData) => (
          <StudentsListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default StudentsList;

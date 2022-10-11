import React, { useState, useEffect } from "react";
import { Input } from "components/atoms/Input/Input";
import debounce from "lodash.debounce";
import {
  SearchBarWrapper,
  StatusInfo,
  SearchWrapper,
  SearchResults,
} from "./SearchBar.styles";
import { useStudents } from "hooks/useStudents";

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [matchingStudents, setMatchingStudents] = useState("");
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (e) => {
    const { students } = await findStudents(searchPhrase);
    setMatchingStudents(students);
  }, 666);

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
  }, [searchPhrase, getMatchingStudents]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>

      <SearchWrapper>
        <Input
          onChange={(e) => setSearchPhrase(e.target.value)}
          value={searchPhrase}
          name="Search"
          id="Search"
        />
        {searchPhrase && matchingStudents.length ? (
          <SearchResults>
            {matchingStudents.map((student) =>
              student(<li key={student.id}>{student.name}</li>)
            )}
          </SearchResults>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;

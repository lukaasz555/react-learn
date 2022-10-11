import { useEffect, useState } from "react";
import axios from "axios";
import { rest } from "msw";

export const useStudents = ({ groupID = "" } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  /*   useEffect(() => {
    (async () => {
      try {
        const result = await axios.get("/groups");
        setGroups(result.data.groups);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
 */
  useEffect(() => {
    axios
      .get("/groups")
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  /*   useEffect(() => {
    if (!groupID) return;
    (async () => {
      try {
        const result = await axios.get(`/students/${groupID}`);
        setStudents(result.data.students);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [groupID]); */

  useEffect(() => {
    if (groupID) {
      axios
        .get(`/students/${groupID}`)
        .then(({ data }) => setStudents(data.students))
        .catch((err) => console.log(err));
    }
  }, [groupID]);

  const findStudents = async (para1) => {
    try {
      const { data } = await axios.post(`students/search`, {
        para1,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  return {
    students,
    groups,
    findStudents,
  };
};
